import React from 'react';

import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps, space, type} from '@workday/canvas-kit-react';

export interface ToastActionProps extends HyperlinkProps {
  children: React.ReactNode;
}

const {color, ...subTextLargeStyles} = type.levels.subtext.large;

const StyledHyperLink = styled(Hyperlink)({
  ...subTextLargeStyles,
  display: 'block',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
  border: 'none',
  marginTop: space.xxxs,
});

export const ToastAction = createComponent('button')({
  displayName: 'Toast.Action',
  Component: ({children, ...elemProps}: ToastActionProps, ref, Element) => {
    return (
      <StyledHyperLink as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledHyperLink>
    );
  },
});
