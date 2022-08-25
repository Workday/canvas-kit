import React from 'react';

import {createComponent, ExtractProps, useUniqueId} from '@workday/canvas-kit-react/common';
import {Flex, Popup} from '@workday/canvas-kit-react';

import {ToastCloseIcon} from './ToastCloseIcon';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';
import {ToastBody} from './ToastBody';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  /**
   * Sets the mode of the toast.
   * Noninteractive toasts do not contain any buttons.
   * Interactive toasts contain buttons user can click and take action.
   * @default 'polite'
   */
  mode?: 'alert' | 'status' | 'dialog';
}

const toastWidth = 360;

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: ({children, mode = 'status', ...elemProps}: ToastProps, ref, Element) => {
    const randomDescribedbyID = useUniqueId();

    const getAriaAttributed = (mode: string): React.HtmlHTMLAttributes<HTMLDivElement> => {
      switch (mode) {
        case 'dialog':
          return {
            'aria-describedby': randomDescribedbyID,
            'aria-label': 'notification',
            role: 'dialog',
          };
        case 'alert':
          return {
            role: 'alert',
            'aria-live': 'assertive',
            'aria-atomic': true,
          };
        case 'status':
          return {
            role: 'status',
            'aria-live': 'polite',
            'aria-atomic': true,
          };
        default: {
          return {};
        }
      }
    };

    return (
      <Popup.Card
        ref={ref}
        as={Element}
        width={toastWidth}
        padding="0"
        {...getAriaAttributed(mode)}
        {...elemProps}
      >
        <Flex>{children}</Flex>
      </Popup.Card>
    );
  },
  subComponents: {
    Body: ToastBody,
    Close: ToastCloseIcon,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
});
