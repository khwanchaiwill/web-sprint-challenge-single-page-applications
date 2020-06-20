describe('Input form can type text', ()=>{
    it('Can navigate to the localhost', ()=>{
        cy.visit('http://localhost:3000')
        cy.url().should('include', '3000')
    })

})
describe('Can type text',() =>{
    it('can navigate to 3rd party',()=>{
        cy.visit('http://localhost:3000/order')
        
    })
    it('can type some name', ()=>{
        cy.get('[name=fname] ')
        .type('khwanchai')
        .should('have.value', 'khwanchai')
    })
        
    it('can checked on checkbox',()=>{
        cy.get('[type=checkbox]') .not('[disabled]')
        .check().should('be.checked')     
    })
    it('can submit the button', ()=>{
        cy.get('button').click()
    })

})