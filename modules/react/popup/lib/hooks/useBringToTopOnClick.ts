import React from 'react';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

import {PopupModel} from './usePopupModel';

/**
 * This hook will bring an element to the top of the stack when any element inside the provided
 * PopupModel's `state.stackRef` element is clicked. If `Popup.Popper` was used or `PopupStack.add`
 * provided an `owner`, all "child" popups will also be brought to the top. A "child" popup is a
 * Popup that was opened from another Popup. Usually this is a Tooltip or Select component inside
 * something like a Modal.
 *
 * This should be used on popup elements that are meant to persist (i.e. Windows).
 */
export const useBringToTopOnClick = (model: PopupModel, elemProps = {}) => {
  const timer = React.useRef(-1);
  const onClick = React.useCallback(
    (event: MouseEvent) => {
      // requestAnimationFrame is used to control timing of when `bringToTop` is called.
      // https://github.com/Workday/canvas-kit/pull/670#discussion_r436158184
      timer.current = requestAnimationFrame(() => {
        if (model.state.stackRef.current?.contains(event.target as Node)) {
          PopupStack.bringToTop(model.state.stackRef.current!);
        }
      });
    },
    [model.state.stackRef]
  );

  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(timer.current);
      document.removeEventListener('click', onClick);
    };
  }, [visible, onClick]);

  return elemProps;
};
