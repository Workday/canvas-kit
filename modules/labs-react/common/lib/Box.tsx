import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';

export interface BoxProps extends StyledType {
  children: React.ReactNode;
}

const StyledBox = styled('div')<BoxProps>({
  boxSizing: 'border-box',
});

export const Box = createComponent('div')<BoxProps>({
  displayName: 'Box',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <StyledBox as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledBox>
    );
  },
});
