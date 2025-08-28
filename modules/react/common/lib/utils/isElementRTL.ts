/**
 * Returns true if element has a right-to-left content direction. This is most useful to get
 * direction from a JavaScript event. If you desire to get a direction for styling, use [CSS Logical
 * Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
 *
 * The performance cost of getting the direction from an element is negligible, but it is intended
 * to be used in event handlers and not a part of render functions.
 *
 * ```ts
 * onKeyDown(e) {
 *   const isRTL = isElementRTL(e.currentTarget);
 *
 *   if (e.key === 'ArrowRight') {
 *     if (isRTL) {
 *       // Right arrow moves to the right even on RTL languages, but "right" doesn't mean
 *       //"advance" in RTL. Previous is to the right of the current in RTL.
 *       model.events.goToPreviousRow();
 *     } else {
 *       model.events.goToNextRow();
 *     }
 *   }
 * ```
 */
export const isElementRTL = (element: Element): boolean => {
  const direction = getComputedStyle(element).direction;
  return direction === 'rtl';
};
