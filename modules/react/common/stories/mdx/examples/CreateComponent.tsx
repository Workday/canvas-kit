import React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

// Extend Heading Props and omitting size since we've added a default
interface CardHeadingProps extends Omit<ExtractProps<typeof Heading>, 'size'> {}
export const CardHeading = createComponent('h2')({
  displayName: 'CardHeading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <Heading size="medium" as={Element} ref={ref} {...elemProps}>
        {children}
      </Heading>
    );
  },
});

// Extend Box Props for customization
interface CardProps extends BoxProps {}
export const Card = createComponent('div')({
  displayName: 'Card',
  subComponents: {
    Heading: CardHeading,
  },
  Component: ({children, ...elemProps}: CardProps, ref, Element) => {
    return (
      <Box as={Element} {...elemProps} ref={ref}>
        {children}
      </Box>
    );
  },
});

export const CreateComponent = () => {
  return (
    <Card depth={2} border={`1px solid ${colors.soap400}`} padding="s" as="section">
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};
