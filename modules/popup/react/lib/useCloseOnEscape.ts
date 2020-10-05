import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global detection of the Escape key. It will only call the `onClose` callback if the
 * provided `stackRef` element is the topmost in the stack. The `stackRef` should be the same as the one passed
 * to `usePopupStack` or the `Popper` component since `Popper` uses `usePopupStack` internally.
 * If provided, the `previousFocusRef` allows you to return focus to an element before `onClose` is called
 * @param stackRef
 * @param onClose
 * @param previousFocusRef
 */

const focusPreviousElement = (previousFocusRef?: React.RefObject<HTMLElement>) => {
  previousFocusRef?.current?.focus();
};

export const useCloseOnEscape = <E extends HTMLElement>(
  stackRef: React.RefObject<E>,
  onClose: () => void,
  previousFocusRef?: React.RefObject<HTMLElement>
) => {
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (
        (event.key === 'Esc' || event.key === 'Escape') &&
        PopupStack.isTopmost(stackRef.current!)
      ) {
        // return focus to previously focused element, if provided
        focusPreviousElement(previousFocusRef);
        onClose();
      }
    },
    [onClose, previousFocusRef, stackRef]
  );

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onKeyDown]);
};
