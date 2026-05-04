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


})
