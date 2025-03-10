# Testes Automatizados com Cypress

## 📖 Descrição
Este repositório contém testes automatizados de UI utilizando o framework **Cypress**. O objetivo é validar funcionalidades de uma aplicação web, garantindo qualidade e confiabilidade dos serviços expostos. O projeto gera relatórios detalhados após a execução dos testes, utilizando o **Cypress Mochawesome Reporter** e **Cypress Multi Reporters**.

## 🛠️ Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework para automação de testes end-to-end
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação
- [Node.js](https://nodejs.org/en/) - Ambiente de execução JavaScript
- [Mocha](https://mochajs.org/) - Framework para execução dos testes
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Reportador de testes para gerar relatórios em HTML e JSON
- [Cypress-Mocha-Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Relatório de testes para Cypress
- [Cypress-Multi-Reporters](https://www.npmjs.com/package/cypress-multi-reporters) - Integra múltiplos reportadores no Cypress
- [Mocha-JUnit-Reporter](https://www.npmjs.com/package/mocha-junit-reporter) - Gerador de relatórios no formato JUnit

## 🚀 Como Configurar e Executar os Testes

### 📥 Clonar o Repositório
```sh
git clone https://github.com/Muginsk/cursoCypress.git
cd cursoCypress

🏗️ Instalar as Dependências
Certifique-se de ter o Node.js instalado. Para verificar, execute:
```sh
node -v
npm -v

Caso precise instalar, consulte:

Node.js
Instale as dependências do projeto:

npm install
▶️ Executar os Testes
Para rodar os testes, utilize o comando:

sh
Copiar
Editar
npx cypress run
Isso executará todos os testes automatizados definidos no projeto, e os relatórios serão gerados automaticamente.

📌 Estrutura do Projeto
graphql
Copiar
Editar
cypress/
  ├── integration/                # Testes automatizados do Cypress
  ├── reports/                    # Relatórios gerados
  │   ├── html/
  │   │   └── index.html          # Relatório HTML gerado pelo mochawesome
  │   └── junit/
  │       └── test-output.xml     # Relatório no formato JUnit
  ├── support/
  ├── plugins/
  └── fixtures/
package.json
cypress.config.js
📊 Relatórios de Testes
Após a execução dos testes, dois tipos de relatórios são gerados:

Relatório HTML
Onde é gerado: O relatório HTML será gerado dentro da pasta cypress/reports/html/ com o nome de index.html.
Como visualizar: Navegue até a pasta cypress/reports/html/ e abra o arquivo index.html em qualquer navegador.
Relatório JUnit
Onde é gerado: O relatório JUnit será gerado em cypress/reports/junit/test-output.xml.
🛠️ Exemplo de Teste com Cypress
javascript
Copiar
Editar
describe('Testes de login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type('usuario@teste.com')
    cy.get('input[name=password]').type('123456')
    cy.get('button[type=submit]').click()

    cy.contains('Login realizado com sucesso').should('be.visible')
  })
})
🛠️ Boas Práticas Utilizadas
Organização por funcionalidades: Os testes estão organizados de acordo com as funcionalidades da aplicação.
Relatórios automatizados: Utilização do Cypress Mochawesome Reporter para gerar relatórios em HTML e JSON após a execução dos testes.
Facilidade de manutenção: Estrutura clara e modular, facilitando a adição de novos testes ou modificações.
📄 Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

🔹 Desenvolvido por Felipe Almeida Muginsk 🔹

markdown
Copiar
Editar

### Notas:
- A formatação está de acordo com as convenções do **Markdown**.
- O conteúdo está bem estruturado, incluindo a instalação, execução e os relatórios gerados.
- As informações sobre o projeto e os exemplos de código estão claras.

Agora o **README** está em Markdown e pronto para ser adicionado ao seu repositório!
