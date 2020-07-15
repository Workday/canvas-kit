import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * This hook will add a `ref` element to the Popup stack on mount and remove on unmount. If you use
 * `Popper`, the popper `ref` is automatically added/removed from the Popup stack. The Popup stack
 * is required for proper z-index values to ensure Popups are rendered correct. It is also required
 * for global listeners like click outside or escape key closing a popup. Without the Popup stack,
 * all popups will close rather than only the topmost one.
 * @param ref This ref will be managed by the PopupStack and should not be managed by React. Do not
 * apply this ref to a React element. Doing so will result in an error. Instead, use this `ref`
 * directly with `ReactDOM.createPortal(<YourComponent>, ref.current!)`. This is definitely strange
 * for React code, but is necessary for the PopupStack to remain framework agnostic and flexible to
 * integrate with existing popup stack systems
 * @param target Usually the trigger of a popup. This will fix `bringToTop` and should be provided
 * by all ephemeral-type popups (like Tooltips, Select menus, etc). It will also add in clickOutside
 * detection
 */
export const usePopupStack = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  target?: HTMLElement
): void => {
  // useState function input ensures we only create a container once.
  const [popupRef] = React.useState(() => {
    const container = PopupStack.createContainer();
    (ref as any).current = container;
    return container;
  });
  // We useLayoutEffect to ensure proper timing of registration of the element to the popup stack.
  // Without this, the timing is unpredictable when mixed with other frameworks. Other frameworks
  // should also register as soon as the element is available
  React.useLayoutEffect(() => {
    if (popupRef !== ref.current) {
      throw Error(
        `The 'ref' passed to usePopupStack should not be applied to a React element. This will cause a runtime error where the PopupStack and React compete for the element. Instead use ReactDOM.createPortal(<YourComponent />, ref.current)`
      );
    }
    PopupStack.add({element: ref.current!, owner: target});
    const element = ref.current!;
    return () => {
      PopupStack.remove(element);
    };
  }, [ref, target, popupRef]);
};
