import * as React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';

export const Depth = () => (
  <>
    <Box depth="none" display="inline-block" margin="xxxs" padding="xs">
      Depth None
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
    <Box depth={5} display="inline-block" margin="xxxs" padding="xs">
      Depth 5
    </Box>
    <Box depth={6} display="inline-block" margin="xxxs" padding="xs">
      Depth 6
    </Box>
  </>
);
