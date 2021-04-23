import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

export const Space = () => (
  <Box margin="l">
    <Box
      marginX="xxxs"
      paddingX="xs"
      paddingY="s"
      display="inline-block"
      border={`solid 1px ${colors.blackPepper400}`}
    >
      Space props using CanvasSpaceKeys
    </Box>
    <Box
      marginX={space.xxxs}
      paddingTop={space.s}
      paddingRight={spaceNumbers.xs}
      paddingBottom={spaceNumbers.s}
      paddingLeft={space.xs}
      display="inline-block"
      border={`solid 1px ${colors.blackPepper400}`}
    >
      Space props using space tokens
    </Box>
  </Box>
);
