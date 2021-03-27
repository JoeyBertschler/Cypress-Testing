describe('Quotes App ala Gabrial', ()=> {
    beforeEach(()=>{
        cy.visit('localhost:3000')
    })
})

it('name of sth', ()=>{
    expect(1).to.equal(1)
    expect(1+2)
    expect([{}]).eql([{}])
})

const nameInput = () => {cy.get('input[Name=John]')}
const mailInput = () => {cy.get('input[email=john@john.john]')}
const passwordInput = () => {cy.get('input[password=john123]')}
const termsInput = () => {cy.get('input[terms=true]')}
const submitFormInput = () => {cy.get('input[submitForm=true]')}
const formValidationIfEmptyInput = () => {cy.get('input[formValidationIfEmpty=true]')}

it('el exists', () => {
    nameInput.should('exist')
    
})

