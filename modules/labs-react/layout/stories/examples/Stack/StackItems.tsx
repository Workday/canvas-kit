import * as React from 'react';
import {Stack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const StackItems = () => (
  <Stack spacing="xs" border="solid 2px" flexDirection="column">
    <Stack spacing="xs" flexDirection="row" border="solid 1px">
      <Stack.Item flex={1}>
        <Box border="solid 1px" padding="xs">
          One
        </Box>
      </Stack.Item>
      <Stack.Item flex={1}>
        <Box border="solid 1px" padding="xs">
          Two
        </Box>
      </Stack.Item>
      <Stack.Item flex={1}>
        <Box border="solid 1px" padding="xs">
          Three
        </Box>
      </Stack.Item>
    </Stack>
    <Box border="solid 1px" padding="xs">
      Four
    </Box>
    <Box border="solid 1px" padding="xs">
      Five
    </Box>
    <Box marginTop="m" border="solid 1px" padding="xs">
      Six
    </Box>
  </Stack>
);
