// @gui_search
describe('Search', () => {
  it('successfully', () => {
    //Act 
    cy.visit('/')

    cy.get('#search-input-templates')
      .should('be.visible')
      .type('Cypress')

    // Assert 
    cy.get('#cypress')
      .should('be.visible')
      .and('contain', 'Cypress')
  })
})
