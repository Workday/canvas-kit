import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps} from '@workday/canvas-kit-react/button';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ToastLinkProps extends HyperlinkProps {
  /**
   * attribute for the hyperlink URL
   */
  href: string;
}

const StyledHyperLink = styled(Hyperlink)<StyledType>({
  marginTop: space.xxxs,
});

export const ToastLink = createComponent('a')({
  displayName: 'Toast.Link',
  Component: ({children, href, ...elemProps}: ToastLinkProps, ref, Element) => {
    return (
      <StyledHyperLink ref={ref} href={href} as={Element} {...elemProps}>
        {children}
      </StyledHyperLink>
    );
  },
});
