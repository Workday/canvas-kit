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
 * Toast is a compound component that has different modes based on its contents. The modes add the proper aria attributes for accessibility
 *
 * ```tsx
 * import { Toast } from "@workday/canvas-kit-react/toast";
 *
 * const MyToast = (props: CardProps) => (
 *    <Toast mode="dialog" aria-label="notifcation">
 *      <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
 *      <Toast.Body>
 *        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
 *        <Toast.Link href="#hreflink">Custom Link</Toast.Link>
 *      </Toast.Body>
 *      <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
 *    </Toast>
 * );
 *```
 */
export const Toast = createContainer('div')({
  displayName: 'Toast',
  modelHook: useToastModel,
  subComponents: {
    /**
     * `Toast.Body` should container `Toast.Message` and `Toast.Link`. This ensures proper styling and spacing between elements.
     *
     * ```tsx
     * <Toast.Body>
     *  <Toast.Message>Your workbook was successfully processed.</Toast.Message>
     *  <Toast.Link href="#hreflink">Custom Link</Toast.Link>
     * </Toast.Body>
     * ```
     */
    Body: ToastBody,
    /**
     * `Toast.CloseIcon` renders a {@link PopupCloseIcon}. You can pass an `onClick` when used with `Popper` to dismiss the `Toast`.
     */
    CloseIcon: ToastCloseIcon,
    /**
     * `ToastIcon` renders a `SystemIcon` where you have access to all styling properties from `SystemIcon`.
     */
    Icon: ToastIcon,
    /**
     * `Toast.Message` renders our `Subtext` component where you can style however way you'd like with style properties.
     * This component also has an `id` so that when the `Toast` has a prop of `mode="dialog"` the message is read out by screen readers.
     */
    Message: ToastMessage,
    /**
     * `Toast.Link` renders our `Hyperlink` component. If you need to link to more information, use this component.
     */
    Link: ToastLink,
  },
})<ToastProps>(({children, ...elemProps}, Element, model) => {
  const getAriaAttributes = (mode: string): React.HtmlHTMLAttributes<HTMLDivElement> => {
    switch (mode) {
      case 'dialog':
        return {
          'aria-describedby': model.state.id,
          // This is added by Popup.Card, so overwriting to remove it
          'aria-labelledby': undefined,
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
      as={Flex}
      width={360}
      padding="0"
      {...getAriaAttributes(model.state.mode)}
      flexDirection="row"
      gap="xxxs"
      {...elemProps}
    >
      {children}
    </Popup.Card>
  );
});
