import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {
  styled,
  createSubcomponent,
  StyledType,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

import {usePopupCloseButton, usePopupModel} from './hooks';

const closeIconSpacing = 4;

export interface PopupCloseIconProps extends ExtractProps<typeof TertiaryButton, never> {}

const StyledCloseIcon = styled(TertiaryButton)<StyledType & PopupCloseIconProps>({
  position: 'absolute',
  right: closeIconSpacing,
  top: closeIconSpacing,
});

export const PopupCloseIcon = createSubcomponent('button')({
  displayName: 'Popup.CloseIcon',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseIconProps>(({children, ...elemProps}, Element) => {
  return <StyledCloseIcon as={Element} size="medium" icon={xIcon} {...elemProps} />;
});
