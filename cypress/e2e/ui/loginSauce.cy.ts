/// <reference types="cypress" />

describe.skip('Login Tests', () => {

  before(() => {
  Cypress.session.clearAllSavedSessions()
})

beforeEach(() => {
 cy.loginUI(Cypress.env('USER'), 
 Cypress.env('PASSWORD'))
})

  it('Error de login', () => {
    cy.visit('/')
    cy.get('#username').type('wronguser').should('have.value', 'wronguser')
    cy.get('#password').type('wrongpass').should('have.value', 'wrongpass')
    cy.get('button.toggle-pw').click()
    cy.wait(2000) // Espera para que el cambio de tipo de input se refleje
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.contains('Invalid username or password.').should('be.visible')
  })

  it('Login con UI exitoso', () => {
    cy.visit('/')
      cy.get('button[type="submit"]')
    .should('be.visible')
    .click()
    cy.contains('Test User').should('be.visible')
  })

})

