import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

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
        model.events.hide({event});
      }
    },
    [model.state.stackRef, model.events]
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
