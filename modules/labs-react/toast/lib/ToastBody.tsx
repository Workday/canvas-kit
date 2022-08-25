import React from 'react';

import {createComponent, ExtractProps, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Popup, space, type} from '@workday/canvas-kit-react';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

const StyledToastBody = styled(Popup.Body)<StyledType>({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  ...type.levels.subtext.large,
});

export const ToastBody = createComponent('div')({
  displayName: 'Toast.Content',
  Component: ({children, ...elemProps}: ToastBodyProps, ref, Element) => {
    return (
      <StyledToastBody
        paddingInlineStart="zero"
        paddingY="s"
        paddingInlineEnd="s"
        ref={ref}
        as={Element}
        {...elemProps}
      >
        {children}
      </StyledToastBody>
    );
  },
});
