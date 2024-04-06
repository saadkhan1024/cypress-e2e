describe('back and forward simulation', () => {
    it('back-forward test', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.contains('API').click()

        cy.go('back')
        cy.wait(500)
        cy.go('forward')
    })
})

describe('page reload', () => {
    it('page reload test', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.contains('API').click()

        cy.reload()
        cy.contains('API').should('be.visible')
    })
})