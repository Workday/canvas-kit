/**
 *
 * @param testId Optional test id to target the desired modal
 */
export function get(testId?: string) {
  const selector = testId ? `[data-testid='${testId}']` : `[role=dialog]`;

  return cy.get(selector);
}

export function getTitle($modal: JQuery) {
  return $modal.find('h3');
}

export function getCloseButton($modal: JQuery) {
  return $modal.find('[aria-label=Close]');
}
