import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

export interface ButtonProps extends BoxProps {}

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: ({children, ...elemProps}: ButtonProps, ref, Element) => {
    return (
      <Box as="button" ref={ref} {...elemProps}>
        {children}
      </Box>
    );
  },
});
