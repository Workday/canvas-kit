import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react';

import {ToastContent} from './ToastContent';
import {ToastClose} from './ToastClose';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';
import styled from '@emotion/styled';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  /**
   * Mode of the toast.
   * Noninteractive toasts do not contain any buttons.
   * Interactive toasts contain buttons user can click and take action.
   * @default 'noninteractive'
   */
  mode: 'noninteractive' | 'interactive';
  children: React.ReactNode;
}

const toastWidth = 360;

const ToastContainer = styled('div')({
  display: 'flex',
});

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: ({children, mode, ...elemProps}: ToastProps, ref, Element) => {
    return (
      <Popup.Card
        ref={ref}
        as={Element}
        width={toastWidth}
        padding="0"
        role={mode === 'interactive' ? 'dialog' : 'status'}
        aria-live={mode === 'interactive' ? 'off' : 'polite'}
        aria-atomic={mode === 'noninteractive'}
        {...elemProps}
      >
        <ToastContainer>{children}</ToastContainer>
      </Popup.Card>
    );
  },
  subComponents: {
    Content: ToastContent,
    Close: ToastClose,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
});
