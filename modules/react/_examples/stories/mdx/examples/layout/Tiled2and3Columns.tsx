import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: `
    'Heading Heading Heading Heading Heading Heading' 
    'FormThirdLeft FormThirdLeft FormThirdCenter FormThirdCenter FormThirdRight FormThirdRight'
    'FormHalfRight FormHalfRight FormHalfRight FormHalfLeft FormHalfLeft FormHalfLeft'
  `,
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
  '> *:first-child': {
    paddingInline: system.padding.sm,
    border: `${px2rem(1)} solid ${system.color.brand.border.primary}`,
    gridArea: 'Heading',
  },
});

export const Tiled2and3Columns = () => (
  <Grid cs={gridStyles}>
    <Box>
      <Heading size="medium">3 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton area="FormThirdLeft" text="Form - Left Third" />
    <FormSkeleton area="FormThirdCenter" text="Form - Center Third" />
    <FormSkeleton area="FormThirdRight" text="Form - Right Third" />
    <FormSkeleton area="FormHalfRight" text="Form - Left Half" />
    <FormSkeleton area="FormHalfLeft" text="Form - Right Half" />
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
  marginBlockEnd: system.gap.xl,
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
    <BodyText size="small">{text}</BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={innerGridStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
