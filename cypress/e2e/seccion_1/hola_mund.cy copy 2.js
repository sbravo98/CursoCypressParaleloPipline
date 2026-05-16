/// <reference types="cypress" />

describe('Primer test con cypress', () => {

    it('Este es un hola mundo de Cypress', () => {

        cy.log("Bienvenidos a Cypress");

        cy.visit("https://ultimateqa.com/complicated-page/");

        cy.get('input[name="log"]').first().type("Steeven");

        cy.get('input[name="pwd"]').first().type("password123");

        cy.get('button[name="et_builder_submit_button"]')
            .first()
            .click();

        cy.wait(3000);

    });

});