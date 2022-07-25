describe('hendling Iframe & modals', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Handle webwebdriveuni iframe and modal', ()=>{
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });    

    it.only('check multipple checkbpxes', ()=> {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
      cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')  
    })
});