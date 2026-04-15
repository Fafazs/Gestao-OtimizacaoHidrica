# 📄 DOCUMENTO DE REQUISITOS DE SOFTWARE (DRS)
## Projeto: AgroCloud (Guia Estratégico e Otimização Hídrica)

---

## 1. Introdução

### 1.1 Objetivo do Sistema e Visão do Produto

Para pequenos produtores rurais, agricultores familiares e iniciantes, que sofrem com desperdício de água/energia, enfrentam a incerteza do manejo empírico e precisam de orientação na roça (onde não há internet), o AgroCloud é um assistente de bolso (PWA Offline-First) que calcula a prescrição exata de irrigação e fornece um guia de missões baseado no ciclo da planta. Diferente de hardwares IoT caros ou ERPs complexos, nosso produto funciona 100% offline no campo, cruzando dados climáticos com a fase da cultura em uma interface de extremo contraste ("mão suja"), promovendo sustentabilidade e economia real.

### 1.2 Escopo (O que É e o que Não É)

O sistema permitirá:

* O cadastro rápido de propriedades com geolocalização e áreas de plantio (canteiros).
* A definição do ciclo de vida automático das plantas com base na cultura escolhida.
* A calibração inicial do solo ("Dia Zero") com dados da última rega e vazão da bomba.
* O consumo de APIs meteorológicas para previsão de chuva e cálculo de evapotranspiração.
* A geração de prescrições diárias de irrigação em Litros ou Minutos, ajustadas pela chuva.
* A confirmação de ações de manejo (rega, adubação) totalmente offline no campo.
* O acesso a uma biblioteca de cartilhas agronômicas de leitura rápida e simplificada.
* A sincronização em background dos dados locais com o servidor na nuvem assim que houver internet.
* A visualização de métricas básicas de economia de água e energia.

### 1.3 Definições

* Evapotranspiração (ET0): Perda de água do solo e da planta.
* Coeficiente de Cultura (Kc): Fator que ajusta a ET0 à fase de vida da planta (Muda, Crescimento, Colheita).
* PWA Offline-First: App web que armazena dados localmente (via IndexedDB/Service Workers) para funcionar sem internet.
* UI "Mão Suja": Interface desenhada com botões gigantes e alto contraste para uso no campo sob o sol, por mãos sujas de terra ou água.

### 1.4 Stakeholders

* Equipe de Produto e Engenharia.
* Usuários Finais: Agricultores familiares, novos produtores e horticultores.
* Usuários Facilitadores: Jovens sucessores rurais e Técnicos Extensionistas.

---

## 2. Contexto de Uso

O sistema será utilizado em ambientes de baixa ou nula conectividade. A rotina prevê o download dos dados em background durante a madrugada (via Wi-Fi da sede). O uso principal ocorre entre 5h e 6h da manhã, diretamente na roça, sob luz solar, onde o agricultor visualiza a prescrição, realiza a rega, marca como "Concluída" e consome dicas práticas sobre a cultura. O objetivo funcional é economizar recursos, enquanto o emocional é sentir segurança nas decisões agronômicas.

---

## 3. Personas e Jobs To Be Done (JTBD)

### Persona 1: Seu João, o Agricultor Empírico (Principal)

Dados: 58 anos, produtor de hortaliças. Celular Android antigo. Sem internet na roça.  
Comportamento: Acorda às 4h30. Irriga "de olho" e tende a regar em excesso por medo.  
Dores: Aplicativos difíceis de enxergar sob o sol, exigência de internet no campo.  
Jobs Funcionais: Saber o tempo exato da bomba; registrar ações offline; reduzir conta de luz.  
Jobs Emocionais: Sentir tranquilidade ao delegar cálculos complexos; alívio por não perder a safra.  
Jobs Sociais: Ser reconhecido na comunidade como um produtor eficiente e cuidadoso.  
Frase: "A terra eu entendo, mas de internet eu não sei nada. Só me diz quanto tempo a bomba tem que ficar ligada hoje."

### Persona 2: Carlos, o Jovem Sucessor (Secundária)

