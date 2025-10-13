import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';

const styles = {
  grid: createStyles({
    gridTemplateAreas: `
      'Heading Heading Heading Heading' 
      'FormTopHalfLeft FormTopHalfLeft FormQuarterLeft FormQuarterRight' 
      'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight'
    `,
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'min-content',
    gridRowGap: system.space.x4,
    gridColumnGap: system.space.x20,
  }),
  heading: createStyles({
    gridArea: 'Heading',
    paddingInline: system.space.x4,
    border: `1px solid ${system.color.border.primary.default}`,
  }),
  skeleton: createStencil({
    vars: {
      gridArea: '',
    },
    base: ({gridArea}) => ({
      gridArea: gridArea,
      border: `1px dashed ${system.color.border.primary.default}`,
      paddingInline: system.space.x6,
      fontWeight: system.fontWeight.bold,
    }),
  }),
  cell: createStyles({
    gridGap: system.space.x4,
    marginBottom: system.space.x10,
  }),
  cellItem1: createStyles({
    backgroundColor: system.color.bg.alt.strong,
  }),
  cellItem2: createStyles({
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
    width: '100%',
    height: system.space.x10,
  }),
};

export const Tiled4and2Columns = () => (
  <Grid cs={styles.grid}>
    <Box cs={styles.heading}>
      <Heading size="medium">4 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton gridArea="FormTopHalfLeft" text="Form - Top Left Half" />
    <FormSkeleton gridArea="FormQuarterLeft" text="Form - Left Quarter" />
    <FormSkeleton gridArea="FormQuarterRight" text="Form - Right Quarter" />
    <FormSkeleton gridArea="FormHalfLeft" text="Form - Left Half" />
    <FormSkeleton gridArea="FormHalfRight" text="Form - Right Half" />
  </Grid>
);

const FormSkeleton = ({gridArea, text}) => (
  <Box cs={styles.skeleton({gridArea})}>
    <BodyText size="small">{text}</BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={styles.cell}>
        <Box cs={styles.cellItem1} />
        <Box cs={styles.cellItem2} />
      </Grid>
    ))}
  </Box>
);
