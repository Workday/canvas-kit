import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps, space} from '@workday/canvas-kit-react';

export interface ToastActionProps extends HyperlinkProps {}

const StyledHyperLink = styled(Hyperlink)<StyledType>({
  marginTop: space.xxxs,
});

export const ToastAction = createComponent('a')({
  displayName: 'Toast.Action',
  Component: ({children, ...elemProps}: ToastActionProps, ref, Element) => {
    return (
      <StyledHyperLink ref={ref} as={Element} {...elemProps}>
        {children}
      </StyledHyperLink>
    );
  },
});
