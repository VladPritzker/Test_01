describe('Open tab at the same page', ()=> {
    // beforeEach(() => {
     
    //     cy.visit('http://www.webdriveruniversity.com/index.html')
    //   })
    
    it('validate visiting two different domains', ()=> {
        cy.visit('http://www.webdriveruniversity.com/index.html')
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=52&sort=date_modified-ASC&page=1&limit=10')
    });

    it('Validating visiting two different domains via user actions', ()=> {
        cy.visit('http://www.webdriveruniversity.com/index.html')
        cy.contains('Automationteststore').invoke('removeAttr', 'target').click()
    });
});