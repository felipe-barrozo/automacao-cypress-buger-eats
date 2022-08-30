/// <reference types="cypress" />

context('Página Home', () => {

    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    });

    afterEach(() => {
        cy.screenshot()
        
    });

    it('Acesso a página HOME com sucesso', () => {        
        cy.get('h1').should('contain', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('strong').should('contain', 'Cadastre-se para fazer entregas')
    })
     
    // Validação de acesso ao menu do formulário para cadastro
    it('Acesso a página de Cadastro', () => {
        cy.get('h1').should('contain', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('strong').click()
        cy.get(':nth-child(4) > header > h2').should('contain', 'Método de entrega')
    })   
});

