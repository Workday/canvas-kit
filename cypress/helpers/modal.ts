/**
 * Gets the modal element with the `[role=dialog]`
 * @param testId Optional test id to target the desired modal
 * @example
 * h.modal.get()
 *   .should('have.attr', 'role', 'dialog')
 */
export function get(testId?: string): Cypress.Chainable<JQuery> {
  const selector = testId ? `[data-testid='${testId}'] [role-dialog]` : `[role=dialog]`;

  return cy.get(selector);
}

/**
 * Gets the title component of the Modal. This is a required element for accessibility
 * @param $modal Modal component
 * @example
 * h.modal.get()
 *   .pipe(h.modal.getTitle)
 *   .should('equal', 'My Title')
 */
export function getTitle($modal: JQuery): JQuery {
  const id = $modal.attr('aria-labelledby');
  return $modal.find(`#${id}`).first();
}

/**
 * Gets the top-right 'X' button if available. Will fail if it is not present
 * @param $modal Modal component
 * @example
 * h.modal.get()
 *   .pipe(h.modal.getCloseButton)
 *   .click()
 */
export function getCloseButton($modal: JQuery): JQuery {
  return $modal.find('[aria-label=Close]');
}
