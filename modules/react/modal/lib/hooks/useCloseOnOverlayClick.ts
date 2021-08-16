import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {PopupModel} from '@workday/canvas-kit-react/popup';

/**
 * Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
 * click happened outside the `[role=dialog]` of an overlay component. The difference between `useCloseOnOutsideClick`
 * and `useCloseOnOverlayClick` is the Overlay is a child of a `stackRef` element and has a different
 */
export const useCloseOnOverlayClick = (model: PopupModel, elemProps = {}) => {
  const onClick = React.useCallback(
    (event: MouseEvent) => {
      if (!model.state.stackRef.current) {
        return;
      }
      const elements = PopupStack.getElements()
        .filter(e => e.getAttribute('data-behavior-click-outside-close') === 'topmost')
        .sort((a, b) => Number(a.style.zIndex) - Number(b.style.zIndex));
      const dialog = model.state.stackRef.current.querySelector<HTMLElement>('[role=dialog]');

      // Create a list of parent elements of the dialog to detect overlay clicks
      const elementsBetweenDialogAnBody: HTMLElement[] = [];
      let element = dialog;
      while (element?.parentElement) {
        elementsBetweenDialogAnBody.push(element.parentElement);
        element = element?.parentElement || null;
      }

      if (
        dialog &&
        elements.length &&
        elements[elements.length - 1] === model.state.stackRef.current &&
        elementsBetweenDialogAnBody.some(element => element === event.target)
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
