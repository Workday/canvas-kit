import React from 'react';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * This hook will bring an element to the top of the stack when any element inside the provided
 * `stackRef` element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all
 * "child" popups will also be brought to the top. A "child" popup is a Popup that was opened from
 * another Popup. Usually this is a Tooltip or Select component inside something like a Modal.
 */
export const useBringToTopOnClick = <E extends HTMLElement>(stackRef: React.RefObject<E>) => {
  let timer: number;
  const onClick = (event: MouseEvent) => {
    // requestAnimationFrame is used to control timing of when `bringToTop` is called.
    // https://github.com/Workday/canvas-kit/pull/670#discussion_r436158184
    timer = requestAnimationFrame(() => {
      if (stackRef.current?.contains(event.target as Node)) {
        PopupStack.bringToTop(stackRef.current!);
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
