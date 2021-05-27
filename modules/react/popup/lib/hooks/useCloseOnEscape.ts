import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {changeFocus} from '@workday/canvas-kit-react/common';

import {PopupModel} from '../usePopupModel';

/**
 * Registers global detection of the Escape key. It will only call the PopupModel's `hide` event if
 * the model's `stackRef` element is the topmost in the stack. If there was a target, focus will
 * return to the target when closed.
 */
export const useCloseOnEscape = (model: PopupModel, elemProps = {}) => {
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (
        (event.key === 'Esc' || event.key === 'Escape') &&
        PopupStack.isTopmost(model.state.stackRef.current!)
      ) {
        if (model.state.willReturnFocus.current) {
          changeFocus((model.state.returnFocusRef || model.state.targetRef).current);
        }
        model.events.hide();
      }
    },
    [
      model.state.stackRef,
      model.state.willReturnFocus,
      model.state.returnFocusRef,
      model.state.targetRef,
      model.events,
    ]
  );

  const visible = model.state.visibility !== 'hidden';

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown, visible]);

  return elemProps;
};
