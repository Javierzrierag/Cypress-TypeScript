/// <reference types="cypress" />
import { LoginPage } from '../../support/pages/LoginPage'

describe('Login Tests', () => {

  const loginPage = new LoginPage()

  it('Login Error wrong credentials', () => {
    cy.visit('/')
    loginPage.typeUsername('wronguser')
    loginPage.typePassword('wrongpass')
    loginPage.submit()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })


  it('Login Error no password', () => {
    cy.visit('/')
    loginPage.typeUsername(Cypress.env('USER'))
    loginPage.submit()
    cy.contains('Epic sadface: Password is required').should('be.visible')
  })

  it('Login Error no user', () => {
    cy.visit('/')
    loginPage.typePassword(Cypress.env('PASSWORD'))
    loginPage.submit()
    cy.contains('Epic sadface: Username is required').should('be.visible')
  })


  it('Login UI successful', () => {
    cy.visit('/')
    loginPage.typeUsername(Cypress.env('USER'))
    loginPage.typePassword(Cypress.env('PASSWORD'))
    loginPage.submit()
    cy.contains('Products').should('be.visible')
  })

})

