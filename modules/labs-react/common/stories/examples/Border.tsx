import * as React from 'react';
import {colors, borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Border = () => (
  <Box>
    <Box
      borderRadius="m"
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
      margin={space.xxxs}
      padding={space.xs}
    >
      Hello, border styles!
    </Box>
    <Box
      borderRadius={borderRadius.l}
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
      margin={space.xxxs}
      padding={space.xs}
    >
      Hello, border styles!
    </Box>
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor="blackPepper400"
      borderRadius="circle"
      display="inline-block"
      margin={space.xxxs}
      padding={space.xs}
    >
      Hello, border styles!
    </Box>
  </Box>
);
