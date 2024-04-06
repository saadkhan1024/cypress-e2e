describe('checkbox', () => {
    it('Select all check boxes', () => {
        cy.visit('https://www.amazon.in/').viewport('macbook-16')
        cy.get("#nav-xshop a[href*='mobile']").click()
        cy.get("[class*='a-section']:nth-child(6) ul [aria-labelledby=OnePlus]").check({force: true})
        cy.get("[class*='a-section']:nth-child(4) ul [aria-label=OnePlus] input").uncheck()
    })
})

//[class*='a-section']:nth-child(6) ul [type=checkbox]
//[class*='a-section']:nth-child(6) ul [aria-labelledby=OnePlus]