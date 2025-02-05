
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain.text', 'Products')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click({ force: true });
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click({ force: true });
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click({ force: true });
    cy.get('#shopping_cart_container').click()
    cy.get('fa-layers-counter shopping_cart_badge').should('have.text', '3')
    

    })
  })
