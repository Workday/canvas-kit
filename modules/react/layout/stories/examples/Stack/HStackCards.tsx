import * as React from 'react';
import {HStack, Stack, Flex, Box} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

const Card = ({heading = '', body = ''}) => (
  <Flex flex={1} flexBasis="auto" depth={1} padding="s" backgroundColor="frenchVanilla100">
    <Stack flexDirection="column" spacing="xs">
      <Heading as="h3" size="small" margin={0}>
        {heading}
      </Heading>
      <Box maxWidth={240}>
        <BodyText size="small" margin={0}>
          {body}
        </BodyText>
      </Box>
      <Box>
        <TertiaryButton>Add to order</TertiaryButton>
      </Box>
    </Stack>
  </Flex>
);

export const HStackCards = () => {
  return (
    <HStack shouldWrapChildren spacing="s" backgroundColor="soap100" padding="s">
      <Card heading="Diavola" body="sauce, smoked mozzarella, pepperoni, basil, chili flake" />
      <Card
        heading="Four Cheese"
        body="mozzarella, gorgonzola, smoked mozzarella, parmesan, garlic oil "
      />
      <Card
        heading="Veggie"
        body="sauce, mozzarella, artichokes, roasted red peppers, broccolini"
      />
    </HStack>
  );
};
