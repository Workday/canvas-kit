import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-labs-react/common';

const boxStyles = {
  margin: '4px',
  padding: '12px',
};

export const Border = () => (
  <Box>
    <Box
      style={boxStyles}
      borderRadius="m"
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
    >
      Hello, border styles!
    </Box>
    <Box
      style={boxStyles}
      borderRadius="l"
      border={`solid 1px ${colors.blackPepper400}`}
      display="inline-block"
    >
      Hello, border styles!
    </Box>
    <Box
      style={boxStyles}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="blackPepper400"
      borderRadius="circle"
      display="inline-block"
    >
      Hello, border styles!
    </Box>
  </Box>
);
