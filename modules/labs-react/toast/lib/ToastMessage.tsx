import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';

import {ToastModel} from './useToastModel';

export interface ToastMessageProps {
  model?: ToastModel;
  children: React.ReactNode;
}

const Message = styled('div')({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

export const ToastMessage = createComponent('div')({
  displayName: 'Toast.Message',
  Component: ({children, model, ...elemProps}: ToastMessageProps, ref, Element) => {
    return <Message>{children}</Message>;
  },
});
