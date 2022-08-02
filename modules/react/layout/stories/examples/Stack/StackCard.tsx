import * as React from 'react';
import {Stack, Flex} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const StackCard = () => {
  return (
    <Flex backgroundColor="soap100" alignItems="flex-start" padding="s">
      <Flex depth={1} padding="s" backgroundColor="frenchVanilla100">
        <Stack flexDirection="column" spacing="xs">
          <Heading as="h3" size="small" margin={0}>
            Stack
          </Heading>
          <BodyText size="small" margin={0}>
            Stack provides a simple API for managing consistent space between elements in
            one-dimensional layouts. In this Card example, we are setting extra-small spacing the
            heading, body text, and button elements.
          </BodyText>
          <Flex>
            <TertiaryButton>Learn more</TertiaryButton>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};
