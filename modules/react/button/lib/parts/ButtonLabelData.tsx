import * as React from 'react';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface ButtonLabelDataProps extends BoxProps {}

const StyledLabelData = styled(Box.as('span'))<StyledType>({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: 400,
});

export const ButtonLabelData = createComponent('span')({
  displayName: 'ButtonLabelData',
  Component: ({children, ...elemProps}: ButtonLabelDataProps, ref, Element) => {
    return (
      <StyledLabelData as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledLabelData>
    );
  },
});
