describe('mouse over', () => {
    it.skip('move to Add-ons and  click SpicePlus', () => {
        cy.visit('https://www.spicejet.com/').viewport('macbook-16')
        cy.contains('Add-ons').trigger('mouseover')
        cy.contains('SpicePlus').click()
    })

    
    it('Add Desktop to cart', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.contains('Desktops').trigger('mouseover')
        cy.contains('Mac (1)').click({force: true})
        cy.contains('Add to Cart').click()
        cy.get('#cart-total').click()
        cy.get('#cart a:nth-child(2)').click()
        cy.url().should('include', 'checkout/cart')
    })
})