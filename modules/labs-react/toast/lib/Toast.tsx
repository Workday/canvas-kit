import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, Popup} from '@workday/canvas-kit-react';

import {ToastContent} from './ToastContent';
import {ToastCloseIcon} from './ToastCloseIcon';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  /**
   * Sets the mode of the toast.
   * Noninteractive toasts do not contain any buttons.
   * Interactive toasts contain buttons user can click and take action.
   * @default 'noninteractive'
   */
  mode?: 'noninteractive' | 'interactive';
  children: React.ReactNode;
}

const toastWidth = 360;

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: ({children, mode = 'noninteractive', ...elemProps}: ToastProps, ref, Element) => {
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
        <Flex>{children}</Flex>
      </Popup.Card>
    );
  },
  subComponents: {
    Content: ToastContent,
    CloseIcon: ToastCloseIcon,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
});
