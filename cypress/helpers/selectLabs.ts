const optionSelector = '[role=option]';

/**
 * Gets the button element with `[aria-haspopup=listbox]` responsible for triggering the listbox.
 */
export const getButton = (): Cypress.Chainable<JQuery> => {
  return cy.get('[aria-haspopup=listbox]');
};

/**
 * Gets the listbox element.
 */
export const getListbox = (): Cypress.Chainable<JQuery> => {
  return cy.get('[role=listbox]');
};

/**
 * Gets the hidden text input element which tracks the value of the Select component and fires change events.
 */
export const getInput = (): Cypress.Chainable<JQuery> => {
  return cy.get(`input[type=text]`);
};

/**
 * Gets an option element based on its index (if the function is provided with a number) or a value (otherwise).
 */
export const getOption = (lookup: number | string): Cypress.Chainable<JQuery> => {
  if (typeof lookup === 'number') {
    return cy.get(`${optionSelector}:eq(${lookup})`);
  } else {
    return cy.get(`${optionSelector}[data-value=${lookup.toString()}]`);
  }
};

/**
 * Asserts that the `aria-activedescendant` of the provided listbox matches the id of the option at the provided index.
 * Should be called within cypress `.then()`.
 * @param $listbox Listbox whose `aria-activedescendant` we're checking
 * @param optionIndex Numerical index of the option we're comparing against
 * @example
 * h.selectLabs.getListbox()
 *   .should($listbox => {
 *     h.selectLabs.assertADMatchesOption($listbox, 0);
 *   });
 */
export const assertADMatchesOption = ($listbox: JQuery, optionIndex: number): void => {
  const listboxAD = $listbox.attr('aria-activedescendant');
  const optionId = $listbox.find(`${optionSelector}:eq(${optionIndex})`).attr('id');

  expect(listboxAD).to.equal(optionId);
};
