export class LoginPage {

  typeUsername(username: string) {
    cy.get('#user-name').type(username)
  }

  typePassword(password: string) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('#login-button').click()
  }
}
