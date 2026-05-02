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

Cypress.Commands.add('loginUI', (username: string, password: string) => {
  cy.visit('/login')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('.btn-submit').click()
})

Cypress.Commands.add('loginAPI', (username: string, password: string) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      username,
      password
    }
  })
    .then((res) => {
        expect(res.status).to.eq(200)
      window.localStorage.setItem('token', res.body.token)
    })
})

Cypress.Commands.add('loginSession', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.loginAPI(username, password)
  })
})
