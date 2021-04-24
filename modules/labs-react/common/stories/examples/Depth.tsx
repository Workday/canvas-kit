import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Depth = () => (
  <>
    <Box depth="inset" display="inline-block" margin="xxxs" padding="xs">
      Depth Inset
    </Box>
    <Box depth={1} display="inline-block" margin="xxxs" padding="xs">
      Depth 1
    </Box>
    <Box depth={2} display="inline-block" margin="xxxs" padding="xs">
      Depth 2
    </Box>
    <Box depth={3} display="inline-block" margin="xxxs" padding="xs">
      Depth 3
    </Box>
    <Box depth={4} display="inline-block" margin="xxxs" padding="xs">
      Depth 4
    </Box>
  </>
);
