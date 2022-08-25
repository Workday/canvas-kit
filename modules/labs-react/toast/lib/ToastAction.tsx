import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps, space} from '@workday/canvas-kit-react';

export interface ToastActionProps extends HyperlinkProps {
  /**
   * attribute for the hyperlink URL
   */
  href: string;
}

const StyledHyperLink = styled(Hyperlink)<StyledType>({
  marginTop: space.xxxs,
  width: 'fit-content',
});

export const ToastAction = createComponent('a')({
  displayName: 'Toast.Action',
  Component: ({children, href, ...elemProps}: ToastActionProps, ref, Element) => {
    return (
      <StyledHyperLink ref={ref} href={href} as={Element} {...elemProps}>
        {children}
      </StyledHyperLink>
    );
  },
});
