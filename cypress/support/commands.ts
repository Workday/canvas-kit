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

const raf = () =>
  new Cypress.Promise(resolve => {
    (cy as any).state('window').requestAnimationFrame(resolve);
  });

// Overwrite `tab` to allow React hooks to add event listeners
// I can't reproduce the issue locally, but CI is failing around tabbing
// only when hooks are involved...
Cypress.Commands.overwrite('tab', (originalFn, subject) => raf().then(() => originalFn(subject)));
