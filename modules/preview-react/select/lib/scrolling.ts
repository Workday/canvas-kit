// Modified from https://gist.github.com/hsablonniere/2581101
/**
 * @deprecated ⚠️ `scrollIntoViewIfNeeded` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export const scrollIntoViewIfNeeded = (elem: HTMLElement, centerIfNeeded = true): void => {
  const parent = elem.parentElement;

  if (elem && parent) {
    const parentComputedStyle = window.getComputedStyle(parent, null);
    const parentBorderTopWidth = parseInt(
      parentComputedStyle.getPropertyValue('border-top-width'),
      10
    );

    // Check if elem is out of view at the top edge of the parent's viewport
    const overTop = elem.offsetTop < parent.scrollTop + parentBorderTopWidth;

    // Check if elem is out of view at the bottom edge of the parent's viewport
    const overBottom =
      elem.offsetTop + elem.offsetHeight >
      parent.scrollTop + parentBorderTopWidth + parent.clientHeight;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop = Math.floor(
        elem.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + elem.clientHeight / 2
      );
    }

    if ((overTop || overBottom) && !centerIfNeeded) {
      if (overBottom) {
        // elem is out of view at the bottom edge of the parent's viewport;
        // scroll down just far enough for elem to be visible
        parent.scrollTop =
          elem.clientHeight - (parent.clientHeight + parentBorderTopWidth - elem.offsetTop);
      } else {
        // elem is out of view at the top edge of the parent's viewport;
        // scroll up just far enough for elem to be visible
        parent.scrollTop = elem.offsetTop - parentBorderTopWidth;
      }
    }
  }
};
