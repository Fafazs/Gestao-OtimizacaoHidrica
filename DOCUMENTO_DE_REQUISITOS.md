# 📄 DOCUMENTO DE REQUISITOS DE SOFTWARE
Projeto AgroCloud (Gestão e Otimização Hídrica)

## 1. Introdução
### 1.1 Objetivo do Sistema
O sistema tem como objetivo desenvolver, testar e implementar uma aplicação digital (Offline-First) acessível e intuitiva voltada à gestão inteligente de recursos hídricos na pequena agricultura. O sistema substitui hardwares de sensoriamento caros por inteligência em nuvem, calculando o balanço hídrico da planta e informando ao produtor exatamente quando e quanto irrigar, promovendo a sustentabilidade e a redução de custos.

### 1.2 Escopo
O sistema permitirá:
* Cadastro e gestão de propriedades, culturas e sistemas de irrigação.
* Calibração do estado inicial do solo ("Dia Zero").
* Consumo automático de APIs meteorológicas (previsão de chuva e evapotranspiração).
* Geração de prescrições diárias de rega (em Litros ou Minutos).
* Funcionamento totalmente offline no campo, com sincronização posterior.
* Acompanhamento de desempenho por meio de relatórios de economia (água e energia).

### 1.3 Definições
* **Evapotranspiração (ET0):** Perda de água do solo por evaporação e da planta por transpiração.
* **Coeficiente de Cultura (Kc):** Fator que ajusta a ET0 consoante a necessidade da planta.
* **Prescrição:** Recomendação diária de irrigação gerada pelo motor de regras.
* **PWA Offline-First:** Aplicação web que guarda dados no dispositivo para funcionar sem internet.
* **Usuário:** Pequeno ou médio produtor agrícola que utiliza o sistema.

### 1.4 Stakeholders
* **Equipe do projeto:** David Frota da Silva, Fabricio Nascimento Moreira, Emiliocharles Geleilate Filho.
* **Usuários finais (agricultores familiares e cooperativados).**
* **Parceiros (Secretarias de Agricultura, cooperativas, ONGs de sustentabilidade).**

---

## 2. Contexto de Uso
O sistema será utilizado por pequenos produtores rurais que enfrentam escassez hídrica e alto custo de energia, muitas vezes situados em zonas com **baixa ou nula conectividade (sombra de rede 3G/4G)**.
O uso ocorrerá em contextos como:
* Consulta matinal (5h - 6h) antes de ligar o sistema de irrigação.
* Registo de ações no meio da plantação, sem acesso à internet.
* Planeamento financeiro no fim do mês através da visualização de relatórios em casa (com Wi-Fi).

---

## 3. Personas
**Persona 1 – Seu João (Agricultor Tradicional)**
* Dificuldade: Gasta muita energia elétrica ligando a bomba de forma empírica ("de olho"). Internet só funciona na sede da propriedade.
* Busca: Uma instrução simples no meio da roça (ex: "Ligar 45 minutos"), sem precisar de interpretar gráficos complexos.

**Persona 2 – Carlos (Jovem Cooperativado)**
* Dificuldade: Margem de lucro apertada; quer modernizar a gestão, mas sensores físicos são caros. Usa irrigação por gravidade (litros).
* Busca: Ver relatórios claros de quantos Litros e Reais poupou no fim do mês para validar a sua gestão.

---

## 4. Requisitos Funcionais
* **RF01:** Permitir o cadastro de propriedades com geolocalização (GPS).
* **RF02:** Permitir o cadastro de áreas de plantio (Cultura, Tamanho, Tipo de Solo, Método de Irrigação, Capacidade da Bomba).
* **RF03:** Permitir a escolha da unidade de medida da prescrição (Litros ou Minutos de bomba).
* **RF04:** Permitir a calibração inicial do solo ("Quando choveu/irrigou pela última vez?").
* **RF05:** Consumir dados diários de APIs meteorológicas (Precipitação e ET0).
* **RF06:** Gerar prescrição diária de irrigação com base no balanço hídrico.
* **RF07:** Permitir marcação da rega como "Concluída" (mesmo offline).
* **RF08:** Sincronizar dados locais com a nuvem quando houver conexão.
* **RF09:** Permitir visualização de relatórios de economia hídrica e financeira.

---

## 5. Requisitos Não Funcionais
* **RNF01:** O sistema deve ter arquitetura PWA Offline-First, descarregando dados de madrugada para uso diurno sem internet.
* **RNF02:** O sistema deve ser acessível e de alto contraste, garantindo leitura sob luz solar intensa (WCAG 2.1 AA).
* **RNF03:** O sistema deve ser intuitivo, exibindo a prescrição em no máximo 1 clique após a abertura.
* **RNF04:** O sistema deve garantir a resiliência: se a API de clima falhar, usar médias históricas para não deixar o usuário sem dados.
* **RNF05:** O banco de dados (PostgreSQL) deve garantir a consistência (ACID) na sincronização de pacotes offline.

---

