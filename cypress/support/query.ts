import * as dom from '../helpers/dom';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getByLabelText(label: string): Cypress.Chainable<JQuery>;
    }
  }
}

const createRetryableCommand = (
  name: string,
  message: string,
  options,
  getValue: (...args: any[]) => any
) => {
  Cypress._.defaults(options, {
    log: true,
    timeout: 4000,
  });

  if (options.log) {
    options._log = Cypress.log({
      message: [message],
    });
  }

  const retryValue = () => {
    return Cypress.Promise.try(getValue).catch(err => {
      options.error = err;
      return (cy as any).retry(retryValue, options);
    });
  };

  const resolveValue = () => {
    return Cypress.Promise.try(retryValue).then(value => {
      return (cy as any).verifyUpcomingAssertions(value, options, {
        onRetry: resolveValue,
      });
    });
  };

  return resolveValue().then(value => {
    options._log.set('$el', value);
    if (options._log) {
      options._log.snapshot().end();
    }

    return value;
  });
};

Cypress.Commands.add(
  'getByLabelText',
  {prevSubject: ['optional', 'element']},
  ($container: JQuery | undefined, labelText: string, options = {}) => {
    return createRetryableCommand('getByLabelText', labelText, options, () => {
      return dom.getByLabelText(labelText)($container);
    });
  }
);

// We'll be adding commands to this file similar to Cypress testing Library
