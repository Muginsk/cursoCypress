/// <reference types="cypress" />

describe('validar login gmail', () => {
  it('deve realizar o login no gmail', () => {
    cy.visit('https://www.gmail.com')
    cy.get('#identifierId').type('felipe.muginsk')
    cy.get('(//span[@jsname="V67aGc"])[2]').click()
    
  })
})