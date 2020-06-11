const clientHeight = (elem: HTMLElement): number => {
  const computedStyle = window.getComputedStyle(elem, null);
  const borderTopWidth = parseInt(computedStyle.getPropertyValue('border-top-width'), 10);
  const borderBottomWidth = parseInt(computedStyle.getPropertyValue('border-bottom-width'), 10);
  return elem.offsetHeight - borderTopWidth - borderBottomWidth;
};

// Modified from https://gist.github.com/hsablonniere/2581101
export const scrollIntoViewIfNeeded = (elem: HTMLElement, centerIfNeeded = true): void => {
  const parent = elem.parentElement;

  if (elem && parent) {
    // Calculate clientHeight manually since the native Element.clientHeight
    // property doesn't return the correct value in IE11 when the menu first
    // loads (we may be able to resolve this using hooks later)
    const elemClientHeight = clientHeight(elem);
    const parentClientHeight = clientHeight(parent);

    const parentComputedStyle = window.getComputedStyle(parent, null);
    const parentBorderTopWidth = parseInt(
      parentComputedStyle.getPropertyValue('border-top-width'),
      10
    );

    // Check if elem is out of view at the top edge of the parent's viewport
    const overTop = elem.offsetTop - parent.offsetTop < parent.scrollTop;

    // Check if elem is out of view at the bottom edge of the parent's viewport
    const overBottom =
      elem.offsetTop - parent.offsetTop + elemClientHeight - parentBorderTopWidth >
      parent.scrollTop + parentClientHeight;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop =
        elem.offsetTop -
        parent.offsetTop -
        parentClientHeight / 2 -
        parentBorderTopWidth +
        elemClientHeight / 2;
    }

    if ((overTop || overBottom) && !centerIfNeeded) {
      if (overBottom) {
        // elem is out of view at the bottom edge of the parent's viewport;
        // scroll down just far enough for elem to be visible
        if (parent.scrollTop === 0) {
          parent.scrollTop =
            elemClientHeight - (parentClientHeight + parentBorderTopWidth - elem.offsetTop);
        } else {
          parent.scrollTop += elemClientHeight;
        }
      } else {
        // elem is out of view at the top edge of the parent's viewport;
        // scroll up just far enough for elem to be visible
        parent.scrollTop = elem.offsetTop - parentBorderTopWidth;
      }
    }
  }
};
