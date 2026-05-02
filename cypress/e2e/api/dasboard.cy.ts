/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept('GET', '/api/users', {
        fixture: 'users.json'
    }).as('getUsers')
    cy.loginSession('admin', 'password123')
})

describe('Dashboard', () => {

    it('Debe mostrar usuarios correctamente', () => {

        cy.wait('@getUsers')

        //cy.get('[data-cy="user-row"]').should('have.length.greaterThan', 0)
    })

    it('Debe mostrar usuarios mockeados', () => {

        cy.intercept('GET', '/users', {
            statusCode: 200,
            body: [
                { id: 1, name: 'Javier' },
                { id: 2, name: 'Test User' }
            ]
        }).as('mockUsers')

        cy.wait('@mockUsers')

        cy.contains('Javier').should('be.visible')
    })

    it('Debe manejar error de API', () => {

        cy.intercept('GET', '/users', {
            statusCode: 500
        }).as('errorUsers')

        cy.wait('@errorUsers')

        cy.contains('Error al cargar usuarios').should('be.visible')
    })


})
