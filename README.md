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

├── cypress/ │ ├── fixtures/ │ ├── integration/ # Testes Cypress │ ├── plugins/ │ ├── support/ │ └── reports/ │ └── html/ │ └── index.html # Relatório HTML gerado │ └── junit/ │ └── test-output.xml # Relatório JUnit └── package.json └── cypress.config.js


## Configuração do Cypress

O arquivo `cypress.config.js` foi configurado para usar o **Cypress Mocha Reporter** e o **Cypress Multi Reporters**. Aqui está a configuração relevante:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Usando o Cypress Mochawesome Reporter
      const mochawesome = require('cypress-mochawesome-reporter/plugin')
      mochawesome(on)

      // Usando o Cypress Multi Reporters
      const multiReports = require('cypress-multi-reporters')
      config.reporter = 'cypress-multi-reporters'
      config.reporterOptions = {
        reporterEnabled: 'mocha-junit-reporter, mochawesome',
        mochaJunitReporterReporterOptions: {
          mochaFile: 'cypress/reports/junit/test-output.xml',
        },
        mochawesomeReporterOptions: {
          reportDir: 'cypress/reports/html',
          overwrite: true,
          html: true,
          json: true,
        },
      }

      return config
    },
  },
})
Gerando Relatórios
Após a execução dos testes, dois tipos de relatórios são gerados:

Relatório HTML
Onde é gerado: O relatório HTML será gerado dentro da pasta cypress/reports/html/ com o nome de index.html.
Como visualizar: Navegue até a pasta cypress/reports/html/ e abra o arquivo index.html em qualquer navegador.
Relatório JUnit
Onde é gerado: O relatório JUnit será gerado em cypress/reports/junit/test-output.xml.
Rodando os Testes
Para rodar os testes e gerar os relatórios, utilize o seguinte comando:
npx cypress run


