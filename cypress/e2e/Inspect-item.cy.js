describe('Contact page', ()=>{
    beforeEach(() => {
        
        cy.visit('https://automationteststore.com/')
      })
    it('test 1', ()=>{
        // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        cy.get('.fixed').find('.prdocutname').eq(0).click()
    });    
});
