declare namespace Cypress {
  interface Chainable {
    tab(options?: Partial<{shift: Boolean}>): Chainable;
  }
}
