import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {space} from '@workday/canvas-kit-react/tokens';

import {usePopupCloseButton, usePopupModel} from './hooks';

export interface PopupCloseIconProps extends ExtractProps<typeof TertiaryButton, never> {}

export const PopupCloseIcon = createSubcomponent('button')({
  displayName: 'Popup.CloseIcon',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseIconProps>(({children, ...elemProps}, Element) => {
  return (
    <TertiaryButton
      as={Element}
      size="medium"
      icon={xIcon}
      type="button"
      position="absolute"
      right={space.xxxs}
      top={space.xxxs}
      {...elemProps}
    />
  );
});
