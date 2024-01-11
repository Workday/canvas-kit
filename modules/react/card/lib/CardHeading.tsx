import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface CardHeadingProps extends BoxProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;
  children?: React.ReactNode;
}

const cardHeadingBaseStyles = createStyles({
  fontWeight: system.fontWeight.bold,
  marginBottom: system.space.x6,
  marginTop: 0,
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <BodyText
        size="large"
        color="blackPepper400"
        fontWeight="bold"
        marginBottom="m"
        marginTop={0}
        ref={ref}
        as={Element}
        {...mergeStyles(elemProps, cardHeadingBaseStyles)}
      >
        {children}
      </BodyText>
    );
  },
});
