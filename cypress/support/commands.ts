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

Cypress.Commands.add('loginSession', (username: string, password: string) => {

  cy.session([username, password], () => {

    cy.request({
      method: 'POST',
      url: '/',
      form: true, // 👈 CLAVE para forms tradicionales
      body: {
        username,
        password
      }
    })

    // 👇 Verificamos que la cookie exista
    cy.getCookie('connect.sid').should('exist')

  }, {
    validate() {
      cy.getCookie('connect.sid').should('exist')
    },
    cacheAcrossSpecs: true
  })

})


Cypress.Commands.add('loginUI', (username: string, password: string) => {

  cy.visit('/')

  cy.get('#customer_email')
    .clear()
    .type(username)
    .should('have.value', username)

  cy.get('#customer_password')
    .clear()
    .type(password, { delay: 20 })
    .should('have.value', password)

})

Cypress.Commands.add('loginAPI', (username: string, password: string) => {
  cy.request({
    method: 'POST',
    url: '/',
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

