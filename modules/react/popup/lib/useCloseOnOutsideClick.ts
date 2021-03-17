import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Registers global listener for all clicks. It will only call the `onClose` callback if the click
 * happened outside the `stackRef` element and its children _and_ the provided `stackRef` element is
 * the topmost element with this behavior applied in the stack. Adds a `data-behavior-click-outside-close`
 * attribute to track usage of this behavior hook.
 *
 * The `stackRef` should be the same as the one passed to `usePopupStack` or the `Popper` component
 * since `Popper` uses `usePopupStack` internally.
 * @param stackRef
 * @param onClose
 */
export const useCloseOnOutsideClick = <E extends HTMLElement>(
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
      const elements = PopupStack.getElements()
        .sort((a, b) => Number(a.style.zIndex) - Number(b.style.zIndex))
        .filter(e => e.getAttribute('data-behavior-click-outside-close') === 'topmost');
      if (
        elements.length &&
        elements[elements.length - 1] === stackRef.current &&
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
    stackRef.current?.setAttribute('data-behavior-click-outside-close', 'topmost');

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  });
};
