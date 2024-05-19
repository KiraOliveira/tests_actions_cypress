import elementsLogin from "./elementsScreen/elementsLogin"


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, pass) => {
    cy.visit('/')

    cy.get(elementsLogin.fieldUser).should('exist').and('be.visible').and('have.text', '').as('username')
    cy.get(elementsLogin.fieldPassword).should('exist').and('be.visible').and('have.text', '').as('password')
    
    user 
        ? cy.get('@username').clear().type(user)
        : cy.log('username is null')

    pass
        ? cy.get('@password').clear().type(pass)
        : cy.log('password is null')

    cy.contains('button', 'Entrar').click()
})