# 💧 Projeto Otimização Hídrica (AgroCloud)

> **Agricultura de precisão sem o custo do hardware.** Uma plataforma em nuvem que utiliza inteligência de dados e APIs meteorológicas para dizer ao pequeno produtor exatamente quando e quanto irrigar, economizando água e dinheiro.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-warning)
![Impacto](https://img.shields.io/badge/Impacto-Sustentabilidade-success)

## 🎯 O Problema
A agricultura consome a maior parte da água doce do planeta. O pequeno produtor, severamente impactado pelas mudanças climáticas, muitas vezes irriga sua lavoura de forma empírica (no "achismo"). Tecnologias de agricultura de precisão (como sensores de umidade de solo) têm um custo de aquisição proibitivo, resultando em desperdício hídrico e altos custos com energia elétrica para bombeamento.

## 💡 A Solução
Democratizar a agricultura de precisão. Em vez de exigir que o agricultor compre sensores físicos caros, nosso sistema atua como o "cérebro" da propriedade: ele cruza os dados da cultura plantada com APIs meteorológicas públicas de alta precisão (previsão do tempo e evapotranspiração). O resultado é uma prescrição exata de irrigação acessível por qualquer smartphone.

### ✨ Principais Funcionalidades
- **Gestão de Culturas:** Cadastro simplificado de áreas de plantio, tipo de cultura e localização.
- **Motor de Decisão Climática:** Integração automática com APIs de clima, sem necessidade de input manual do clima pelo usuário.
- **Prescrição Exata:** Recomendações claras de volume (litros) e frequência (quando irrigar).
- **Relatórios de Economia:** Histórico de consumo e dashboards mostrando a água (e o dinheiro) economizados ao longo do tempo.

## 🛠️ Arquitetura e Tecnologias (Proposta)
- **Frontend:** Aplicação Web/Mobile Responsiva (Foco em usabilidade extrema).
- **Backend/API:** Motor de regras assíncrono para consumo de APIs meteorológicas.
- **Banco de Dados:** PostgreSQL (Relacional) para garantir a integridade do histórico agronômico.

## 👥 Equipe Desenvolvedora
- David Frota da Silva
- Fabricio Nascimento Moreira
- Emiliocharles Geleilate Filho

## 📄 Documentação
Para entender as regras de negócio, arquitetura e fluxos do sistema, consulte nosso documento oficial:
👉 [Documento de Requisitos de Software](DOCUMENTO_DE_REQUISITOS.md)
