import React from 'react';

import {PopupStack} from '@workday/canvas-kit-labs-react-popup-stack';

/**
 * Connects an element ref to the Popup stack
 * @param ref Ref of the element that is considered the container for a Popup. Usually the `Popup` component
 * @param type The type of popup
 */
export const usePopupStack = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  type: 'ephemeral' | 'persistent' = 'ephemeral'
) => {
  // We useLayoutEffect to ensure proper timing of registration
  // of the element to the popup stack. Without this, the timing is unpredictable
  // when mixed with other frameworks. Other frameworks should also register as soon
  // as the element is available
  React.useLayoutEffect(() => {
    PopupStack.add({element: ref.current!, type});

    return () => {
      PopupStack.remove(ref.current!);
    };
  }, []);
  return {
    /**
     * Most useful for ephemeral-style popups to know if we're the topmost popup and therefore
     * should close on events like escape key or click outside
     */
    isTopmost() {
      // If the type of popup is ephemeral, we only care about other ephemeral popups
      // If the type of popup is persistent, I'm not sure we care what's on top
      return PopupStack.isTopmost(ref.current!, type === 'ephemeral' ? 'ephemeral' : undefined);
    },
  };
};

/**
 * Use this on ephemeral popups. It will add escape key handling and will call the `onClose`
 * function if the popup is the topmost in the popup stack
 * @param ref
 * @param onClose
 */
export const useOnEscape = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  onClose: () => void
) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (
      (event.key === 'Esc' || event.key === 'Escape') &&
      PopupStack.isTopmost(ref.current!, 'ephemeral')
    ) {
      onClose();
    }
  };

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);
};

export const useOutsideClick = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  onClose: () => void
) => {
  const onClick = (event: MouseEvent) => {
    if (
      PopupStack.isTopmost(ref.current!, 'ephemeral') &&
      !ref.current!.contains(event.target as HTMLElement)
    ) {
      onClose();
    }
  };
  React.useLayoutEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });
};
