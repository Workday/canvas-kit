import * as React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';

export const Font = () => (
  <>
    <Box fontSize={14} fontWeight="bold" border="1px solid black" margin="xxs" padding="s">
      Default font, 14px, medium weight
    </Box>
    <Box
      fontFamily="monospace"
      fontSize={12}
      fontWeight="bold"
      fontStyle="italic"
      border="1px solid black"
      margin="xxs"
      padding="s"
    >
      Monospace font, 12px, italic style
    </Box>
  </>
);
