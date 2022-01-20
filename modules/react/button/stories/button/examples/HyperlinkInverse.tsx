import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const LinkInverse = () => (
  <Box backgroundColor="blueberry400" padding="s">
    <Hyperlink href="#hyperlink" variant="inverse">
      Hyperlink
    </Hyperlink>
  </Box>
);
