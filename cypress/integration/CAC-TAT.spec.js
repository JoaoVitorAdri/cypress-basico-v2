/// <reference types = "cypress"/>

describe('CAC TAT', ()=> {

    before(()=>{
        cy.visit("./src/index.html") 
    })

    it('Primeiro teste', ()=>{
    
        cy.title().should(`contain`, 'Central')
    })

    it('Campos de texto', ()=>{
        cy.get('#firstName').type('Joao').should('have.value', 'Joao')
        cy.get('#lastName').type('Adriano').should('have.value', 'Adriano')
        cy.get('#email').type('oooo@oooo.com').should('have.value', 'oooo@oooo.com')
        cy.get('#open-text-area').type('Com nada').should('have.value', 'Com nada')
        cy.get('.button').click()
        cy.get('.success').should('be.visible')

    })


    it('Upload de arquivo', ()=>{
        cy.get('#file-upload').selectFile('./cypress/fixtures/exemploUP.txt').should(function($input){
            expect($input[0].files[0].name).to.equal('exemploUP.txt')
        })
    })
})