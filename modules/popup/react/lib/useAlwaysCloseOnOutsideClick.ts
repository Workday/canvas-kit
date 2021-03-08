import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global listener for all clicks. It will only call the `onClose` callback if the click
 * happened outside the `stackRef` element and its children regardless of the position in the stack.
 * This is useful for Tooltips or hierarchical menus.
 *
 * The `stackRef` should be the same as the one passed to `usePopupStack` or the `Popper` component
 * since `Popper` uses `usePopupStack` internally.
 * @param stackRef
 * @param onClose
 */
export const useAlwaysCloseOnOutsideClick = <E extends HTMLElement>(
  stackRef: React.RefObject<E>,
  onClose: () => void
) => {
  const onCloseRef = React.useRef(onClose);
  onCloseRef.current = onClose;

  const onClick = React.useMemo(
    () => (event: MouseEvent) => {
      if (!stackRef.current) {
        return;
      }
      if (
        // Use `PopupStack.contains` instead of `ref.current.contains` so that the application can
        // decide if clicking the target should toggle the popup rather than it toggling implicitly
        // because the target is outside `ref.current`
        !PopupStack.contains(stackRef.current, event.target as HTMLElement)
      ) {
        onCloseRef.current();
      }
    },
    [stackRef]
  );

  React.useLayoutEffect(() => {
    document.addEventListener('mousedown', onClick);
    stackRef.current?.setAttribute('data-behavior-click-outside-close', 'always');

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  });
};
