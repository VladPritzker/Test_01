describe('Verify auto completedropdown lists cia webriveruni', ()=>{
    beforeEach(() => {
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
    })


    it('select specific product via autocomplete list', ()=>{
      
      cy.contains('AUTOCOMPLETE TEXTFIELD').invoke('removeAttr', 'target').click()
      cy.get('#myInput').type('A')

      cy.get('#myInputautocomplete-list > *').each(($el, indexe, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if(prod === productToSelect){
            $el.click()
            cy.get('#submit-button').click()
            cy.url().should('include', productToSelect)
        }
    }).then(() => {

        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelectt = 'Grapes';
            if( prod === productToSelectt){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelectt)
            }
        })
    });
  })
})