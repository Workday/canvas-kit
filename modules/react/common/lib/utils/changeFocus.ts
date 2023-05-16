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

  if (hasCallableProperty(element, 'focus')) {
    // Dispatch an unidentified keyboard event for an input provider prior to a focus change so that
    // the ring will appear.
    if (typeof KeyboardEvent === 'function' && hasCallableProperty(element, 'dispatchEvent')) {
      const event = new KeyboardEvent('keydown', {bubbles: true, key: 'Unidentified'});
      element.dispatchEvent(event);
    }

    element.focus();
  }
};

type Callable<K extends string> = {
  [P in K]: Function;
};

function hasCallableProperty<K extends string>(input: unknown, method: K): input is Callable<K> {
  return (
    !!input &&
    typeof input === 'object' &&
    input!.hasOwnProperty(method) &&
    typeof (input as any)[method] === 'function'
  );
}
