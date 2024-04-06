describe('dropdown', () => {
    it('dropdown test', () => {
        cy.visit('https://www.google.com/')
        cy.get('[name=q]').type('cypress')

        //.erkvQe li div[role=presentation]:nth-child(1) span
        cy.get('.erkvQe').find('li div[role=presentation]:nth-child(1) span').contains('cypress plant').click()
    })
})