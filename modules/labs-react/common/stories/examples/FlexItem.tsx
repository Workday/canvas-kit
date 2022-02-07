import * as React from 'react';
import {Flex, Box} from '@workday/canvas-kit-react/layout';

export const FlexItem = () => (
  <Flex padding="xs">
    <Box flex={2} flexBasis="auto" border="solid 1px" padding="xs" margin="xxxs">
      One
    </Box>
    <Box flex={2} flexBasis="auto" border="solid 1px" padding="xs" margin="xxxs">
      Two
    </Box>
    <Box flex="1 1 auto" border="solid 1px" padding="xs" margin="xxxs">
      Three
    </Box>
    <Box flex="1 1 auto" order={-1} border="solid 1px" padding="xs" margin="xxxs">
      Zero
    </Box>
  </Flex>
);