Dados: 23 anos, filho do Seu João, ajuda na horta e estuda. Smartphone intermediário.  
Comportamento: Tenta usar planilhas, busca vídeos no YouTube sobre novas técnicas.  
Dores: Resistência dos pais a mudanças; falta de histórico e padronização.  
Jobs Funcionais: Otimizar a produção com cronogramas; criar um histórico de manejo familiar.  
Jobs Emocionais: Sentir controle total sobre a produção; orgulho de modernizar o negócio da família.  
Jobs Sociais: Posicionar a propriedade como fornecedora de excelência para o mercado local.  
Frase: "Precisamos trabalhar com mais inteligência e menos desperdício."

### Persona 3: Marina, a Nova Produtora (Principal)

Dados: 35 anos, ex-urbana, comprou um sítio recente. Smartphone moderno.  
Comportamento: Pesquisa tudo no Google, fica confusa com excesso de informação divergente.  
Dores: Insegurança sobre as fases da planta; medo de errar no adubo e matar a plantação.  
Jobs Funcionais: Obter roteiro passo a passo do plantio à colheita; identificar as fases da planta.  
Jobs Emocionais: Reduzir o medo da inexperiência; sentir-se acompanhada por um "agrônomo de bolso".  
Jobs Sociais: Validar sua nova identidade como produtora rural perante amigos e família.  
Frase: "Plantei as sementes, nasceram, mas e agora? Qual é o próximo passo exato?"

### Persona 4: Raimundo, o Técnico Extensionista (Influenciador)

Dados: 48 anos, técnico de ONG/Governo. Visita dezenas de propriedades.  
Comportamento: Usa caderneta de papel; repete as mesmas instruções exaustivamente.  
Dores: O produtor esquece as recomendações quando ele vai embora.  
Jobs Funcionais: Garantir que o produtor siga o manejo correto entre as visitas.  
Jobs Emocionais: Sentir que seu trabalho tem impacto duradouro e escala.  
Jobs Sociais: Ser visto como um facilitador de tecnologia e inovação na região.  
Frase: "Se o produtor seguir a receita do app todo dia, o meu trabalho aqui rende o triplo."

---

## 4. Requisitos de Conteúdo e UX Writing

Para o aplicativo ter sucesso e engajamento, a arquitetura da informação e a linguagem devem seguir regras estritas:

* Tom de Voz: Direto, encorajador, simples e regional (evitar academicismos). Em vez de "Evapotranspiração da Cultura", usar "Sede da Planta hoje".
* Biblioteca Agronômica: Artigos estruturados em bullet points. Textos curtos com imagens otimizadas ou vetores (SVG) para não pesar no armazenamento offline.
* Foco Visual Diário: O conteúdo mais importante do dia (a quantidade de água) deve ocupar 40% da tela do usuário ao abrir o app.
* Gamificação Silenciosa: Feedbacks de sucesso ("Ótimo trabalho!", "Canteiro protegido") ao completar tarefas, reforçando a liberação de dopamina e a formação de hábito.

---

## 4.1 Requisitos Funcionais (RF)

* RF01 (Onboarding): Permitir uso inicial e visualização de cartilhas sem exigir login imediato.
* RF02: Cadastro de Propriedades (com geolocalização) e Áreas de Plantio (Canteiros).
* RF03: Permitir seleção da Cultura, definindo automaticamente o ciclo de vida (em dias) e as fases da planta.
* RF04: Calibração do "Dia Zero" (Última rega e capacidade/vazão da bomba).
* RF05: Consumo automático de APIs climáticas (Precipitação e ET0).
* RF06: Geração da prescrição diária de rega (em Litros ou Minutos).
* RF07 (Pluviômetro Social): Permitir que o usuário confirme ou negue a ocorrência de chuva no local antes da rega.
* RF08: Criação automática de "Missões" baseadas no ciclo da planta (ex: "Dia de adubar").
* RF09: Marcação de Regas e Missões como "Concluídas" offline.
* RF10: Sincronização automática com a nuvem ao reconectar.

---

## 4.2 Requisitos Não Funcionais (RNF)

