import React from 'react';

import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: base.blueberry400,
  padding: system.space.x4,
});

export const ExternalLinkInverse = () => (
  <Box cs={parentContainerStyles}>
    <ExternalHyperlink href="https://workday.com" variant="inverse">
      Hyperlink
    </ExternalHyperlink>
  </Box>
);
