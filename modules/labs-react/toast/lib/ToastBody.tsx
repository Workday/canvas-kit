import React from 'react';

import {createComponent, ExtractProps, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Popup, type} from '@workday/canvas-kit-react';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

const StyledToastBody = styled(Popup.Body)<StyledType>({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  // TODO: Remove once Text props are available in v8
  ...type.levels.subtext.large,
});

export const ToastBody = createComponent('div')({
  displayName: 'Toast.Body',
  Component: ({children, ...elemProps}: ToastBodyProps, ref, Element) => {
    return (
      <StyledToastBody
        paddingInlineStart="xxxs"
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
