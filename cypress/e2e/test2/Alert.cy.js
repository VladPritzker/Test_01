describe('Handle JS alert', ()=> {
    beforeEach(() => {
     
     cy.visit('http://www.webdriveruniversity.com/index.html')
    })    
      

      it('Conform js alert contains the correct text ', ()=> {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({forece:true});
        cy.get('#button1').click();
        cy.on('window:alert', (str)=> {
            expect(str).to.equal('I am an alert box!');
        });
       });

        it('Conform js alert contains the correct text ', ()=> {
            cy.get('#popup-alerts').invoke('removeAttr', 'target').click({forece:true});
            cy.get('#button4').click();
            cy.on('window:confirm', (str)=> {
                return false;
            }) 
            cy.get('#confirm-alert-text').contains('You pressed Cancel!');
            
         })


         it.only('Conform js alert contains the correct text ', ()=> {
            cy.get('#popup-alerts').invoke('removeAttr', 'target').click({forece:true});

            const stub = cy.stub()
            cy.on('window:alert',  stub)

            cy.get('#button1').click().then(()=> {
                expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')
            }).then(()=>{
                    return true;
                })
         })
});