declare global {
  namespace Cypress {
    interface Chainable {
      loginUI(username: string, password: string): Chainable<void>
      loginAPI(username: string, password: string): Chainable<void>
      loginSession(username: string, password: string): Chainable<void>
    }
  }
}

export {}
