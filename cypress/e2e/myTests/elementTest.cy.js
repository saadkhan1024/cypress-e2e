describe('launch app', () => {
    it('app testing', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.contains('API').click()
        cy.url().should('include', '/api')
        cy.get('div>h1').should('be.visible').and('contain', 'Table of Contents')
        cy.get('li.footer__item').should('have.length', 13)
    })
})