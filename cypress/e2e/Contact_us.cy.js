describe('Contact page', ()=>{
    beforeEach(() => {
        
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
      })
    it('test 1', ()=>{
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', "First name")
    });    
});
