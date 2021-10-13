import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {CanvasColor, space, SystemIcon} from '@workday/canvas-kit-react';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface ToastIconProps {
  icon: CanvasSystemIcon;
  iconColor?: CanvasColor | string;
}

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: space.s,
  alignSelf: 'start',
});

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: ({icon, iconColor}: ToastIconProps, ref, Element) => {
    return <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />;
  },
});
