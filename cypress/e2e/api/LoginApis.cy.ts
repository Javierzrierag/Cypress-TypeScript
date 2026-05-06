/// <reference types="cypress" />


describe.skip('Tests API de Usuarios y Login', () => {
    it.only('Crear usuarios en la API', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('API_URL')}/`,
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
            url: `${Cypress.env('API_URL')}/`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('id')
        })

    })


})
