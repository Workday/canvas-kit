import * as React from 'react';
import {Stack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const ShouldWrapChildren = () => (
  <Stack shouldWrapChildren spacing="xs" border="solid 2px" flexDirection="column">
    <Box border="solid 1px" padding="xs">
      First
    </Box>
    <Box border="solid 1px" padding="xs">
      Second
    </Box>
    <Box border="solid 1px" padding="xs">
      Third
    </Box>
    <Box marginTop="m" border="solid 1px" padding="xs">
      Fourth
    </Box>
  </Stack>
);
