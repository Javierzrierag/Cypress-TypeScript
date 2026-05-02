/// <reference types="cypress" />

describe('Login Tests', () => {

  it('Login con UI', () => {
    cy.loginUI('admin', 'password123')
    cy.contains('The Dummy Site').should('be.visible')
  })

  it('Login con API (sin UI)', () => {
    cy.loginAPI('admin', 'password123')
    cy.visit('/dashboard')
    cy.contains('The Dummy Site').should('be.visible')
  })

})
