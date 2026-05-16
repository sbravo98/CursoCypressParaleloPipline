/// <reference types="cypress" />
require('cypress-plugin-tab')
require('cypress-xpath');
import 'cypress-file-upload';

describe (" Elementos de una tabla ",() => {

    it(" Mostrando los campos ", () => {
        cy.viewport(1920,1080);
        cy.visit("https://demo.mikareno.com/login.action");
        cy.title().should('eq', 'Mikareno');
        cy.get('#username').should('be.visible').type("celeste.maldonado@demo.com");
        cy.get('#password').should('be.visible').type("mikareno");
        cy.xpath('//*[@id="loginForm"]/div[2]/button').should('be.visible').click();
        cy.get('.main-account').should('be.visible').click();

        })


})


