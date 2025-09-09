import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
  display: 'inline-flex',
  gap: system.space.x4,
});

export const LinkInverse = () => (
  <Box cs={parentContainerStyles}>
    <Hyperlink href="#hyperlink" variant="inverse">
      Hyperlink
    </Hyperlink>
    <Hyperlink href="#hyperlink" variant="standaloneInverse">
      Hyperlink
    </Hyperlink>
  </Box>
);
