# 📄 DOCUMENTO DE REQUISITOS DE SOFTWARE - Otimização Hídrica

## 1. Introdução
### 1.1 Objetivo do Sistema
Desenvolver uma aplicação Full-Stack voltada para a gestão inteligente de recursos hídricos na pequena agricultura. O sistema substitui sensores de hardware caros por inteligência de dados em nuvem, calculando o balanço hídrico da planta e informando ao produtor exatamente quando e quanto irrigar.

### 1.2 Escopo
O sistema permitirá:
* Cadastro de propriedades, áreas de plantio e tipos de culturas.
* Consumo automático de APIs meteorológicas (temperatura, umidade, chuva, evapotranspiração).
* Geração de prescrições diárias de irrigação.
* Armazenamento e visualização do histórico de consumo e relatórios de economia.

### 1.3 Definições
* **Evapotranspiração (ET):** Perda de água do solo por evaporação e da planta por transpiração. Métrica base para o cálculo hídrico.
* **Prescrição de Irrigação:** Recomendação gerada pelo sistema indicando o volume de água e a janela de tempo ideal para a rega.
* **Cultura:** Tipo de planta cultivada (ex: milho, feijão, tomate), que possui necessidades hídricas (Kc) específicas.

### 1.4 Stakeholders
* **Equipe do projeto:** David Frota da Silva, Fabricio Nascimento Moreira, Emiliocharles Geleilate Filho.
* **Usuários finais:** Pequenos e médios produtores agrícolas.
* **Parceiros potenciais:** Cooperativas agrícolas e ONGs de sustentabilidade.

---

## 2. Contexto de Uso
O sistema será utilizado por pequenos produtores rurais, geralmente em áreas com conexão de internet via rádio ou 3G/4G instável. O acesso ocorrerá preferencialmente no início da manhã ou fim da tarde, momentos antes de ligar as bombas de irrigação. A interface não pode assumir letramento digital avançado, devendo apresentar as ações de forma direta ("Ligue a bomba por X minutos hoje").

---

## 3. Personas (Jobs to be Done)

**Persona 1: Seu João (O Agricultor Tradicional)**
* **Perfil:** 55 anos, cultiva hortaliças há décadas. Usa smartphone para WhatsApp e YouTube.
* **Dor principal:** Gasta muita energia elétrica com a bomba d'água porque liga "de olho" no solo seco. Tem medo de perder a safra por falta de água.
* **Necessidade no App:** Precisa de uma tela gigante que diga apenas: "Hoje: Irrigar 50 Litros. Amanhã: Vai chover, não irrigar". Sem gráficos complexos na tela inicial.

**Persona 2: Carlos (O Jovem Cooperativado)**
* **Perfil:** 28 anos, assumiu a fazenda da família recentemente. 
* **Dor principal:** Sabe que a margem de lucro é apertada e quer modernizar a fazenda, mas não tem R$ 10.000 para investir em automação pesada.
* **Necessidade no App:** Quer ver o relatório de economia no fim do mês para saber quantos reais deixou de gastar com energia e água, validando sua gestão.

---

## 4. Requisitos Funcionais
* **RF01:** Permitir o cadastro de propriedades (localização via GPS/CEP) e culturas (tipo de planta e tamanho da área).
* **RF02:** O backend deve consumir diariamente APIs meteorológicas para obter previsão de chuvas e índices de evapotranspiração da geolocalização cadastrada.
* **RF03:** Gerar e exibir a prescrição de irrigação (Volume de água em Litros ou mm/ha e frequência recomendada).
* **RF04:** Registrar em banco de dados relacional todo o histórico de prescrições geradas e confirmadas pelo usuário.
* **RF05:** Gerar relatórios periódicos (semanal/mensal) de estimativa de economia de água e eficiência hídrica.

---

## 5. Requisitos Não Funcionais (Métricas SMART)
* **RNF01 (Usabilidade):** O painel de controle principal deve exibir a prescrição do dia em no máximo **1 clique** após o login.
* **RNF02 (Arquitetura/Confiabilidade):** O sistema deve utilizar banco de dados relacional (PostgreSQL) para garantir conformidade ACID no histórico agronômico.
* **RNF03 (Cloud/Disponibilidade):** O backend deve estar hospedado em nuvem com uptime de 99%, garantindo que o agricultor acesse a prescrição matinal sem quedas.
* **RNF04 (Desempenho/Assincronicidade):** As requisições para as APIs meteorológicas externas devem ser feitas em *background* (jobs agendados), garantindo que o tempo de carregamento da tela do usuário seja **inferior a 2 segundos**, mesmo se a API externa estiver lenta.

---

## 6. Casos de Uso (Principais)
* **UC01** – Cadastrar nova área de plantio e cultura.
* **UC02** – Visualizar prescrição diária de irrigação (Painel Principal).
* **UC03** – Confirmar a execução da rega (para alimentar o histórico).
* **UC04** – Acessar dashboard de histórico e economia mensal.

