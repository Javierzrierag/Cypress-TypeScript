export class LoginPage {
  visit() {
    cy.visit('/login')
  }

  typeUsername(username: string) {
    cy.get('[data-cy="username"]').type(username)
  }

  typePassword(password: string) {
    cy.get('[data-cy="password"]').type(password)
  }

  submit() {
    cy.get('[data-cy="login-btn"]').click()
  }
}
