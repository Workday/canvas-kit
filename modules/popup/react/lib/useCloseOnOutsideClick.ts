import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global listener for all clicks. It will only call the `onClose` callback if the click
 * happened outside the `ref` element and its children _and_ the provided `ref` element is the
 * topmost in the stack. The `ref` should be the same as the one passed to `usePopupStack` or the
 * `Popper` component since `Popper` uses `usePopupStack` internally.
 * @param ref
 * @param onClose
 */
export const useCloseOnOutsideClick = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  onClose: () => void
) => {
  const onClick = (event: MouseEvent) => {
    if (
      PopupStack.isTopmost(ref.current!) &&
      // Use `PopupStack.contains` instead of `ref.current.contains` so that the application can
      // decide if clicking the target should toggle the popup rather than it toggling implicitly
      // because the target is outside `ref.current`
      !PopupStack.contains(ref.current!, event.target as HTMLElement)
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
