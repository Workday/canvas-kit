import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, Popup} from '@workday/canvas-kit-react';

import {ToastCloseIcon} from './ToastCloseIcon';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastLink} from './ToastLink';
import {ToastBody} from './ToastBody';
import {useToastModel} from './hooks/useToastModel';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {}

const toastWidth = 360;

export const Toast = createContainer('div')({
  displayName: 'Toast',
  modelHook: useToastModel,
  subComponents: {
    Body: ToastBody,
    Close: ToastCloseIcon,
    Icon: ToastIcon,
    Message: ToastMessage,
    Link: ToastLink,
  },
})<ToastProps>(({children, ...elemProps}, Element, model) => {
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
      {...getAriaAttributes(model.state.mode)}
      {...elemProps}
    >
      <Flex>{children}</Flex>
    </Popup.Card>
  );
});
