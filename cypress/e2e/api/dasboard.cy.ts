/// <reference types="cypress" />

beforeEach(() => {
     cy.request(`${Cypress.env('apiUrl')}/users`)
      .its('status')
      .should('eq', 200)

    cy.intercept('GET', `${Cypress.env('apiUrl')}/users`, {
        fixture: 'users.json'
    }).as('getUsers')
})

describe('Dashboard', () => {
    it('Crear usuarios en las API', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/users`,
            body: {
                fixture: 'user.json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
    })

    it('Debe mostrar usuarios correctamente', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/users`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('id')
        })

    })

    it('Debe mostrar usuarios mockeados', () => {

        cy.intercept('GET', `${Cypress.env('apiUrl')}/users`, {
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

        cy.intercept('GET', `${Cypress.env('apiUrl')}/users`, {
            statusCode: 500
        }).as('errorUsers')

        cy.wait('@errorUsers')

        cy.contains('Error al cargar usuarios').should('be.visible')
    })


})
