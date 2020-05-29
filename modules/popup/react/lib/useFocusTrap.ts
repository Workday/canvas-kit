import React from 'react';
import tabTrappingKey from 'focus-trap-js';

const useKeyDownListener = (onKeyDown: EventListenerOrEventListenerObject) => {
  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};

/**
 * "Trap" or "loop" focus within a provided `ref` element. This is required for accessibility on
 * modals. If a keyboard users hits the Tab or Shift + Tab, this will force "looping" of focus. It
 * effectively "hides" outside content from keyboard users. Use an overlay to hide content from mouse
 * users and `useAssistiveHideSiblings` to hide content from assistive technology users.
 * @param ref The element ref you wish to trap focus into
 */
export const useFocusTrap = <E extends HTMLElement>(ref: React.RefObject<E>) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (ref.current) {
      tabTrappingKey(event, ref.current);
    }
  };

  useKeyDownListener(handleKeydown);
};
