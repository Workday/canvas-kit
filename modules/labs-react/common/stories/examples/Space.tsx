import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export const Space = () => (
  <>
    <Box
      padding="xs"
      margin="xl"
      marginBottom="m"
      display="inline-block"
      border={`solid 1px ${colors.blackPepper400}`}
    >
      Hello, Space!
    </Box>
    <Box
      display="inline-block"
      paddingX={space.xs}
      paddingY="l"
      border={`solid 1px ${colors.blackPepper400}`}
    >
      Hello, Space!
    </Box>
  </>
);
