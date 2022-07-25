describe('validate webdriveruni homepage links  ', ()=> {
    beforeEach(() => {
     
     cy.visit('http://www.webdriveruniversity.com/index.html')
      })

      it.only('Conforming links redirect to the  correct page  ', ()=> {
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({forece:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
      }),

    it('Conforming links redirect to the  correct page  ', ()=> {
        
        cy.get('#contact-us').invoke('removeAttr', 'target').click({forece:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        cy.reload(true)
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({forece:true})
        cy.url().should('include', 'Login-Portal')
    });

    
});