import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global detection of the Escape key. It will only call the `onClose` callback if the
 * provided `stackRef` element is the topmost in the stack. The `stackRef` should be the same as the one passed
 * to `usePopupStack` or the `Popper` component since `Popper` uses `usePopupStack` internally.
 * If provided, the `returnFocusRef` allows you to return focus to an element before `onClose` is called
 * @param stackRef
 * @param onClose
 * @param returnFocusRef
 */

const focusElement = (returnFocusRef?: React.RefObject<HTMLElement>) => {
  returnFocusRef?.current?.focus();
};

export const useCloseOnEscape = <E extends HTMLElement>(
  stackRef: React.RefObject<E>,
  onClose: () => void,
  returnFocusRef?: React.RefObject<HTMLElement>
) => {
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (
        (event.key === 'Esc' || event.key === 'Escape') &&
        PopupStack.isTopmost(stackRef.current!)
      ) {
        // return focus to another element, if provided
        focusElement(returnFocusRef);
        onClose();
      }
    },
    [onClose, returnFocusRef, stackRef]
  );

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onKeyDown]);
};
