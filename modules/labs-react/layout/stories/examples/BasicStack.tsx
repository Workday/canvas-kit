import * as React from 'react';
import {Stack, Flex} from '@workday/canvas-kit-labs-react/layout';

export const BasicStack = () => (
  <Stack spacing="xs" border="solid 2px" flexDirection="column">
    <Flex border="solid 1px" padding="xs">
      One
    </Flex>
    <Flex border="solid 1px" padding="xs">
      Two
    </Flex>
    <Flex border="solid 1px" padding="xs">
      Three
    </Flex>
  </Stack>
);
