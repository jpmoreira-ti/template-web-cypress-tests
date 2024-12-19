// @gui_search
describe('Search', () => {
  it('successfully', () => {
    cy.visit('/')

    cy.get('#search-input-templates')
      .type('Cypress')

    cy.get('#cypress')
      .should('be.visible')
      .and('contain', 'Cypress')
  })
})
