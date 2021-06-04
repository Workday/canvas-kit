import * as React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {PopupModel} from '@workday/canvas-kit-react/popup';
import {usePopupTarget, PopupModelContext} from './hooks';

export interface PopupTargetProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const PopupTarget = createComponent(SecondaryButton)({
  displayName: 'Popup.Target',
  Component: ({children, model, ...elemProps}: PopupTargetProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupTarget(localModel, elemProps, ref);

    return <Element {...props}>{children}</Element>;
  },
});
