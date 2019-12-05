import * as axe from 'axe-core';
import {Promise} from 'cypress/types/bluebird';

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

// Add better logging to cy.tab
Cypress.Commands.overwrite('tab', (originalFn, subject) => {
  const prevSubject = cy.$$(subject || cy.state('window').document.activeElement);

  const log = Cypress.log({
    $el: prevSubject,
    consoleProps() {
      return {
        'Applied To': prevSubject.toArray()[0],
      };
    },
  });

  log.snapshot('before', {next: 'after'});

  return Cypress.Promise.try(() => originalFn(subject))
    .then(value => {
      log.set('$el', value).snapshot();
      return value;
    })
    .finally(() => {
      log.end();
    });
});
