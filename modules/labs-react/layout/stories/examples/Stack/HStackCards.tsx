import * as React from 'react';
import {HStack, Stack, Flex} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-preview-react/tokens';

const Card = ({heading = '', body = ''}) => (
  <Flex flex={1} flexBasis="auto" depth={2} padding="s" backgroundColor="frenchVanilla100">
    <Stack flexDirection="column" spacing="xs">
      <h3 style={{...type.h3, margin: 0}}>{heading}</h3>
      <Box maxWidth={240}>
        <p style={{...type.body, margin: 0}}>{body}</p>
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
