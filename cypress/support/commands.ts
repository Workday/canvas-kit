import * as axe from 'axe-core';

// @ts-ignore There are no type definitions for this import
import * as supports from 'ally.js/supports/supports';

import '@testing-library/cypress/add-commands';

declare global {
  interface Window {
    axe: typeof axe;
  }
}

/**
 * Needed until https://github.com/avanslaars/cypress-axe/issues/10 is not fixed
 * This is needed to inject axe to the page since it will not on it's own
 */
Cypress.Commands.add('injectAxe', () => {
  cy.window({log: false}).then(window => {
    window.axe = axe;
  });
});

// Needed for https://github.com/Bkucera/cypress-plugin-tab/issues/46
Cypress.Commands.overwrite('visit', (originalFn, urlOrOptions, inputOptions = {}) => {
  let options: typeof urlOrOptions;
  if (typeof urlOrOptions === 'object') {
    options = urlOrOptions;
  } else {
    // @ts-ignore
    options = {url: urlOrOptions as string, ...inputOptions};
  }

  return originalFn({
    ...options,
    onBeforeLoad(win) {
      options.onBeforeLoad?.(win);
      supports(); // prime the ally.js supports cache so it doesn't mess with the cypress-plugin-tab
    },
  });
});

// Add better logging to cy.tab
Cypress.Commands.overwrite<'tab', 'element'>('tab', (originalFn, subject, options) => {
  // Lots of `any` overrides:

  // (cy.$$ as any) - according to the types, `cy.$$` can only take a string which isn't true.
  // jQuery can wrap elements directly as well. Source:
  // https://github.com/cypress-io/cypress/blob/df5687c65d82e0591256df2dea727e5680baeb82/cli/types/cypress.d.ts#L2285

  // (cy as any).state - `cy.state` doesn't have any types since it is considered private.
  const prevSubject = (cy.$$ as any)(subject || (cy as any).state('window').document.activeElement);

  const log = Cypress.log({
    $el: prevSubject,
    consoleProps() {
      return {
        'Applied To': prevSubject.toArray()[0],
      };
    },
  });

  log.snapshot('before', {next: 'after'});

  return (
    Cypress.Promise.try(() => {
      return originalFn(subject, options);
    })
      // Cypress types are wrong and think `value` is a `Cypress.Chainable<Subject>` instead of `Subject`
      // https://github.com/cypress-io/cypress/pull/19003
      .then((value: any) => {
        log.set('$el', value).snapshot();
        return Cypress.$(value);
      })
      .finally(() => {
        log.end();
      }) as any
  );
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
