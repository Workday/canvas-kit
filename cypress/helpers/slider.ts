/**
 * Gets the ranged input of the the slider. Useful for getting the value of it.
 * @param $modal Modal component
 * @example
 * h.modal.get()
 *   .pipe(h.slider.getRangeInput)
 *   .should('have.value', 50)
 */
export function getRangeInput($container: JQuery): JQuery {
  return $container.find('[type=range]');
}
