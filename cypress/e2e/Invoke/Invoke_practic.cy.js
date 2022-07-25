describe('Alians and invoke', ()=>{
  beforeEach(() => {
     
      cy.visit('http://automationpractice.com/index.php')
    })
    it('Total amount of item price', ()=>{
      cy.get('.content_price .price').invoke('text').as('itemPrice') 
      var itemTotal = 0;
      cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$')
        var i ;
        for (i = 0; i < itemPrice.length; i++ ) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemTotal += itemsPriceTotal;
        cy.log("Non sale price item total " + itemsPriceTotal )
    })
    .then(() => {
      cy.log('Total price of all products ' + itemTotal )
      expect(itemTotal).to.equal(785.52)})    
  });   
  
  })