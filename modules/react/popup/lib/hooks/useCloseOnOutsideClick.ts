import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {PopupModel} from './usePopupModel';

/**
 * Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
 * click happened outside the PopupModel's `state.stackRef` element and its children _and_ the
 * provided `stackRef` element is the topmost element with this behavior applied in the stack. Adds
 * a `data-behavior-click-outside-close="topmost"` attribute to ensure proper functionality.
 *
 * This should be used with popup elements that are dismissible like Modals, non-modal dialogs,
 * dropdown menus, etc. Tooltips and hierarchical menus should use `useAlwaysCloseOnClickOutside`
 * instead.
 */
export const useCloseOnOutsideClick = (model: PopupModel, elemProps = {}) => {
  const onClick = React.useCallback(
    (event: MouseEvent) => {
      if (!model.state.stackRef.current) {
        return;
      }
      const elements = PopupStack.getElements()
        .filter(e => e.getAttribute('data-behavior-click-outside-close') === 'topmost')
        .sort((a, b) => Number(a.style.zIndex) - Number(b.style.zIndex));
      if (
        elements.length &&
        elements[elements.length - 1] === model.state.stackRef.current &&
        // Use `PopupStack.contains` instead of `ref.current.contains` so that the application can
        // decide if clicking the target should toggle the popup rather than it toggling implicitly
        // because the target is outside `ref.current`
        !PopupStack.contains(model.state.stackRef.current, event.target as HTMLElement)
      ) {
        model.events.hide({event});
      }
    },
    [model.state.stackRef, model.events]
  );

  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    document.addEventListener('mousedown', onClick);
    model.state.stackRef.current?.setAttribute('data-behavior-click-outside-close', 'topmost');

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [model.state.stackRef, visible, onClick]);

  return elemProps;
};
