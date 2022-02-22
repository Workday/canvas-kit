import React from 'react';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface ButtonLabelNewProps extends BoxProps {}

const StyledButtonLabelNew = styled(Box.as('span'))<StyledType>({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const ButtonLabelNew = createComponent('span')({
  displayName: 'ButtonLabelNew',
  Component: ({children, ...elemProps}: ButtonLabelNewProps, ref, Element) => {
    return (
      <StyledButtonLabelNew as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledButtonLabelNew>
    );
  },
});
