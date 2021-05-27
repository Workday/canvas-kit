import * as React from 'react';

import {
  createComponent,
  useModelContext,
  createHook,
  changeFocus,
} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {PopupModel} from './usePopupModel';
import {PopupModelContext} from './Popup';

export interface PopupCloseButtonProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const usePopupCloseButton = createHook(({events, state}: PopupModel) => {
  return {
    onClick: () => {
      events.hide();
      // delay until after state change have happened and changes are flushed to the DOM
      requestAnimationFrame(() => {
        if (state.willReturnFocus.current) {
          changeFocus((state.returnFocusRef || state.targetRef).current);
        }
      });
    },
  };
});

export const PopupCloseButton = createComponent(SecondaryButton)({
  displayName: 'Popup.CloseButton',
  Component: ({children, model, ...elemProps}: PopupCloseButtonProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupCloseButton(localModel, elemProps, ref);
    return <Element {...props}>{children}</Element>;
  },
});
