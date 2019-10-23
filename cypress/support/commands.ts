import * as axe from 'axe-core';

declare global {
  interface Window {
    axe: typeof axe;
  }
}

/**
 * Needed until https://github.com/avanslaars/cypress-axe/issues/10 is fixed
 */
Cypress.Commands.add('injectAxe', () => {
  cy.window({log: false}).then(window => {
    window.axe = axe;
  });
});
