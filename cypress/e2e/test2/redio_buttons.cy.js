describe('Check specific redio buttons via webdriveruni', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Check specific redio buttons', ()=>{
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
         cy.get("input[type='radio']")
         cy.get("input[type='radio']")
    });    


});