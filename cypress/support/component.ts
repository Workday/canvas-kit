import 'cypress-axe';
import 'cypress-keyboard-plugin';
import 'cypress-pipe';
import 'cypress-real-events';
import {mount} from 'cypress/react';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

before(() => {
  cy.window().then(win => {
    // @ts-ignore mocking window for each test
    win.process = {
      env: {
        NODE_ENV: 'development',
      },
    };
  });

  cy.configureAxe({
    rules: [
      {id: 'landmark-one-main', enabled: false}, // stories don't require navigation rules
      {id: 'page-has-heading-one', enabled: false}, // stories don't require a single heading
      {id: 'region', enabled: false}, // examples don't required landmarks
      {id: 'bypass', enabled: false}, // ignore page navigation
      {id: 'html-has-lang', enabled: false}, // removes html-has-lang test from cypress
    ],
  });
});
