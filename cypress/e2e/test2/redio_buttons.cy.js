describe('Check specific redio buttons via webdriveruni', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Check specific redio buttons', ()=>{
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
      cy.get('.radio-buttons').find('[type="radio"]').eq(1).check()
  });

  it.only('Validate the state of specific redio buttons', ()=> {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
     cy.get("[value='lettuce']").should('not.be.checked')
    //  cy.get(" [value='lettuce']").should('not.be.selected')

    cy.get("[value='pumpkin']").should('be.checked')

    cy.get("[value='lettuce']").check()
    cy.get("[value='lettuce']").should('be.checked')

    cy.get("[value='cabbage']").should('be.disabled')
  });
});