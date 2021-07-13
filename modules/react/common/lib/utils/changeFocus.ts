/**
 * Programmatically change focus in a way that causes a focus ring around the new element.
 * @param element Element that should be focused
 */
export const changeFocus = (element: unknown) => {
  // Normally the browser will ignore calls to `focus` on an element that already has focus, but we
  // don't want to accidentally show the focus ring in this case, so we'll detect and bail early.
  // We'll also bail if there is no element
  if (document.activeElement === element || !element) {
    return;
  }

  if (element instanceof HTMLElement) {
    // Dispatch an unidentified keyboard event for an input provider prior to a focus change so that
    // the ring will appear.
    if (typeof KeyboardEvent === 'function') {
      const event = new KeyboardEvent('keydown', {bubbles: true, key: 'Unidentified'});

      element.dispatchEvent(event);
    }

    element.focus();
  }
};
