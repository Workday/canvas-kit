import React from 'react';

import {
  createComponent,
  ExtractProps,
  styled,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ToastModel} from './useToastModel';
import {Popup, space, ToastProps, type} from '@workday/canvas-kit-react';
import {ToastModelContext} from './Toast';

export type ToastContentProps = ExtractProps<typeof Popup.Card, never> & {
  model?: ToastModel;
  children: React.ReactNode;
};

const toastWidth = 360;

const ToastContentContainer = styled('div')<Pick<ToastProps, 'onClose'>>(
  {
    display: 'flex',
    alignItems: 'center',
    ...type.levels.subtext.large,
  },
  ({onClose}) => ({
    marginRight: onClose ? space.m : undefined,
  })
);

export const ToastContent = createComponent('div')({
  displayName: 'Toast.Content',
  Component: ({children, model, ...elemProps}: ToastContentProps, ref, Element) => {
    const {events} = useModelContext(ToastModelContext, model);
    const isInteractive = true;

    return (
      <Popup.Card
        ref={ref}
        as={Element}
        width={toastWidth}
        padding="s"
        role={isInteractive ? 'dialog' : 'status'}
        aria-live={isInteractive ? 'off' : 'polite'}
        aria-atomic={!isInteractive}
        {...elemProps}
      >
        {events?.close && (
          <Popup.CloseIcon aria-label="Close" onClick={events?.close} size="small" />
        )}
        <ToastContentContainer>{children}</ToastContentContainer>
      </Popup.Card>
    );
  },
});
