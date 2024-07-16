import React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

const toastCloseIcon = createStencil({
  base: {
    position: 'relative',
  },
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: (elemProps: ToastCloseIconProps, ref, Element) => {
    return (
      <Popup.CloseIcon
        as={Element}
        ref={ref}
        size="small"
        {...mergeStyles(elemProps, toastCloseIcon())}
      />
    );
  },
});
