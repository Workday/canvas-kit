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
  mode?: 'polite' | 'assertive' | 'interactive';
}

const toastWidth = 360;

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: ({children, mode = 'polite', ...elemProps}: ToastProps, ref, Element) => {
    const randomDescribedbyID = useUniqueId();
    return (
      <Popup.Card
        ref={ref}
        as={Element}
        width={toastWidth}
        padding="0"
        aria-describedby={mode === 'interactive' ? randomDescribedbyID : undefined}
        aria-label={mode === 'interactive' ? 'notification' : undefined}
        role={mode === 'interactive' ? 'dialog' : mode === 'assertive' ? 'alert' : 'status'}
        aria-live={
          mode === 'interactive' ? undefined : mode === 'assertive' ? 'assertive' : 'polite'
        }
        aria-atomic={mode === 'polite'}
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
