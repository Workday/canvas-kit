import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * This hook will add a `ref` element to the Popup stack on mount and remove on unmount. If you use
 * `Popper`, the popper `ref` is automatically added/removed from the Popup stack. The Popup stack is
 * required for proper z-index values to ensure Popups are rendered correct. It is also required for
 * global listeners like click outside or escape key closing a popup. Without the Popup stack, all
 * popups will close rather than only the topmost one.
 * @param ref Ref of the element that is considered the container for a Popup. Usually the `Popup` component
 * @param type The type of popup
 */
export const usePopupStack = <E extends HTMLElement>(ref: React.RefObject<E>): void => {
  // We useLayoutEffect to ensure proper timing of registration
  // of the element to the popup stack. Without this, the timing is unpredictable
  // when mixed with other frameworks. Other frameworks should also register as soon
  // as the element is available
  React.useLayoutEffect(() => {
    PopupStack.add({element: ref.current!});

    return () => {
      PopupStack.remove(ref.current!);
    };
  }, [ref]);
};
