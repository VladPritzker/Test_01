describe('Open tab at the same page', ()=> {
    beforeEach(() => {
     
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    
    it('Open tab at the same page', ()=> {
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    });
});