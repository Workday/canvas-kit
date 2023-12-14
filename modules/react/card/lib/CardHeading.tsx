import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, CSProps} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface CardHeadingProps extends CSProps, BoxProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;

  children?: React.ReactNode;
}

const cardHeadingBaseStyles = createStyles({
  ...system.type.body.large,
  color: base.blackPepper400,
  fontWeight: system.fontWeight.bold,
  marginBottom: system.space.x6,
  marginTop: 0,
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    // TODO: This needs to wait on the Text component refactor to be backwards-compatible.
    return (
      <Text
        ref={ref}
        as={Element}
        {...elemProps}
        {...mergeStyles(elemProps, cardHeadingBaseStyles)}
      >
        {children}
      </Text>
    );
  },
});
