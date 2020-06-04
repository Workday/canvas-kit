import React from 'react';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * This hook will bring an element to the top of the stack when any element inside the provided
 * `ref` element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all
 * "child" popups will also be brought to the top. A "child" popup is a Popup is a Popup that was
 * opened from another Popup. Usually this is a Tooltip or Select component inside something like a
 * Modal.
 */
export const useBringToTopOnClick = <E extends HTMLElement>(ref: React.RefObject<E>) => {
  let timer: number;
  const onClick = (event: MouseEvent) => {
    timer = requestAnimationFrame(() => {
      if (ref.current?.contains(event.target as Node)) {
        PopupStack.bringToTop(ref.current!);
      }
    });
  };
  React.useLayoutEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(timer);
      document.removeEventListener('click', onClick);
    };
  });
};
