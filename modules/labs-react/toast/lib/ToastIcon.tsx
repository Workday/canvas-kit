import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';

export interface ToastIconProps extends SystemIconProps {}

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: ({...elemProps}: ToastIconProps, ref, Element) => {
    return (
      <SystemIcon marginInlineEnd="s" alignSelf="start" ref={ref} as={Element} {...elemProps} />
    );
  },
});
