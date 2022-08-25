import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, Popup} from '@workday/canvas-kit-react';

import {ToastCloseIcon} from './ToastCloseIcon';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastAction} from './ToastAction';
import {ToastBody} from './ToastBody';
import {useToastModel} from './hooks/useToastModel';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  /**
   * Sets the correct aria attributes for the Toast.
   * Alert toasts are used to convey urgency and important information. The `role` is set to `alert`
   * Status toasts are used to convey a message or a successful action. The `role` is set to `status`
   * Dialog toasts are used when there's an action to be taken. The `role` is set to `dialog`
   * @default 'polite'
   */
  mode?: 'alert' | 'status' | 'dialog';
}

const toastWidth = 360;

export const Toast = createContainer('div')({
  displayName: 'Toast',
  modelHook: useToastModel,
  subComponents: {
    Body: ToastBody,
    Close: ToastCloseIcon,
    Icon: ToastIcon,
    Message: ToastMessage,
    Action: ToastAction,
  },
})<ToastProps>(({children, mode = 'status', ...elemProps}, Element, model) => {
  const getAriaAttributes = (mode: string): React.HtmlHTMLAttributes<HTMLDivElement> => {
    switch (mode) {
      case 'dialog':
        return {
          'aria-describedby': model.state.id,
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
      as={Element}
      width={toastWidth}
      padding="0"
      {...getAriaAttributes(mode)}
      {...elemProps}
    >
      <Flex>{children}</Flex>
    </Popup.Card>
  );
});
