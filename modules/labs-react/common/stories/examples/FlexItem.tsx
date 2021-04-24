import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const FlexItem = () => (
  <Flex padding="xs">
    <Box flex={2} border="solid 1px" padding="xs" margin="xxxs">
      One
    </Box>
    <Box flex={2} border="solid 1px" padding="xs" margin="xxxs">
      Two
    </Box>
    <Box flex={1} border="solid 1px" padding="xs" margin="xxxs">
      Three
    </Box>
    <Box flex={1} order={-1} border="solid 1px" padding="xs" margin="xxxs">
      Zero
    </Box>
  </Flex>
);
