import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Connects an element ref to the Popup stack
 * @param ref Ref of the element that is considered the container for a Popup. Usually the `Popup` component
 * @param type The type of popup
 */
export const usePopupStack = <E extends HTMLElement>(ref: React.RefObject<E>) => {
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
  return {
    /**
     * Most useful for ephemeral-style popups to know if we're the topmost popup and therefore
     * should close on events like escape key or click outside
     */
    isTopmost() {
      // If the type of popup is ephemeral, we only care about other ephemeral popups
      // If the type of popup is persistent, I'm not sure we care what's on top
      return PopupStack.isTopmost(ref.current!);
    },
  };
};
