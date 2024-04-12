describe('file upload use case', () => {
    it('simple file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload', {timeout: 5000})
        cy.get('#file-upload').attachFile('test_file.txt')
        cy.get('#file-submit').click()
        cy.get('div>h3').should('be.visible').and('have.text', 'File Uploaded!')
    })

    it.skip('drag and drop file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('div[id=drag-drop-upload]').click().attachFile('test_file.txt')
        cy.get("div[class*='dz-complete']").contains('div').should('have.class', 'dz-success-mark')
    })

    it('change file name during upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'test_file.txt', fileName: 'actual_file.txt'})
        cy.get('#file-submit').click()
        cy.get('div>h3').should('be.visible').and('have.text', 'File Uploaded!')
    })
})