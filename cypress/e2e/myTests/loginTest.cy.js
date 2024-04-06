describe('account login', () => {
    before(() => {
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login", {failOnStatusCode: false})
    })

    it.skip('login test', () => {
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login", {failOnStatusCode: false})
        cy.title().should('eq', 'Account Login')
        cy.get('input[name=email]').type('saadkhan@gmail.com')
        cy.get('input[name=password]').type('welcome123')
        cy.get('input[type=submit]').click()
        cy.title().should('eq', 'My Account')
        cy.get('a:nth-child(13)').click()
    })

    it('login test using generic function', () => {
        cy.userLogin('saadkhan@gmail.com', 'welcome123')
    })
})