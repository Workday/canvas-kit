import React from 'react';
import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {PopupModel} from '../usePopupModel';

/**
 * This hook will bring an element to the top of the stack when any element inside the PopupModel's
 * `stackRef` element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all
 * "child" popups will also be brought to the top. A "child" popup is a Popup that was opened from
 * another Popup. Usually this is a Tooltip or Select component inside something like a Modal.
 */
export const useBringToTopOnClick = (model: PopupModel, elemProps = {}) => {
  let timer: number;
  const onClick = (event: MouseEvent) => {
    // requestAnimationFrame is used to control timing of when `bringToTop` is called.
    // https://github.com/Workday/canvas-kit/pull/670#discussion_r436158184
    timer = requestAnimationFrame(() => {
      if (model.state.stackRef.current?.contains(event.target as Node)) {
        PopupStack.bringToTop(model.state.stackRef.current!);
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

  return elemProps;
};
