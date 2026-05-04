import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: "'Heading Heading Heading'",
  gridColumn: 'repeat(3, 1fr)',
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xl,
});

const headingStyles = createStyles({
  gridArea: 'Heading',
  paddingInline: system.padding.sm,
  border: `${px2rem(1)} solid ${system.color.brand.border.primary}`,
});

export const FullWidthWith3Columns2Rows = () => (
  <Grid cs={gridStyles}>
    <Box cs={headingStyles}>
      <Heading size="medium">Full Width With 3 Columns and 2 Rows</Heading>
    </Box>
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
  </Grid>
);

const boxStyles = createStyles({
  border: `${px2rem(1)} dashed ${system.color.brand.border.primary}`,
  paddingInline: system.padding.md,
});

const itemStyles = createStyles({
  gridGap: system.gap.md,
  marginBottom: system.gap.lg,
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

const FormSkeleton = props => (
  <Box cs={boxStyles} {...props}>
    <BodyText size="small" cs={{fontWeight: system.fontWeight.bold}}>
      Form Block
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={itemStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