* RNF01 (Resiliência): Arquitetura PWA Offline-First. Nunca exibir tela de carregamento infinito se não houver rede.
* RNF02 (Acessibilidade "Mão Suja"): Contraste mínimo de 4.5:1 (WCAG AA). Botões de ação principal com no mínimo 60x60 pixels. Suporte a Dark Mode.
* RNF03 (Performance): A prescrição deve ser carregada da memória local em menos de 1 segundo.
* RNF04 (Fall-back): Se a API climática falhar na nuvem, usar médias históricas mensais da região.

---

## 5. Entidades do Sistema e Ações (Casos de Uso)

### Entidade 1: O Usuário (Produtor)

O que pode fazer:

* Acessar o sistema sem login (para ler cartilhas).
* Cadastrar-se e gerenciar seu perfil (vazão da bomba, preferências).
* Criar, editar ou arquivar Canteiros de plantio.
* Responder ao "Pluviômetro Social" (Confirmar chuva na região).
* Marcar prescrições de rega diária como "Concluídas".
* Marcar missões de cultivo (adubar, podar) como "Concluídas".
* Consultar o histórico de ações e gráficos básicos de economia.

### Entidade 2: O Sistema (PWA Frontend + Banco Local)

O que pode fazer:

* Armazenar a base de dados agronômica e o clima de 3 dias no dispositivo do usuário.
* Calcular offline a prescrição de rega baseada nos dados armazenados localmente.
* Gerar alertas e cards de "Missões" baseando-se na data de plantio salva.
* Enfileirar ações do usuário (regas e missões concluídas) em uma lista de espera (sync queue).
* Detectar conexão à internet e disparar a sincronização silenciosa em background.

### Entidade 3: A API / Nuvem (Backend + APIS Externas)

O que pode fazer:

* Executar tarefas agendadas (CRON Jobs) de madrugada.
* Consultar coordenadas GPS dos usuários na API Open-Meteo.
* Consolidar os dados e calcular o pacote base de necessidades hídricas diárias.
* Receber e validar os pacotes de dados sincronizados pelo frontend.
* Fornecer métricas globais e atualizar o catálogo de culturas do app centralmente.

---


## 6. Fluxogramas do Sistema (Jornadas por Tela)

### 6.1 Fluxograma da Tela 1: Onboarding e Descoberta (Primeiro Acesso)

Foco: Capturar o contexto do usuário sem criar atritos de login.

[Início: Primeiro download do app]  
→ [Visualiza Tela 1: Boas-vindas e Promessa de Valor]  
→ [Usuário analisa as 3 opções de perfil]  
→ [Ação: Clica no Card "🏡 Tenho uma pequena horta"]  
→ [Sistema exibe Modal/Formulário rápido: "Legal! O que você quer plantar?"]  
→ [Usuário digita ou seleciona uma cultura inicial (Ex: Alface)]  
→ [Ação: Clica em "Começar meu cultivo"]  
→ [Sistema salva o perfil localmente e gera o primeiro canteiro virtual]  
→ [Redireciona para a Tela 2 (Dashboard)] → [Fim do Onboarding]

---

### 6.2 Fluxograma da Tela 2: Dashboard Principal (Rotina Matinal)

Foco: Ação rápida diária sob o sol (leitura de clima e execução de rega).

[Início: Usuário abre o app às 05:30 AM]  
→ [Condição Oculta do Sistema: A previsão de ontem marcou chuva?]

Se Sim:  
→ [Exibe Modal: Pluviômetro Social ("Choveu aí?")]  
→ [Usuário responde: "Não"]  
→ [Sistema recalcula a água necessária do dia]

Se Não:  
→ Pula para a etapa seguinte.

→ [Visualiza Tela 2: Dashboard com Clima Atual no topo]  
→ [Usuário localiza o "CardCanteiro" principal (Ex: Tomateiro)]

Interação Principal:  
→ [Clica no Botão Mão Suja diretamente no Card: "💧 Regar por 25 Min"]  
→ [Sistema registra offline na fila de sincronização e muda o status do card para "Tudo Regado por hoje 🍹"]

Interação Secundária (Criar Novo):  
→ [Usuário clica no FAB "+" no canto inferior]  
→ [Abre fluxo simplificado de "Novo Canteiro" (Nome, Cultura, Data de Plantio)]  
→ [Salva e adiciona novo Card ao Dashboard]

