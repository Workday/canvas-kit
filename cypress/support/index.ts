import 'cypress-pipe';
import './cypress-plugin-tab';
import 'cypress-axe';
import 'cypress-storybook/cypress';
import 'cypress-keyboard-plugin';
import '@testing-library/cypress/add-commands';

import './commands';

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', err => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
