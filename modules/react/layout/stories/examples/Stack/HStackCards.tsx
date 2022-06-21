import * as React from 'react';
import {HStack, Stack, Flex, Box} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {TypeBodyLevel, TypeHeadingLevel} from '@workday/canvas-kit-preview-react/type';

const Card = ({heading = '', body = ''}) => (
  <Flex flex={1} flexBasis="auto" depth={1} padding="s" backgroundColor="frenchVanilla100">
    <Stack flexDirection="column" spacing="xs">
      <TypeHeadingLevel as="h3" size="small" margin={0}>
        {heading}
      </TypeHeadingLevel>
      <Box maxWidth={240}>
        <TypeBodyLevel size="small" margin={0}>
          {body}
        </TypeBodyLevel>
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
