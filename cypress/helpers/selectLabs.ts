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

/**
 * Tests the initial state of an unmodified Select (where no selection has been made) with a freshly opened listbox.
 */
export const testOpenListboxInitialState = (): void => {
  context(
    'the listbox should be visible and focused, and all accessibility attributes should be properly set',
    () => {
      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('the select button', () => {
        it('should have an aria-expanded attribute set to "true"', () => {
          getButton().should('have.attr', 'aria-expanded', 'true');
        });
      });

      context('the listbox', () => {
        it('should be visible', () => {
          getListbox().should('be.visible');
        });

        it('should have focus', () => {
          getListbox().should('be.focused');
        });

        it('should have an aria-activedescendant attribute with the same value as the id of the first option', () => {
          getListbox().should($listbox => {
            assertADMatchesOption($listbox, 0);
          });
        });
      });

      context('the first option', () => {
        it('should have an aria-selected attribute set to "true"', () => {
          getOption(0).should('have.attr', 'aria-selected', 'true');
        });
      });
    }
  );
};
