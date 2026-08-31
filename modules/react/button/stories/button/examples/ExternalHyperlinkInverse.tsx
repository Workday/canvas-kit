import React from 'react';

import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  padding: system.padding.md,
  display: 'inline-flex',
  gap: system.gap.md,
});

export const ExternalLinkInverse = () => (
  <Box cs={parentContainerStyles}>
    <ExternalHyperlink
      href="https://workday.com"
      variant="inverse"
      iconLabel="Opens link in new window"
    >
      Hyperlink
    </ExternalHyperlink>
    <ExternalHyperlink
      href="https://workday.com"
      variant="inverse"
      linkType="standalone"
      iconLabel="Opens new window"
    >
      Hyperlink
    </ExternalHyperlink>
  </Box>
);
