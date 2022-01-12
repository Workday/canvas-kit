declare namespace Cypress {
  interface Chainable<Subject = any> {
    tab(options?: Partial<{shift: Boolean}>): Chainable<Subject>;
  }
}
