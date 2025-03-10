#  Automação com Cypress

Este repositório contém o código de automação de testes utilizando **Cypress**. O objetivo deste projeto é fornecer uma base para a automação de testes de aplicações web, utilizando Cypress como ferramenta principal, e gerando relatórios de execução de testes.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Cypress](#configuração-do-cypress)
- [Gerando Relatórios](#gerando-relatórios)
  - [Relatório HTML](#relatório-html)
- [Rodando os Testes](#rodando-os-testes)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **Cypress Mocha Reporter**: Para geração de relatórios no formato mochawesome.
- **Cypress Multi Reporters**: Utilizado para integrar múltiplos reporters (mochawesome e mocha-junit).
- **Mocha JUnit Reporter**: Para gerar relatórios no formato JUnit.
- **Node.js**: Ambiente de execução.

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/Muginsk/cursoCypress.git
    cd cursoCypress
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Estrutura do Projeto

A estrutura do projeto segue o padrão do Cypress, com a organização dos testes dentro de `cypress/integration` e relatórios gerados em `cypress/reports`:

