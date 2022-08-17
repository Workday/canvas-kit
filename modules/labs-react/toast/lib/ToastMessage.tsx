import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface ToastMessageProps extends BoxProps {}

const StyledMessage = styled(Box)<StyledType>({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

export const ToastMessage = createComponent('div')({
  displayName: 'Toast.Message',
  Component: ({children, ...elemProps}: ToastMessageProps, ref, Element) => {
    return (
      <StyledMessage ref={ref} as={Element} {...elemProps}>
        {children}
      </StyledMessage>
    );
  },
});
