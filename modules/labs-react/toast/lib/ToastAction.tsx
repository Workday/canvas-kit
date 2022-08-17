import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps, space, type} from '@workday/canvas-kit-react';

export interface ToastActionProps extends HyperlinkProps {}

const {color, ...subTextLargeStyles} = type.levels.subtext.large;

const StyledHyperLink = styled(Hyperlink.as('button'))<StyledType>({
  ...subTextLargeStyles,
  display: 'block',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
  border: 'none',
  marginTop: space.xxxs,
});

// const ActionButton = (props: ActionButtonProps) => {
//   return <Hyperlink as="button" {...props} />;
// };

export const ToastAction = createComponent('button')({
  displayName: 'Toast.Action',
  Component: ({children, ...elemProps}: ToastActionProps, ref, Element) => {
    return (
      <StyledHyperLink ref={ref} as={Element} {...elemProps}>
        {children}
      </StyledHyperLink>
    );
  },
});
