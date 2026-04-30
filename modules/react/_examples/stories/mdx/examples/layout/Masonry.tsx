import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  columnCount: 3,
  columnGap: system.gap.md,
});

const cardStyles = createStyles({
  breakInside: 'avoid',
  border: `${px2rem(2)} dashed ${system.color.brand.border.primary}`,
  marginBottom: system.gap.sm,
  padding: system.padding.md,
});

const gridStyles = createStyles({
  gridGap: system.gap.md,
  marginBottom: system.gap.xl,
  '> *:first-child': {
    width: px2rem(120),
    height: system.size.xxs,
    backgroundColor: system.color.surface.alt.default,
  },
  '> *:last-child': {
    border: `${px2rem(1)} solid ${system.color.border.default}`,
    width: '100%',
    height: system.size.xxs,
  },
});

export const Masonry = () => (
  <>
    <Heading size="medium">Masonry Layout</Heading>
    <Box cs={containerStyles}>
      {Array.from({length: 8}).map((_, ind) => (
        <Box key={ind} cs={cardStyles}>
          <Grid cs={gridStyles}>
            <Box />
            <Box />
          </Grid>
          {ind % 2 === 0 && (
            <Grid cs={gridStyles}>
              <Box />
              <Box />
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  </>
);
