// @search
describe('Quality Tools Automation', () => {
  it('should search Cypress on website', () => {
    cy.visit('https://qualitytoolsautomation.com.br');

    cy.get('#search-input-templates')
      .type('Cypress');

    cy.get('#cypress')
      .should('be.visible')
      .and('contain', 'Cypress');
  });
});