→ [Fim da Rotina Matinal]

---

### 6.3 Fluxograma da Tela 3: Meu Cultivo (Gestão Diária e Guia)

Foco: Detalhamento da planta, checklists de missões e educação.

[Início: Usuário clica sobre a imagem do "Tomateiro" no Dashboard]  
→ [Visualiza Tela 3: Foto da planta, Badge "Floração" e Checklist de Hoje]

Interação Principal (Missões):  
→ [Usuário lê o checklist "✅ Adubação confirmada?"]  
→ [Ação: Toca na caixa de seleção para confirmar]  
→ [Sistema emite feedback visual (confete/cor verde) e salva a ação]

Interação Secundária (Exploração do Ciclo):  
→ [Usuário rola a tela até a Timeline do Ciclo de Vida]  
→ [Ação: Clica na fase futura "Colheita"]  
→ [Sistema abre Modal: Exibe dicas de como saber o ponto certo de colher o tomate]  
→ [Usuário fecha o Modal]

Interação Terciária (Manutenção):  
→ [Usuário clica no botão "✏️ Editar Condições do Canteiro"]  
→ [Abre formulário para ajustar a data de plantio, caso a planta esteja crescendo mais devagar que o previsto]  
→ [Salva as edições]

→ [Fim da Interação com o Canteiro]

---

### 6.4 Fluxograma da Tela 4: Biblioteca Agronômica

Foco: Busca por conhecimento técnico, identificação de problemas e novas ideias.

[Início: Usuário acessa o menu de rodapé "📖 Biblioteca"]  
→ [Visualiza Tela 4: Barra de pesquisa, Filtros rápidos e Grid de Culturas]

Interação de Busca:  
→ [Ação: Usuário toca no filtro "Plantas Companheiras"]  
→ [Sistema filtra o Grid instantaneamente (Offline)]

Interação de Leitura:  
→ [Ação: Usuário clica no Card "Milho e Feijão"]  
→ [Sistema abre o Artigo da Cartilha (com tabelas de espaçamento e dicas de solo)]  
→ [Usuário lê as informações]

Interação de Conversão (Cross-sell interno):  
→ [No final do artigo, usuário clica no botão "🌱 Quero plantar isso"]  
→ [Sistema redireciona o usuário para o formulário de criação de Canteiro (Tela 2) já com a cultura "Milho" pré-selecionada]

→ [Fim da Pesquisa]

---

### 6.5 Fluxograma da Tela 5: Perfil, Ajustes e Comunidade

Foco: Configurações do app, transição de usuário anônimo para cadastrado e calibrações físicas.

[Início: Usuário acessa o menu de rodapé "👤 Perfil"]  
→ [Visualiza Tela 5: Status de Conexão no topo (ex: "☁️ Online e Sincronizado")]

Interação Principal (Cadastro Tardio):  
→ [Usuário visualiza o banner "Faça parte da comunidade!"]  
→ [Ação: Clica em "Criar Conta Gratuita"]  
→ [Sistema exibe formulário rápido de Cadastro (Nome, Telefone/Email, Senha)]  
→ [Usuário submete]  
→ [Sistema cria conta no Banco de Dados em Nuvem, vincula os dados locais "anônimos" ao novo perfil e inicia o backup definitivo]

Interação Secundária (Calibração Técnica):  
→ [Usuário clica em "⚙️ Calibrar Bomba d'Água"]  
→ [Sistema abre Modal: Pergunta "Você sabe a vazão da sua bomba ou quer fazer o Teste do Balde?"]  
→ [Usuário seleciona "Sei a vazão"]  
→ [Digita o valor (Ex: 1000 Litros/Hora)]  
→ [Sistema salva e altera automaticamente a exibição da Tela 2 de "Minutos" para "Litros", se o usuário preferir.]

→ [Fim da Configuração]

---

## 7. Prototipação e Componentização (Diretrizes para o Figma)

A construção visual deve seguir a metodologia Atomic Design para garantir um sistema escalável e focado em acessibilidade rural.

### 7.1 Tokens (Fundações)

Paleta de Cores:

