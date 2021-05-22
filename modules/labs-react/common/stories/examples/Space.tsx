import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

export const Space = () => (
  <Box margin="l">
    <Box
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
      marginX="xxxs"
      paddingX="xs"
      paddingY="s"
    >
      Space props using CanvasSpaceKeys
    </Box>
    <Box
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
      marginX={space.xxxs}
      paddingBottom={spaceNumbers.s}
      paddingInlineStart={space.xs}
      paddingInlineEnd={spaceNumbers.xs}
      paddingTop={space.s}
    >
      Space props using space tokens
    </Box>
  </Box>
);
