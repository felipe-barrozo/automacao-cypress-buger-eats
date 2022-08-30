/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
const perfil = require('../fixtures/perfil.json');


context('Cadastro de Novo usuário - Perfil Entregador', () => {


    before(() => {
        cy.visit('https://buger-eats.vercel.app/deliver')
    });    

    it('CT003 - Cadastro de usuário com sucesso', () => {   
         
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > input').type(faker.phone.number())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').type('345')
        cy.get(':nth-child(4) > :nth-child(2) > input').type(faker.internet.domainName())
        cy.get('.delivery-method > :nth-child(2)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click() 
        cy.get('.swal2-popup')
        .should('contain', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
        cy.get('.swal2-confirm').click()
    
    })

    it('CT004 - Cadastro de usuário com campo “Nome Completo” Vazio', () => {

        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').clear().type('345')
        cy.get('.delivery-method > :nth-child(1)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click()
        cy.get('.alert-error').should('contain', 'É necessário informar o nome')

    })

    it('CT005 - Cadastro de usuário com campo “CPF” Vazio ou Inválido', () => {
        
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear().type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear()      
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').clear().type('345')
        cy.get('.delivery-method > :nth-child(1)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click()  
        cy.get('.alert-error').should('contain','É necessário informar o CPF')

    })

    it('CT006 - Cadastro de usuário com campo “E-mail” Vazio ou Invalido', () => { 
        
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear().type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear()
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').clear().type('345')
        cy.get('.delivery-method > :nth-child(1)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click()
        cy.get('.alert-error').should('contain','É necessário informar o email')  

    })

    it('CT007 - Cadastro de usuário com campo “CEP” Vazio ou Invalido', () => {
        
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear().type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email()) 
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear()     
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').type('345')
        cy.get('.delivery-method > :nth-child(1)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click() 
        cy.get('.alert-error').should('contain','É necessário informar o CEP') 

    })

    it('CT008 - Cadastro de usuário com campo “Número” Vazio ou Invalido', () => {
        
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear().type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(4) > :nth-child(1) > input').clear()       
        cy.get('.delivery-method > :nth-child(1)').click()     
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click() 
        cy.get('.alert-error').should('contain','É necessário informar o número do endereço') 

    })

    it('CT009 - Cadastro de usuário NÃO selecionando “Método de Entrega”', () => {                
        
        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').clear().type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').clear().type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').clear().type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(2) > input').type('345')            
        cy.get("input[type=file]").attachFile("cnh.png");
        cy.get('.button-success').click()
        cy.get('.alert-error').should('contain','Selecione o método de entrega')  

    })

    it('CT010 - Cadastro de usuário SEM realizar “UPLOAD DA CNH”', () => { 

        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(faker.name.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(perfil.cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').clear().type(faker.internet.email())
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(perfil.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()    
        cy.get(':nth-child(4) > :nth-child(1) > input').type('345')
        cy.get('.delivery-method > :nth-child(2git)').click()     
        cy.get('.button-success').click()
        cy.get('.alert-error').should('contain','Adicione uma foto da sua CNH')  

    })
       
});