* Primária (Mato/Segurança): #2E7D32 (Verde Escuro)
* Destaque Hídrico (Ação): #0288D1 (Azul Forte)
* Alerta/Clima (Sol): #F57F17 (Laranja)
* Fundo do App: #F4F6F8 (Off-white para contraste)

Tipografia: Inter ou Roboto. Escala generosa: Textos de corpo 18px, Títulos 24px, Números de Prescrição 64px ou maior (Heavy/Black).

Espaçamento: Grid de 8px. Áreas de toque muito amplas.

---

### 7.2 Componentes (Átomos e Moléculas)

Átomo IconBox: Ícones SVG simples e de linha grossa (Cenoura, Tomate, Gota, Nuvem).

Molécula BotaoMaoSuja: O coração da interface.

* Altura: 72px a 80px (Gigante)
* Borda arredondada (Radius 16px)
* Sombra pesada (Drop Shadow) para parecer "clicável" sob sol forte

Molécula BadgeFase: Etiqueta colorida (ex: Amarelo para "Muda", Verde para "Crescimento") indicando o estágio da planta.

---

### 7.3 Organismos

CardCanteiro (Dashboard):

* Topo: IconBox da cultura + Nome ("Horta de Trás")
* Meio: O número da prescrição gigante (ex: 30 MIN)
* Base: Status (Pendente/Concluído) e barra de progresso do ciclo de vida

ModalPluviometro:

* Sobe do rodapé da tela
* Pergunta: "Muita chuva?"
* Botões:
  * 🌧️ Forte
  * 🌦️ Fraca
  * ☀️ Nada

---
### 7.4. Telas Principais (Views)

---

#### Tela 1: Onboarding e Descoberta de Perfil (Boas-vindas)

**Detalhes da Tela (Informações na tela e Protótipo Conceitual)**

Esta tela deve ser acolhedora e focar na redução de atrito. O objetivo é segmentar o usuário imediatamente para personalizar a jornada, sem exigir criação de conta e senha logo de cara.

**Estrutura Visual Otimizada para Mobile (Top-Down):**

- Header/Branding: Logotipo minimalista do AgroCloud centralizado no topo com um ícone de folha ou gota d'água.
- Imagem Hero (Acolhimento): Ilustração leve de raízes ou uma semente germinando, passando a ideia de início de jornada.
- Título Principal (H1): Texto grande e amigável.  
  Texto: "Olá! Bem-vindo ao AgroCloud."
- Subtítulo (H2): Direcionamento da ação.  
  Texto: "Para te ajudarmos da melhor forma, conta pra gente: quem é você hoje?"
- Cards de Seleção (Ação Principal): Três botões grandes em formato de "Card" clicável (área de toque generosa), com ícones ilustrativos ao lado do texto.
  - Card 1: "🌱 Quero começar a plantar"
  - Card 2: "🏡 Tenho uma pequena horta"
  - Card 3: "🚜 Sou pequeno agricultor"
- Ação de Continuidade: Ao clicar em um card, o aplicativo redireciona para um formulário de 1 clique perguntando "O que você (quer) plantar?", levando direto para a Tela Principal.

---

#### Tela 2: Dashboard Principal (A Tela das 5h da Manhã)

**Detalhes da Tela (Informações na tela e Protótipo Conceitual)**

Esta tela é o centro de comando. Projetada para ser lida sob a luz do sol, foca em entregar o contexto (clima) e a ação (rega/missões) de forma imediata.

**Estrutura Visual Otimizada para Mobile (Top-Down):**

- Header (Contexto): Saudação personalizada e widget de clima minimalista no canto superior direito.  
  Texto: "Bom dia, Seu João" | Ícone ☀️ "28°C - Sem chuva hoje".
- Seção de Destaque (Cultivos Ativos): Carrossel horizontal ou lista vertical com os Cards de Canteiro que exigem atenção hoje.
- Card de Cultivo: Foto/Ícone da planta (ex: Tomateiro), Nome personalizado, e o Botão Mão Suja com a prescrição diária: "💧 Regar por 25 Min".
- Seção Secundária (Interesses e Descoberta): Sugestões baseadas no perfil escolhido no onboarding.  
  Título: "Cultivos que combinam com sua região" (Cards menores clicáveis que levam à Biblioteca).
