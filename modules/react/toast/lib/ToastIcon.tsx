import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ToastIconProps extends Omit<SystemIconProps, 'colorHover'> {}

const toastIcon = createStencil({
  vars: {
    colorHover: '',
  },
  base: ({colorHover}) => ({
    alignSelf: 'start',
    margin: `${system.space.x4} ${system.space.x3}`,
    '&:hover': {
      [systemIconStencil.vars.color]: colorHover,
    },
  }),
});

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: ({color, ...elemProps}: ToastIconProps, ref, Element) => {
    return (
      <SystemIcon
        color={color}
        ref={ref}
        as={Element}
        {...mergeStyles(elemProps, toastIcon({colorHover: color}))}
      />
    );
  },
});
