import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';

export interface CardHeadingProps extends BoxProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;

  children?: React.ReactNode;
}

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <BodyText
        ref={ref}
        size="large"
        fontWeight="bold"
        marginBottom="m"
        marginTop={0}
        as={Element}
        {...elemProps}
      >
        {children}
      </BodyText>
    );
  },
});