- Floating Action Button (FAB - Ação Primária Inferior): Botão circular grande flutuante no canto inferior direito com um símbolo de "+", para adicionar rapidamente uma nova horta/cultivo.
- Bottom Navigation (Menu de Rodapé): Ícones para: 🏠 Início | 📖 Biblioteca | 👤 Perfil.

---

#### Tela 3: Meu Cultivo (O Guia Completo e Gestão Diária)

**Detalhes da Tela (Informações na tela e Protótipo Conceitual)**

Esta é a tela mais rica do aplicativo. Serve como um prontuário da planta e guia de ciclo de vida. A organização visual deve separar o que é "Ação Hoje" do que é "Conhecimento e Histórico".

**Estrutura Visual Otimizada para Mobile (Top-Down):**

- Header de Contexto com Imagem: No topo, uma foto do cultivo (o usuário pode alterar tirando uma foto real da sua horta). Sobreposta à foto, uma Badge de status.  
  Badge: "Fase Atual: Floração (Dia 45)"
- Bloco de Ação Diária (Imediata): O painel principal logo abaixo da foto.  
  Título: "Manejo de Hoje"  
  Botão Gigante: "💧 Confirmar Rega (25 Minutos)"  
  Checklist de Hábitos: "✅ Adubação confirmada?", "✅ Capina ao redor feita?".
- Timeline do Ciclo de Vida (Acompanhamento Horizontal/Vertical): Uma barra de progresso visual ou linha do tempo clicável, mostrando as fases da planta.  
  Fases listadas: Semente → Germinação → Preparação do Campo → Irrigação/Capina → Fertilização → Colheita → Pós-Colheita.  
  Interação: Clicar em qualquer fase abre um modal com instruções detalhadas sobre aquele momento específico.
- Seção de Histórico e Edição:
  - Métricas Rápidas: Gráfico de barras minimalista ("Água poupada esta semana").
  - Galeria/Diário: Miniaturas das fotos tiradas pelo produtor ao longo dos dias.
  - Botão Secundário: "✏️ Editar Condições do Canteiro".

---

#### Tela 4: Biblioteca de Culturas e Dicas (Catálogo Agronômico)

**Detalhes da Tela (Informações na tela e Protótipo Conceitual)**

Projetada para exploração e tira-dúvidas offline. O foco é facilitar a busca e exibir cartilhas limpas e escaneáveis.

**Estrutura Visual Otimizada para Mobile (Top-Down):**

- Header e Busca: Título "Biblioteca" e uma barra de pesquisa proeminente.  
  Placeholder: "Pesquisar cultura ou problema (ex: Pulgão no tomate)"
- Filtros Rápidos (Chips): Botões horizontais para filtrar o conteúdo.  
  Exemplos: "Hortaliças", "Frutíferas", "Plantas Companheiras", "Adubação".
- Grid de Culturas (Visual): Cards em formato de grade (2 colunas) com ilustrações das plantas, nome popular e nível de dificuldade (ex: 🌱 Fácil).
- Visualização do Artigo (Ao clicar no Card):  
  Estrutura do Texto: Texto em tópicos rápidos, tabelas de espaçamento com números grandes, listas de "O que fazer" e "O que evitar". Sem blocos densos de texto.

---

#### Tela 5: Perfil, Ajustes e Comunidade

**Detalhes da Tela (Informações na tela e Protótipo Conceitual)**

Esta tela gerencia as configurações técnicas (offline/online) e atua como ponto de conversão para o usuário finalmente se registrar e engajar com a comunidade.

**Estrutura Visual Otimizada para Mobile (Top-Down):**

- Header de Status de Conexão: Um banner fixo no topo indicando a saúde do aplicativo.  
  Visual: Ícone de Nuvem Verde com texto "☁️ Online e Sincronizado" ou Nuvem Cinza "✈️ Offline (Sincroniza ao conectar)".
- Bloco de Comunidade/Registro (Ação de Engajamento): Se o usuário for anônimo (do onboarding).  
  Título: "Faça parte da nossa comunidade!"  
  Subtítulo: "Registre-se para salvar seus cultivos na nuvem, compartilhar fotos da sua horta e ajudar a melhorar o AgroCloud."  
  Botão CTA: "Criar Conta Gratuita".
