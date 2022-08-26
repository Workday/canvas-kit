import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';

export interface ToastIconProps extends Omit<SystemIconProps, 'colorHover'> {}

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: (elemProps: ToastIconProps, ref, Element) => {
    return (
      <SystemIcon
        colorHover={elemProps.color}
        marginY="s"
        marginInlineEnd="xs"
        marginInlineStart="xs"
        alignSelf="start"
        ref={ref}
        as={Element}
        {...elemProps}
      />
    );
  },
});
