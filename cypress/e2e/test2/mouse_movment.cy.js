describe('test mouse actions', ()=>{
    beforeEach(() => { 
        
        cy.visit('http://www.webdriveruniversity.com/index.html')
      })
    it('Scroll elements into view', ()=>{
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        
    });    

    it.only('Should be able to drag and drop a draggable item', ()=>{
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        cy.get('#draggable').trigger('mousedown', {which: 1});
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});        
    });    
    it('Should be able to drag and drop a draggable item', ()=>{
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        cy.get('#draggable').trigger('mousedown', {which: 1});
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});        
    }); 

    it('I should be able to perform double mouse click', ()=>{
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#double-click').dblclick();
    }); 

    it.only('I should be able tohold down the ledt mouse click button on a given element', ()=>{
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element)=>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        });
        cy.get('#click-box').trigger('mousemove').trigger('mouseup', {force: true}).then(($element)=>{
            expect($element).to.have.css('background-color', 'rgb(255, 99, 71)')
        })
    }); 
});