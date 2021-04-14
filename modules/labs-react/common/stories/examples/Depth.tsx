import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

const boxStyles = {
  display: 'inline-block',
  margin: '4px',
  padding: '12px',
};

export const Depth = () => (
  <>
    <Box style={boxStyles} depth="inset">
      Depth Inset
    </Box>
    <Box style={boxStyles} depth={1}>
      Depth 1
    </Box>
    <Box style={boxStyles} depth={2}>
      Depth 2
    </Box>
    <Box style={boxStyles} depth={3}>
      Depth 3
    </Box>
    <Box style={boxStyles} depth={4}>
      Depth 4
    </Box>
  </>
);
