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
  const prevSubject = cy.$$(subject || (cy as any).state('window').document.activeElement);

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
      return Cypress.$(value);
    })
    .finally(() => {
      log.end();
    });
});

declare global {
  namespace Cypress {
    interface Chainable<Subject> {}

    interface Chainer<Subject> {
      /**
       * Asserts the element has an aria description matching the text
       * @example
       *    cy.get('body').should('have.ariaDescription', 'string')
       */
      (chainer: 'have.ariaDescription', text: string): Chainable<Subject>;
      /**
       * Asserts the element has an aria label matching the text. This
       * can be from an `aria-label` or an `aria-labelledby`
       * @example
       *    cy.get('body').should('have.ariaLabel', 'string')
       */
      (chainer: 'have.ariaLabel', text: string): Chainable<Subject>;
    }
  }
}

export const haveAriaDescription = (text: string) => ($target: JQuery) => {
  expect($target).to.have.attr('aria-describedby');

  const id = $target.attr('aria-describedby');
  const $descriptionEl = Cypress.$(`[id="${id}"]`);
  if (!$descriptionEl.length) {
    throw Error(
      `Could not find an element with an id matching the aria-describedby: ${$target[0].outerHTML}`
    );
  }

  expect($descriptionEl).to.have.text(text);
};

export const haveAriaLabel = (text: string) => ($target: JQuery) => {
  if ($target.attr('aria-label')) {
    expect($target).to.have.attr('aria-label', text);
  } else if ($target.attr('aria-labelledby')) {
    const id = $target.attr('aria-labelledby');
    const $labelledEl = Cypress.$(`[id="${id}"]`);
    if (!$labelledEl.length) {
      throw Error(
        `Could not found an element with an id matching the aria-labelledby:  ${$target[0].outerHTML}`
      );
    }

    expect($labelledEl).to.have.text(text);
  } else {
    throw Error(`Expected element to have an aria-label or aria-labelledby, but did not find one.`);
  }
};

Cypress.Commands.overwrite('should', (originalFn, subject, expectation, ...args) => {
  const customMatchers = {
    'have.ariaDescription': haveAriaDescription(args[0]),
    'have.ariaLabel': haveAriaLabel(args[0]),
  };
  // See if the expectation is a string and if it is a member of Jest's expect
  if (typeof expectation === 'string' && customMatchers[expectation]) {
    return originalFn(subject, customMatchers[expectation]);
  }

  return originalFn(subject, expectation, ...args);
});
