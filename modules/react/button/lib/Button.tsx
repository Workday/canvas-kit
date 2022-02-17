import React from 'react';

import {ButtonLabelIconNew} from './parts/ButtonLabelIconNew';
import {ButtonLabelNew} from './parts/ButtonLabelNew';
import {ButtonLabelDataNew} from './parts/ButtonLabelDataNew';
import {ButtonContainerNew} from './parts/ButtonContainerNew';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

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
  subComponents: {
    Icon: ButtonLabelIconNew,
    Label: ButtonLabelNew,
    LabelData: ButtonLabelDataNew,
  },
});
