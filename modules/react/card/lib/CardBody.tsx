import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles, BoxProps} from '@workday/canvas-kit-react/layout';
import {createStyles, CSProps} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardBodyBaseStyles = createStyles({
  ...system.type.subtext.large,
  fontWeight: 400,
});

export interface CardBodyProps extends CSProps, BoxProps {}

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: CardBodyProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, cardBodyBaseStyles)}>
        {children}
      </Element>
    );
  },
});
