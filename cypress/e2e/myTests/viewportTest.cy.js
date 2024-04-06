describe('testing different view ports', () => {
    before(() => {
        console.log('running tests')
    })
    beforeEach(() => {
        cy.visit('http://www.google.com')
    })
    it('open in mb 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in mb 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in mb 16', () => {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(200)
    })
    it('open in ip x', () => {
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })
})