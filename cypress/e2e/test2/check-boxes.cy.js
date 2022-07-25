describe('hendling Iframe & modals', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Handle webwebdriveuni iframe and modal', ()=>{
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes > :nth-child(1) > input').uncheck().should('not.be.checked')
    });    
});