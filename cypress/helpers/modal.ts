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
  return $modal.find('[data-close]');
}
