import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Use this on ephemeral popups. It will add escape key handling and will call the `onClose`
 * function if the popup is the topmost in the popup stack
 * @param ref
 * @param onClose
 */
export const useEscapeKey = <E extends HTMLElement>(
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
