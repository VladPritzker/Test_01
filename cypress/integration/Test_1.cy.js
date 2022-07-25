describe('Contact page', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
      })
    it('test 1', ()=>{
        cy.get('[name="first_name"]').type('Vlad')
        cy.get('[name="last_name"]').type('Pritzker')
    });
    it('test 1', ()=>{
        cy.get('[name="last_name"]').type('Pritzker')
    });
    
})

