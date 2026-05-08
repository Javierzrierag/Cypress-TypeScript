export class LoginPage {


  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button')
  }

  typeUsername(username: string) {
    this.elements.usernameInput().type(username)
  }

  typePassword(password: string) {
    this.elements.passwordInput().type(password)
  }

  submit() {
    this.elements.loginButton().click()
  }
}