---

## 7. Fluxos do Sistema

### 7.1 Fluxograma Principal: Cálculo de Irrigação (Backend)
1. **Gatilho:** CRON Job (tarefa agendada) roda às 04:00 AM no servidor.
2. **Ação:** O backend busca todas as propriedades cadastradas no PostgreSQL.
3. **Integração:** Para cada propriedade, o sistema faz uma requisição à API de Clima usando a latitude/longitude do usuário.
4. **Processamento:** O motor lógico cruza o (Índice da Cultura) com a (Evapotranspiração da API) e subtrai a (Previsão de Chuva).
5. **Gravação:** O resultado (Prescrição Diária) é salvo no banco de dados.
6. **Fim:** Quando o agricultor acorda e abre o app, o cálculo já está pronto e carrega instantaneamente.

### 7.2 Fluxograma do Usuário: Leitura e Confirmação
1. **Início:** Agricultor abre o aplicativo.
2. **Visualização:** A tela inicial exibe um card grande: "Área 1 (Milho): Regar com 120 Litros hoje".
3. **Ação:** O agricultor realiza a rega física.
4. **Confirmação:** O agricultor clica no botão "Irrigação Concluída" no app.
5. **Sistema:** Registra a ação no histórico para o cálculo do relatório mensal.

---

## 8. Wireframes (Prototipação Detalhada)

**8.1 Tela Inicial (Dashboard Diário)**
* **Cabeçalho:** Clima atual da propriedade (Ícone de sol/chuva e temperatura).
* **Card Principal (Ação):** Nome da cultura e a prescrição do dia em destaque (Ex: 💧 **Ligar bomba por 45 min** ou **200 Litros**). Botão verde grande para "Confirmar Rega".
* **Aviso de Chuva:** Alerta visual caso haja previsão de chuva forte ("Poupe água, previsão de 15mm de chuva hoje!").

**8.2 Tela de Cadastro de Área**
* Campo: Nome da Área (Ex: Lote Sul).
* Mapa interativo ou botão "Usar minha localização atual" (GPS).
* Dropdown: Selecionar Cultura (Milho, Soja, Tomate, etc.).
* Input numérico: Tamanho da área (Hectares ou Metros Quadrados).

**8.3 Tela de Relatórios**
* Gráfico de linhas: Consumo de água (Litros) nos últimos 30 dias.
* Card de Sucesso: "Você economizou aproximadamente X mil litros de água este mês comparado à irrigação tradicional."

---

## 9. Regras de Negócio
* **RN01:** O cálculo hídrico deve obrigatoriamente abater a precipitação (chuva) prevista para o dia.
* **RN02:** Se a API meteorológica falhar, o sistema deve usar a média histórica do mês para aquela região, garantindo que o agricultor não fique sem instrução.
* **RN03:** Dados climáticos passados e relatórios gerados não podem ser alterados ou apagados pelo usuário (integridade de auditoria).

---

## 10. Arquitetura do Banco de Dados Inicial (PostgreSQL)
* **Produtor:** ID, Nome, Email, SenhaHash, DataCadastro.
* **Propriedade:** ID, Nome, Latitude, Longitude, Produtor_ID.
* **Cultura:** ID, Nome, CoeficienteCultura (Kc).
* **AreaPlantio:** ID, Tamanho, Propriedade_ID, Cultura_ID, DataPlantio.
* **PrescricaoHistorico:** ID, AreaPlantio_ID, Data, VolumeRecomendado, VolumeAplicado (Confirmado pelo usuario), EvapotranspiracaoDoDia.

---

## 11. Checklist de Aceitação
* [ ] Cadastro de propriedades capturando Latitude/Longitude com precisão.
* [ ] Backend conseguindo se comunicar com a API de clima e retornar JSON com sucesso.
* [ ] Algoritmo de cruzamento de dados (Cultura x Clima) gerando valores matematicamente coerentes.
* [ ] Interface carregando em menos de 2 segundos.
* [ ] Banco de dados armazenando histórico diário sem perda de dados.
* [ ] App compreensível por um usuário não-técnico em teste de usabilidade.

---

## 12. Requisitos Futuros (Backlog de Evolução)
* **Bot no WhatsApp:** Enviar a prescrição diária diretamente no WhatsApp do agricultor, eliminando a necessidade de baixar um aplicativo.
* **Integração com Relés Wi-Fi (Sonoff):** Permitir que, no futuro, o aplicativo ligue a bomba de água automaticamente, caso o agricultor queira investir R$ 100 em um relé inteligente.
* **Alertas de Geada/Seca Extrema:** Enviar notificações SMS ou Push caso haja previsão de eventos climáticos que destruam a safra.
