import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {
  styled,
  createSubcomponent,
  StyledType,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {IconButton} from '@workday/canvas-kit-react/button';

import {usePopupCloseButton, usePopupModel} from './hooks';

const closeIconSpacing = 11;
const closeIconSpacingSmall = 9;

export interface PopupCloseIconProps extends ExtractProps<typeof IconButton, never> {}

const StyledCloseIcon = styled(IconButton)<StyledType & PopupCloseIconProps>(
  {
    position: 'absolute',
  },
  ({size}) => ({
    right: size === 'small' ? closeIconSpacingSmall : closeIconSpacing,
    top: size === 'small' ? closeIconSpacingSmall : closeIconSpacing,
  })
);

export const PopupCloseIcon = createSubcomponent('button')({
  displayName: 'Popup.CloseIcon',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseIconProps>(({size = 'medium', children, ...elemProps}, Element) => {
  return <StyledCloseIcon as={Element} variant="plain" size={size} icon={xIcon} {...elemProps} />;
});
