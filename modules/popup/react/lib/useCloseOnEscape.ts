import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global detection of the Escape key. It will only call the `onClose` callback if the
 * provided `ref` element is the topmost in the stack. The `ref` should be the same as the one passed
 * to `usePopupStack` or the `Popper` component since `Popper` uses `usePopupStack` internally.
 * @param ref
 * @param onClose
 */
export const useCloseOnEscape = <E extends HTMLElement>(
  ref: React.RefObject<E>,
  onClose: () => void
) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if ((event.key === 'Esc' || event.key === 'Escape') && PopupStack.isTopmost(ref.current!)) {
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
