import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

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
