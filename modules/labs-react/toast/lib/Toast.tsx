import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';

import {ToastCloseIcon} from './ToastCloseIcon';
import {ToastIcon} from './ToastIcon';
import {ToastMessage} from './ToastMessage';
import {ToastLink} from './ToastLink';
import {ToastBody} from './ToastBody';
import {useToastModel} from './hooks/useToastModel';

export interface ToastProps extends Omit<ExtractProps<typeof Popup.Card, never>, 'model'> {}

/**
 * `Toast` defines a container for all `Toast` subcomponents. `Toast` will render with the appropriate
 * ARIA attributes based on which `mode` is selected. It also accepts a `model` if you wish to provide
 * a specific `id`.
 *
 * `Toast` renders a {@link PopupCard Popup.Card} under the hood.
 */
export const Toast = createContainer('div')({
  displayName: 'Toast',
  modelHook: useToastModel,
  subComponents: {
    /**
     * `Toast.Body` defines a container for the contents of the `Toast`, including
     * {@link ToastMessage Toast.Message} and {@link ToastLink Toast.Link}.
     *
     * `Toast.Body` renders a {@link PopupBody Popup.Body} under the hood.
     */
    Body: ToastBody,
    /**
     * `Toast.Icon` renders a decorative icon for the `Toast`. When using `Toast.Icon`, be sure to
     * set a complementary `mode` to the `Toast`. For example, if the icon conveys an error, set the
     * `mode` to `'alert'`.
     *
     * `Toast.Icon` renders a {@link SystemIcon} under the hood.
     */
    Icon: ToastIcon,
    /**
     * `Toast.Message` defines a container for the message of the `Toast`. It accepts any
     * {@link React.ReactNode} as its children. `Toast.Message` is assigned a unique `id` so that it
     * may be read aloud by screen readers when the `Toast` `mode` is set to `dialog`.
     *
     * `Toast.Message` renders a {@link Box} under the hood.
     */
    Message: ToastMessage,
    /**
     * Use `Toast.Link` to provide an action in the `Toast`. `Toast.Link` should always be used in
     * conjunction with `dialog` `mode` to provide an accessible experience.
     *
     * `Toast.Link` renders a {@link Hyperlink} under the hood.
     */
    Link: ToastLink,
    /**
     * Use `Toast.CloseIcon` to provide a close button to dismiss the `Toast`.
     *
     * `Toast.Link` renders a {@link PopupCloseIcon Popup.CloseIcon} under the hood.
     */
    CloseIcon: ToastCloseIcon,
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
      width={360}
      padding="0"
      {...getAriaAttributes(model.state.mode)}
      {...elemProps}
    >
      <Flex>{children}</Flex>
    </Popup.Card>
  );
});
