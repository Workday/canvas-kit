import React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: ({...elemProps}: ToastCloseIconProps, ref, Element) => {
    return (
      <Popup.CloseIcon as={Element} ref={ref} size="small" position="relative" {...elemProps} />
    );
  },
});
