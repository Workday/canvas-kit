import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';

export interface ToastMessageProps {
  children: React.ReactNode;
}

const Message = styled('div')({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

export const ToastMessage = createComponent('div')({
  displayName: 'Toast.Message',
  Component: ({children}: ToastMessageProps, ref, Element) => {
    return <Message>{children}</Message>;
  },
});
