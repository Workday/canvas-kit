/**
 * Gets the menu element. Takes in the original select
 * @example
 * cy.findByLabelText('Label')
 *   .pipe(h.selectLabs.getMenu)
 *   .should('be.visible')
 */
export function getMenu($select: JQuery): JQuery {
  const id = $select.attr('aria-controls');
  return Cypress.$(`[id="${id}"][role=listbox]`);
}

/**
 * Returns an option based on the index in the array, exact string of the label or RegExp of the label
 * This shouldn't normally be needed by application tests. Use the `select` helper instead
 * @example
 * cy.findByLabelText('Label')
 *   .pipe(h.selectLabs.getOption('Mail'))
 *   .click()
 */
export const getOption = (lookup: number | string | RegExp) =>
  function getOption($select: JQuery): JQuery {
    const optionSelector = '[role=option]';
    const $menu = getMenu($select);
    if (typeof lookup === 'number') {
      return $menu.find(`${optionSelector}:eq(${lookup})`);
    } else if (typeof lookup === 'string') {
      const $options = $menu.find(optionSelector);
      return $options.filter(i => {
        return $options.eq(i).text() === lookup;
      });
    } else {
      const $options = $menu.find(optionSelector);
      return $options.filter(i => {
        return lookup.test($options.eq(i).text());
      });
    }
  };

/**
 * Selects an option by the label of the option. This is what is visibly rendered on the page. Will return the original select element.
 * @param label The exact string or RegExp of the contents of the label. Note this is not the value.
 * @example
 * cy.findByLabelText('Label')
 *   .pipe(h.selectLabs.select('Mail'))
 *   .should('have.text', 'Mail') // label of the option
 *   .should('have.value', 'mail') // value of the selected option
 */
export const select = (label: string | RegExp) =>
  function select($select: JQuery): Cypress.Chainable<JQuery> {
    cy.wrap($select).click().pipe(getOption(label)).click();

    return cy.wrap($select);
  };
