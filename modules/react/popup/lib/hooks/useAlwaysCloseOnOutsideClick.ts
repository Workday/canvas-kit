import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';

/**
 * Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
 * click happened outside the `stackRef` element and its children regardless of the position in the
 * stack. This is useful for Tooltips or hierarchical menus. Adds a
 * `data-behavior-click-outside-close="always"` attribute to ensure proper functionality.
 *
 * This should be used with popup elements that should close no matter their position in the stack
 * (i.e. Tooltips).
 */
export const useAlwaysCloseOnOutsideClick = createElemPropsHook(usePopupModel)(model => {
  const onClick = React.useCallback(
    (event: MouseEvent) => {
      if (!model.state.stackRef.current) {
        return;
      }
      if (
        // Use `PopupStack.contains` instead of `ref.current.contains` so that the application can
        // decide if clicking the target should toggle the popup rather than it toggling implicitly
        // because the target is outside `ref.current`
        document.contains(event.target as HTMLElement) &&
        !PopupStack.contains(model.state.stackRef.current, event.target as HTMLElement)
      ) {
        model.events.hide(event);
      }
    },
    [model.events, model.state.stackRef]
  );

  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    document.addEventListener('mousedown', onClick);
    model.state.stackRef.current?.setAttribute('data-behavior-click-outside-close', 'always');

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [model.state.stackRef, visible, onClick]);

  return {};
});
