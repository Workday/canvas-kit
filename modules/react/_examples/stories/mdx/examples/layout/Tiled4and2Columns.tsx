import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: `
    'Heading Heading Heading Heading' 
    'FormTopHalfLeft FormTopHalfLeft FormQuarterLeft FormQuarterRight'
    'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight '
  `,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
  '> *:first-child': {
    paddingInline: system.padding.sm,
    border: `${px2rem(1)} solid ${system.color.brand.border.primary}`,
    gridArea: 'Heading',
  },
});

export const Tiled4and2Columns = () => (
  <Grid cs={gridStyles}>
    <Box>
      <Heading size="medium">4 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton area="FormTopHalfLeft" text="Form - Top Left Half" />
    <FormSkeleton area="FormQuarterLeft" text="Form - Left Quarter" />
    <FormSkeleton area="FormQuarterRight" text="Form - Right Quarter" />
    <FormSkeleton area="FormHalfLeft" text="Form - Left Half" />
    <FormSkeleton area="FormHalfRight" text="Form - Right Half" />
  </Grid>
);

const boxStencil = createStencil({
  vars: {
    area: '',
  },
  base: ({area}) => ({
    paddingInline: system.padding.md,
    border: `${px2rem(1)} dashed ${system.color.brand.border.primary}`,
    gridArea: area,
    p: {
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const innerGridStyles = createStyles({
  gridGap: system.gap.sm,
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

const FormSkeleton = ({area, text}) => (
  <Box cs={boxStencil({area})}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={innerGridStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
