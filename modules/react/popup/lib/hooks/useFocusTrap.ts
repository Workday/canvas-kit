import React from 'react';
import tabTrappingKey from 'focus-trap-js';

import {PopupModel} from '../usePopupModel';

/**
 * "Trap" or "loop" focus within a PopupModel's `stackRef` element. This is required for
 * accessibility on modals. If a keyboard users hits the Tab or Shift + Tab, this will force
 * "looping" of focus. It effectively "hides" outside content from keyboard users. Use an overlay to
 * hide content from mouse users and `useAssistiveHideSiblings` to hide content from assistive
 * technology users.
 */
export const useFocusTrap = (model: PopupModel, elemProps = {}) => {
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (model.state.stackRef.current) {
        tabTrappingKey(event, model.state.stackRef.current);
      }
    },
    [model.state.stackRef]
  );

  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    if (!model.state.visible) {
      return;
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [model.state.visible, onKeyDown]);

  return elemProps;
};
