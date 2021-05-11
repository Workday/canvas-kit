import * as React from 'react';

import {createComponent, useModelContext, createHook} from '@workday/canvas-kit-react/common';
import {Button} from '@workday/canvas-kit-react/button';

import {PopupModel} from '@workday/canvas-kit-react/popup';
import {PopupModelContext} from './Popup';

export interface PopupTargetProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const usePopupTargetButton = createHook(({events, state}: PopupModel) => {
  return {
    ref: state.targetRef,
    onClick: events.show,
  };
});

export const PopupTarget = createComponent(Button)({
  displayName: 'Popup.Target',
  Component: ({children, model, ...elemProps}: PopupTargetProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupTargetButton(localModel, elemProps, ref);
    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  },
});
