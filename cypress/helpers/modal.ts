/**
 * Gets the title component of the Modal. This is a required element for accessibility
 * @param $modal Modal element with [role=dialog]
 * @example
 * h.modal.get()
 *   .pipe(h.modal.getTitle)
 *   .should('equal', 'My Title')
 */
export function getTitle($modal: JQuery): JQuery {
  const id = $modal.attr('aria-labelledby');
  return $modal.find(`[id="${id}"]`).first();
}

/**
 * Gets the top-right 'X' button if available. Will fail if it is not present
 * @param $modal Modal element with [role=dialog]
 * @example
 * h.modal.get()
 *   .pipe(h.modal.getCloseButton)
 *   .click()
 */
export function getCloseButton($modal: JQuery): JQuery {
  return $modal.find('[data-close]');
}

/**
 * Gets the Overlay element given the modal element
 * @param $modal Modal element with [role=dialog]
 */
export function getOverlay($modal: JQuery): JQuery {
  const bodyEl = Cypress.$('body')[0];
  return getElement($modal, $el => $el.parent()[0] === bodyEl);
}

function getElement(element: JQuery, predicate: (element: JQuery) => boolean): JQuery {
  if (predicate(element)) {
    return element;
  } else if (element.parent().length) {
    return getElement(element.parent(), predicate);
  } else {
    return Cypress.$();
  }
}
