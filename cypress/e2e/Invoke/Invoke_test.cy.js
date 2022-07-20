   describe('Alians and invoke', ()=>{
      beforeEach(() => {
         
          cy.visit('https://automationteststore.com/')
        })
      it('Validate a specific hair made product', ()=>{
          // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
          cy.get('.fixed').find('.prdocutname').eq(0).invoke('text').as('productThumbnail')
          cy.get('@productThumbnail').its('length').should('be.gt', 5)
          cy.get('@productThumbnail').should('include', 'Skinsheen Bronzer Stick')
      });   
    
      it('Validate product thumbnail', ()=>{
          cy.get('.thumbnail').as('prdocutnameLength')
          cy.get('@prdocutnameLength').should('have.length', 16);
          cy.get('@prdocutnameLength').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
         
      });   
      it('Calculate Total of normal and sale products', ()=>{
          cy.get('.thumbnail . ').as
          .each(($el, index, $list)=>{
              if($el.text().include('Seaweed Conditioner')){
                  cy.wrap($el).click()
              }
          });
      });
      it('display the price from each item', ()=>{
         
          cy.get('.thumbnail').as('prdocutnameLength');
          cy.get('@prdocutnameLength').find('.oneprice').each(($el, index, $list) => {
          cy.log($el. text());
          });
      });
    
      it.only('Calculate the total of normal and sale price', ()=>{
         
      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
      cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    
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
     
     
      cy.get('@saleItemPrice').then($linkText => {
          var saleItemsPrice  = 0;
          var saleItemPrice = $linkText.split('$')
          var i ;
          for (i = 0; i < saleItemPrice.length; i++ ) {
              cy.log(saleItemPrice[i])
              saleItemsPrice += Number(saleItemPrice[i])
          }
          itemTotal += saleItemsPrice;
          cy.log("sale price item total " + saleItemsPrice )
      })
      // cy.log("item total  " + itemTotal )
      .then(() => {
      cy.log('Total price of all products ' + itemTotal )
      expect(itemTotal).to.equal(648.5)
   })
      });   
   });
    
    
   
   