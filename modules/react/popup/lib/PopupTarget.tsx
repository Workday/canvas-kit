import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {usePopupTarget, usePopupModel} from './hooks';

export interface PopupTargetProps {
  children?: React.ReactNode;
}

export const PopupTarget = createSubcomponent(SecondaryButton)({
  displayName: 'Popup.Target',
  modelHook: usePopupModel,
  elemPropsHook: usePopupTarget,
})<PopupTargetProps>(({children, model, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
