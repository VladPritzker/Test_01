describe('interate over lements', ()=>{
    beforeEach(() => {
        
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
      })
    it('Log inforamtion about all hair elements', ()=>{
        cy.get('#categorymenu').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index' + index + " : " + $el.text())
        })
    });    
    it.only('Add specific product basket', ()=>{
        cy.get('#categorymenu').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
           if($el.text().includes('Curls to straight Shampoo')) {
            cy.wrap($el).click()
           }
          })
    });    
});