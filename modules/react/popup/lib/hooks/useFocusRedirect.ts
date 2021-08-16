import React from 'react';

import {PopupModel} from './usePopupModel';
import {getFirstFocusableElement, getLastFocusableElement} from '@workday/canvas-kit-react/common';

/**
 * Manages focus around a popup, treating the popup as if it was part of the DOM where it appears.
 * Popups are typically "portalled" (inserted at the end of `document.body`) to ensure proper
 * rendering. This violates [WCAG Focus
 * Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html). This
 * hook helps redirect focus as if the popup element appeared in the DOM. `aria-owns` might also be
 * used to ensure assistive technology places the popup after the button for virtual cursors. This
 * hook does no provide `aria-owns` and this must be provided yourself. Requires `useReturnFocus` to
 * work properly. Works well with `useInitialFocus`.
 *
 * This should be used with non-modal dialogs.
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
        } else if (
          !event.getModifierState('Shift') &&
          document.activeElement === lastFocusableElement
        ) {
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
