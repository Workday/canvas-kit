import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const styles = createStyles({
  boxShadow: system.depth[2],
  border: `1px solid ${system.color.border.container}`,
  padding: system.space.x4,
});

export const CreateComponent = () => {
  return (
    <Card as="section" cs={styles}>
      <Card.Heading>Card Heading</Card.Heading>
    </Card>
  );
};
