import React from 'react';

import {PopupModel} from '../usePopupModel';
import {getFirstFocusableElement, getLastFocusableElement} from '@workday/canvas-kit-react/common';

/**
 * "Trap" or "loop" focus within a PopupModel's `stackRef` element. This is required for
 * accessibility on modals. If a keyboard users hits the Tab or Shift + Tab, this will force
 * "looping" of focus. It effectively "hides" outside content from keyboard users. Use an overlay to
 * hide content from mouse users and `useAssistiveHideSiblings` to hide content from assistive
 * technology users.
 */
export const useFocusRedirect = (model: PopupModel, elemProps = {}) => {
  const onKeyDown = React.useCallback(
    (event: KeyboardEvent): void => {
      if (model.state.stackRef.current && event.key === 'Tab') {
        const firstFocusableElement = getFirstFocusableElement(model.state.stackRef.current);
        const lastFocusableElement = getLastFocusableElement(model.state.stackRef.current);

        if (event.getModifierState('Shift') && document.activeElement === firstFocusableElement) {
          event.preventDefault();

          model.events.hide({event});
        } else if (document.activeElement === lastFocusableElement) {
          model.events.hide({event});
        }
      }
    },
    [model.events, model.state.stackRef]
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
  }, [visible, onKeyDown]);

  return elemProps;
};
