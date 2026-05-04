/// <reference types="cypress" />

beforeEach(() => {
     cy.request(`${Cypress.env('API_URL')}/users`)
      .its('status')
      .should('eq', 200)

    cy.intercept('GET', `${Cypress.env('API_URL')}/users`, {
        fixture: 'users.json'
    }).as('getUsers')
})

describe('Dashboard', () => {
    it('Crear usuarios en las API', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('API_URL')}/users`,
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
            url: `${Cypress.env('API_URL')}/users`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('id')
        })

    })


})
