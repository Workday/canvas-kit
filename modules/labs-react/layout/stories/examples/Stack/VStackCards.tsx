import * as React from 'react';
import {VStack, Stack, Flex} from '@workday/canvas-kit-labs-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';

const Card = ({heading = '', body = ''}) => (
  <Flex flex={1} flexBasis="auto" depth={2} padding="s" backgroundColor="frenchVanilla100">
    <Stack flexDirection="column" spacing="xs">
      <h3 style={{...type.levels.heading.small, margin: 0}}>{heading}</h3>
      <span style={{...type.levels.body.small}}>{body}</span>
      <Flex>
        <TertiaryButton>Add to order</TertiaryButton>
      </Flex>
    </Stack>
  </Flex>
);

export const VStackCards = () => {
  return (
    <>
      <VStack spacing="s" backgroundColor="soap100" padding="s">
        <Card heading="Diavola" body="sauce, smoked mozzarella, pepperoni, basil, chili flake" />
        <Card
          heading="Four Cheese"
          body="mozzarella, gorgonzola, smoked mozzarella, parmesan, garlic oil "
        />
        <Card
          heading="Veggie"
          body="sauce, mozzarella, artichokes, roasted red peppers, broccolini"
        />
      </VStack>
    </>
  );
};
