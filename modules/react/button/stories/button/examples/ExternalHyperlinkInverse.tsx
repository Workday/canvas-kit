import React from 'react';

import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';

export const ExternalLinkInverse = () => (
  <Box backgroundColor="blueberry400" padding="s">
    <ExternalHyperlink href="https://workday.com" variant="inverse">
      Hyperlink
    </ExternalHyperlink>
  </Box>
);
