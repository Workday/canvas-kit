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
  console.log('close on escape');
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      console.log('useCloseOnEscape', event.key, model.state.stackRef);
      if (
        (event.key === 'Esc' || event.key === 'Escape') &&
        PopupStack.isTopmost(model.state.stackRef.current!)
      ) {
        if (model.state.willReturnFocus.current) {
          console.log('change focus');
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

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    if (!model.state.visible) {
      return;
    }
    console.log('useCloseOnEscape useLayoutEffect');
    document.addEventListener('keydown', onKeyDown);
    return () => {
      console.log('useCloseOnEscape unlisten');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown, model.state.visible]);

  return elemProps;
};
