import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {PopupModel} from '../usePopupModel';

/**
 * Registers global listener for all clicks. It will only call the `PopupModel` `hide` event if the
 * click happened outside the model's `stackRef` element and its children regardless of the position
 * in the stack. This is useful for Tooltips or hierarchical menus.
 */
export const useAlwaysCloseOnOutsideClick = (model: PopupModel, elemProps = {}) => {
  const onClick = React.useCallback(
    (event: MouseEvent) => {
      if (!model.state.stackRef.current) {
        return;
      }
      if (
        // Use `PopupStack.contains` instead of `ref.current.contains` so that the application can
        // decide if clicking the target should toggle the popup rather than it toggling implicitly
        // because the target is outside `ref.current`
        !PopupStack.contains(model.state.stackRef.current, event.target as HTMLElement)
      ) {
        model.events.hide();
      }
    },
    [model.events, model.state.stackRef]
  );

  React.useLayoutEffect(() => {
    if (!model.state.visible) {
      return;
    }
    document.addEventListener('mousedown', onClick);
    model.state.stackRef.current?.setAttribute('data-behavior-click-outside-close', 'always');

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [model.state.stackRef, model.state.visible, onClick]);

  return elemProps;
};
