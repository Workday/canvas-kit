import * as React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

import {CardHeading} from './CardHeading';
import {CardBody} from './CardBody';

export interface CardProps extends BoxProps {
  /**
   * Children of the Card. Should contain a `<Card.Body>` and an optional `<Card.Heading>`
   */
  children?: React.ReactNode;
}

export const Card = createComponent('div')({
  displayName: 'Card',
  Component: ({children, ...elemProps}: CardProps, ref, Element) => {
    return (
      <Box
        ref={ref}
        as={Element}
        depth={2}
        padding="l"
        backgroundColor="frenchVanilla100"
        border={`1px solid ${colors.soap500}`}
        borderRadius="l"
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
  subComponents: {
    Heading: CardHeading,
    Body: CardBody,
  },
});