- Lista de Configurações e Ajustes:
  - Item: "⚙️ Calibrar Bomba d'Água (Mudar Minutos $\leftrightarrow$ Litros)".
  - Item: "📍 Localização da Propriedade (Para previsão do tempo)".
  - Item: "🔄 Forçar Sincronização Manual".
  - Item: "📞 Falar com Suporte / Dúvidas".
## 8. Regras de Negócio (RN)

- **RN01:** O cálculo deve abater a precipitação prevista.
- **RN02:** A unidade (Litros/Minutos) é conversível via cadastro da vazão da bomba.
- **RN03:** O avanço das fases da planta (Muda → Crescimento → Colheita) é automático pelo número de dias, mas o usuário pode adiantar/atrasar manualmente.
- **RN04:** Registros de rega sincronizados com a nuvem não podem ser deletados (integridade de dados para cálculo de economia).

---

## 9. Arquitetura do Sistema e Banco de Dados

### 9.1 Arquitetura Geral

- **Frontend (PWA):** React.js (ou Vue.js/Vite). Armazenamento local com Dexie.js (IndexedDB). Workbox para Service Workers.
- **Backend:** Node.js, hospedado em serviços escaláveis (Supabase ou AWS).
- **Banco de Dados (PostgreSQL):**

### 9.2 Estrutura de Dados

- **Users:** (ID, Nome, Localizacao).
- **Plots (Canteiros):** (ID, User_ID, Crop_ID, PlantDate, PumpRate).
- **Crops (Culturas Catalogadas):** (ID, Name, Days_Phase1, Kc_Phase1, ...).
- **Logs_Watering:** (ID, Plot_ID, Date, Prescribed, Applied, SyncStatus).
- **Logs_Missions:** (ID, Plot_ID, MissionName, CompletedDate).

---

## 10. Roadmap Estratégico (O Norte do Projeto)

### 10.1 Pilares Estratégicos

- Adoção e Usabilidade (Foco extremo na UX "mão suja", alto contraste e funcionamento em zonas de sombra de rede).
- Inteligência Agronômica (Precisão do balanço hídrico e curadoria de conteúdo acessível sobre o ciclo de vida das culturas).
- Engajamento e Retenção (Criação de hábitos diários por meio de checklists, missões e sincronização offline/online).
- Evolução Tecnológica e Escala (Expansão gradual para IA, diagnósticos por imagem, comunidade e parcerias com cooperativas e governos).

---

### 10.2 Fase 1 – Validação do Problema e MVP Funcional (0–6 meses)

**Foco Estratégico:** Validar o funcionamento offline-first, a usabilidade no campo e a assertividade do cálculo de irrigação básico.

**Principais Entregas:**

- Arquitetura PWA Offline-First (armazenamento local) com sincronização em background sob conexão Wi-Fi/4G.
- Biblioteca agronômica inicial detalhada das 15 principais culturas do Brasil (ex: alface, tomate, milho, feijão), com fases de cultivo, do plantio à colheita.
- Motor de cálculo hídrico simplificado (conversão de ET0 da API de clima + Kc da cultura para prescrição em Litros/Minutos).
- Interface "Mão Suja" de alto contraste para confirmação rápida de rega e "Pluviômetro Social" (confirmação manual de chuva local).
- Painel estatístico básico (dashboard) de histórico de rega e economia estimada de água.

**Métricas de Validação:**

- ≥ 100 pequenos produtores ativos no projeto piloto.
- ≥ 85% de taxa de sucesso na sincronização de dados offline para a nuvem.
- ≥ 40% dos usuários retornando em 7 dias (Retenção D7).
- ≥ 70% de adesão na confirmação diária de rega (uso prático no campo).

---

### 10.3 Fase 2 – Engajamento e Expansão da Inteligência Agronômica (6–12 meses)

**Foco Estratégico:** Fortalecer o uso diário, transformar o app em um guia de hábitos e expandir a base de conhecimento.

**Principais Entregas:**