## 6. Requisitos de Conteúdo
O sistema deve apresentar:
* Alertas climáticos visuais (ex: ícone de chuva ou sol forte).
* Cards de prescrição com números grandes (Tempo ou Volume).
* Listas de áreas plantadas organizadas pelo status de rega do dia.
* Gráficos de barras simplificados (economia mensal).
* Formulários enxutos de cadastro (apenas os campos estritamente necessários).

---

## 7. Casos de Uso (Principais)
* **UC01** – Cadastrar propriedade e área de plantio.
* **UC02** – Configurar calibração inicial (Dia Zero).
* **UC03** – Visualizar prescrição diária de rega (Dashboard).
* **UC04** – Confirmar execução da rega (marcar como concluída).
* **UC05** – Sincronizar dados offline com a nuvem.
* **UC06** – Visualizar relatório de economia de água/energia.

---

## 8. Fluxos do Sistema
**Fluxo do Cérebro na Nuvem (Backend):**
* CRON Job acionado às 03:00 AM.
* Backend consome API de Clima (Previsão de chuva e ET0).
* Motor cruza dados da Cultura (Kc) + Solo + Método de Irrigação.
* Calcula a necessidade hídrica, abate a chuva prevista e gera a prescrição.
* Salva a recomendação diária no banco de dados.

**Fluxo do Produtor (Offline/Online):**
* Às 04:00 AM (com Wi-Fi), o PWA do celular descarrega a prescrição em background.
* Às 06:00 AM (na plantação, sem internet), o usuário abre a aplicação.
* Visualiza a recomendação, executa a rega e clica em "Concluída" (dado salvo localmente).
* Ao retornar para a sede, o PWA deteta a rede e sincroniza o histórico com o servidor.

---

## 9. Wireframes (Prototipação)
O sistema deverá conter as seguintes telas principais:
* **Tela Inicial (Dashboard):** Clima atual, card gigante com a recomendação ("💧 45 Minutos" ou "💧 200 Litros") e botão de "Confirmar Rega".
* **Tela de Cadastro de Áreas:** Formulário com seleção de Cultura, Solo, Método de Rega e Vazão.
* **Tela de Calibração (Modal):** Pergunta simples sobre a última rega/chuva.
* **Tela de Relatórios:** Gráficos de economia de água e card de poupança financeira.

---

## 10. Regras de Negócio
* **RN01:** O cálculo de água necessária deve obrigatoriamente abater a precipitação (chuva) prevista para o dia.
* **RN02:** O usuário pode optar por receber instruções em Volume (Litros) ou Tempo (Minutos). O cálculo de tempo exige o pré-cadastro da Vazão da Bomba.
* **RN03:** O histórico agronómico armazenado na nuvem e os relatórios não podem ser alterados retroativamente pelo usuário (integridade de auditoria).
* **RN04:** O uso do sistema básico de prescrição será gratuito.

---

## 11. Arquitetura do Sistema
### 11.1 Arquitetura Geral
O sistema será estruturado em três camadas focadas na resiliência:
* **Apresentação (Frontend PWA):** React.js ou Flutter Web, utilizando Service Workers e IndexedDB para armazenamento offline.
* **Aplicação (Backend):** API RESTful (ex: Node.js ou Python/Django) responsável pelo processamento lógico, agendamento de tarefas e consumo de APIs externas.
* **Dados (Database):** PostgreSQL para armazenamento relacional definitivo.

### 11.2 Modelo de Dados Inicial
**Entidades principais:**
* **Produtor:** ID, Nome, Email, SenhaHash, PreferenciaMedida (Tempo/Volume).
* **Propriedade:** ID, Nome, Latitude, Longitude, Produtor_ID.
* **Cultura:** ID, Nome, Kc_Fases.
* **AreaPlantio:** ID, TipoSolo, Eficiencia, VazaoBomba, Propriedade_ID, Cultura_ID.
* **PrescricaoHistorico:** ID, Area_ID, Data, Recomendado, Aplicado, Sincronizado.

---

## 12. Checklist de Aceitação
* [ ] Frontend PWA operando perfeitamente em "Modo Avião" (Offline).
* [ ] Motor matemático validado (conversão de ET0/Milímetros para Litros e Minutos).
* [ ] Integração com API meteorológica a retornar JSON corretamente em background.
* [ ] Alternância entre "Litros" e "Minutos" a funcionar conforme a preferência do usuário.
* [ ] Sincronização de dados pendentes ocorrendo automaticamente ao reconectar à internet.
* [ ] Interface intuitiva garantindo que a prescrição seja lida em até 1 segundo.

---

## 13. Requisitos Futuros (Backlog)
* Integração via WhatsApp Bot (prescrição enviada por mensagem automática).
* Venda/Integração com relés inteligentes (IoT - Sonoff) para ligar a bomba remotamente.
* Pluviômetro Social (permitir que o agricultor corrija falhas na previsão climática inserindo a chuva real).
* Alertas preventivos de geada ou seca extrema via SMS/Push Notification.
