describe('Intaract with dropdown lists via webdriveruni', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Select specific values at the drop down list', ()=>{
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
      
      cy.get('#dropdowm-menu-1').select('c#')
      cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
      cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')
  });
});