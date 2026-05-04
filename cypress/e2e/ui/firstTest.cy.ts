/// <reference types="cypress" />

beforeEach(() => {
 
})

describe('Login Tests', () => {

  it('Login con UI', () => {
    cy.loginUI(Cypress.env('USER'), Cypress.env('PASSWORD'))
    cy.contains('The Dummy Site').should('be.visible')
  })

  it('Login con API (sin UI)', () => {
    cy.loginAPI(Cypress.env('USER'), Cypress.env('PASSWORD'))
    cy.visit('/dashboard')
    cy.contains('The Dummy Site').should('be.visible')
  })

})
