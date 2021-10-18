import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {CanvasColor, space, SystemIcon} from '@workday/canvas-kit-react';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {ToastModel} from './useToastModel';

export interface ToastIconProps {
  model?: ToastModel;
  icon: CanvasSystemIcon;
  iconColor?: CanvasColor | string; // TODO: Fix
}

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: space.s,
  alignSelf: 'start',
});

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: ({model, icon, iconColor, ...elemProps}: ToastIconProps, ref, Element) => {
    return <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />;
  },
});