- Sistema de "Missões e Alertas" push baseados no ciclo da planta (alertas de adubação, capina e transição de fase).
- Expansão da biblioteca para mais de 50 culturas, incluindo módulos de plantas companheiras, antagônicas e rotação de culturas.
- Módulo de Gestão Financeira Básico (cálculo de custo de energia da bomba e registro simples de despesas de insumos).
- Perfil para Técnicos Agrícolas/Extensionistas (painel para acompanhar remotamente as propriedades atendidas).
- Relatórios de sustentabilidade e desempenho da safra prontos para download/compartilhamento.

**Métricas de Validação:**

- ≥ 5.000 propriedades cadastradas.
- ≥ 50% de Engajamento Semanal (WAU).
- ≥ 30% de aumento na conclusão de tarefas não hídricas (adubação, manejo).
- ≥ 50 extensionistas rurais utilizando a plataforma como ferramenta de apoio.

---

### 10.4 Fase 3 – Comunidade e Socialização da Plataforma (12–18 meses)

**Foco Estratégico:** Criar efeitos de rede locais, diminuir o isolamento do produtor e incentivar a troca de experiências.

**Principais Entregas:**

- Fórum/Feed regional focado em agricultura ("Praça da Cidade" digital), segmentado por cultura e microclima.
- Alertas colaborativos de pragas e doenças (baseados em relatos de vizinhos na mesma região).
- Gamificação sustentável (selos de "Produtor Eficiente", "Mestre do Tomate" visíveis na comunidade).
- Integração via WhatsApp Bot (para alertas de risco climático extremo e lembretes de sincronização).

**Métricas de Validação:**

- ≥ 20.000 usuários ativos mensais (MAU).
- ≥ 25% dos usuários interagindo ativamente na comunidade (postando ou comentando).
- Retenção > 50% após 3 meses.
- Redução de 20% no CAC (Custo de Aquisição de Clientes) impulsionada por convites orgânicos.

---

### 10.5 Fase 4 – Visão Computacional e Inteligência Artificial (18–30 meses)

**Foco Estratégico:** Dar um salto tecnológico na resolução de problemas, introduzindo diagnósticos complexos de forma acessível.

**Principais Entregas:**

- Módulo de Visão Computacional (IA) offline-lite: foto da folha/planta para identificação de pragas e deficiências nutricionais.
- Algoritmo preditivo de produtividade baseado no histórico hídrico e climático da safra atual.
- Assistente Virtual (Chatbot com IA Generativa treinado apenas com manuais da Embrapa e cartilhas agronômicas seguras).
- Monetização inicial B2B: painéis de inteligência de dados macro para secretarias de agricultura e grandes cooperativas.

**Métricas de Validação:**

- ≥ 100.000 fotos processadas e diagnosticadas pela IA no primeiro trimestre.
- ≥ 85% de precisão nos diagnósticos visuais informados por feedback dos usuários.
- ≥ 3 contratos B2B/Governamentais fechados para acesso a dados macro e relatórios regionais.
- Receita recorrente cobrindo 100% dos custos de infraestrutura em nuvem.

---

### 10.6 Fase 5 – Escala Nacional e Ecossistema Integrado (30–48 meses)

**Foco Estratégico:** Consolidar a plataforma como o maior ecossistema digital da agricultura familiar no Brasil, com sustentabilidade financeira.

**Principais Entregas:**

- Marketplace hiperlocal: conexão direta entre demanda (mercados locais/cooperativas) e a oferta (estimativa de colheita dos produtores da base).
- Relatórios avançados de pegada hídrica e de carbono para qualificação do pequeno produtor em programas de crédito de carbono ou juros subsidiados (ESG).
- API pública para integração com hardwares IoT de baixo custo (para os produtores que evoluíram financeiramente e querem automatizar a bomba).
- Expansão da base de culturas para biomas específicos e adaptação do modelo para países vizinhos (América Latina).

**Métricas de Validação:**

- ≥ 250.000 pequenos produtores ativos.
- ≥ 10% dos usuários transacionando ou negociando safras via plataforma.
- LTV (Lifetime Value) ≥ 5x o CAC em todas as verticais de monetização.
- Adoção orgânica consolidada em todas as regiões geográficas do Brasil.
