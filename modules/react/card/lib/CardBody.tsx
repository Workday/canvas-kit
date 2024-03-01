import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-react/layout';
import {Subtext} from '@workday/canvas-kit-react/text';

export interface CardBodyProps extends BoxProps {}

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: CardBodyProps, ref, Element) => {
    return (
      <Subtext size="large" ref={ref} as={Element} {...elemProps}>
        {children}
      </Subtext>
    );
  },
});
