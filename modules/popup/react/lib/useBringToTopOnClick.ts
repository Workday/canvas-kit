import React from 'react';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * This hook will bring an element to the top of the stack when any element inside the provided
 * `ref` element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all
 * "child" popups will also be brought to the top. A "child" popup is a Popup that was opened from
 * another Popup. Usually this is a Tooltip or Select component inside something like a Modal.
 */
export const useBringToTopOnClick = <E extends HTMLElement>(ref: React.RefObject<E>) => {
  let timer: number;
  const onClick = (event: MouseEvent) => {
    // This delay allows for other actions to be processed first. For example, if a `ClickOutside`
    // is registered, it will be handled first - allowing another popup to close before being
    // brought to top, which would cancel the closing (because it was no longer the topmost).

    // Here's an example without this delay. ![bringToFront is processed before
    // closeOnOutsideClick](https://user-images.githubusercontent.com/338257/83921416-87b64580-a73b-11ea-913b-6bd0592def74.gif)

    // Priority and cancellability of behaviors might be necessary. `requestAnimationFrame` isn't a
    // very obvious solution to this problem. But we have yet to define how behaviors may interact.
    // I think this is fine for now?
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
