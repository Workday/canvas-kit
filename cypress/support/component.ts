// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';

// Import commands.js using ES2015 syntax:
import 'cypress-axe';
import 'cypress-pipe';
import 'cypress-keyboard-plugin';
import 'cypress-real-events';
import './cypress-plugin-tab';

import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands');

import {mount} from 'cypress/react';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
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
