import '@testing-library/cypress/add-commands';
import * as axe from 'axe-core';

declare global {
  interface Window {
    axe: typeof axe;
  }
}

/**
 * Needed until https://github.com/avanslaars/cypress-axe/issues/10 is not fixed
 * This is needed to inject axe to the page since it will not on it's own.
 *
 * Verified this still is required even though the issue is closed.
 */
Cypress.Commands.add('injectAxe', () => {
  cy.window({log: false}).then(window => {
    window.axe = axe;
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
  if ($target.attr('aria-describe')) {
    expect($target).to.have.attr('aria-describe', text);
  } else if ($target.attr('aria-describedby')) {
    expect($target).to.have.attr('aria-describedby');

    const id = $target.attr('aria-describedby');
    const $descriptionEl = Cypress.$(`[id="${id}"]`);
    if (!$descriptionEl.length) {
      throw Error(
        `Could not find an element with an id matching the aria-describedby: ${$target[0].outerHTML}`
      );
    }

    expect($descriptionEl).to.have.text(text);
  } else {
    throw Error(
      `Expected element to have an aria-describe or aria-describedby, but did not find one.`
    );
  }
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
  } else if ($target.attr('id')) {
    const id = $target.attr('id');
    const $labelledEl = Cypress.$(`label[for="${id}"]`);
    if (!$labelledEl.length) {
      throw Error(
        `Could not found an element with an id matching the for:  ${$target[0].outerHTML}`
      );
    }

    expect($labelledEl).to.have.text(text);
  } else {
    throw Error(`Expected element to have an aria-label or aria-labelledby, but did not find one.`);
  }
};

function isKeyOf<T extends object>(obj: T, key: any): key is keyof T {
  return typeof key === 'string' && key in obj;
}

Cypress.Commands.overwrite<'should', 'element'>(
  'should',
  (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
      'have.ariaDescription': haveAriaDescription(args[0]),
      'have.ariaLabel': haveAriaLabel(args[0]),
    };
    // See if the expectation is a string and if it is a member of Jest's expect
    if (isKeyOf(customMatchers, expectation)) {
      return (originalFn as any)(subject, customMatchers[expectation]);
    }

    return originalFn(subject, expectation, ...args);
  }
);
