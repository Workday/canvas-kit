import * as React from 'react';
import {Stack, Flex} from '@workday/canvas-kit-labs-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-preview-react/tokens';

export const StackCard = () => {
  return (
    <Flex backgroundColor="soap100" alignItems="flex-start" padding="s">
      <Flex depth={2} padding="s" backgroundColor="frenchVanilla100">
        <Stack flexDirection="column" spacing="xs">
          <h3 style={{...type.h3, margin: 0}}>Stack</h3>
          <span style={{...type.body}}>
            Stack provides a simple API for managing consistent space between elements in
            one-dimensional layouts. In this Card example, we are setting extra-small spacing the
            heading, body text, and button elements.
          </span>
          <Flex>
            <TertiaryButton>Learn more</TertiaryButton>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};
