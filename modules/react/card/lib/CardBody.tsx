import * as React from 'react';
import {type} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Box ref={ref} as={Element} {...type.levels.subtext.large} {...elemProps}>
        {children}
      </Box>
    );
  },
});
