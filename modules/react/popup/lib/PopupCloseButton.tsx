import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {usePopupCloseButton, usePopupModel} from './hooks';

export interface PopupCloseButtonProps {
  children?: React.ReactNode;
}

export const PopupCloseButton = createSubcomponent(SecondaryButton)({
  displayName: 'Popup.CloseButton',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseButtonProps>(({children, ...elemProps}: PopupCloseButtonProps, Element) => {
  return (
    <Element type="button" {...elemProps}>
      {children}
    </Element>
  );
});
