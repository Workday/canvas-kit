import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';

const styles = {
  grid: createStyles({
    gridTemplateAreas: `
      'Heading Heading Heading Heading Heading Heading' 
      'FormThirdLeft FormThirdLeft FormThirdCenter FormThirdCenter FormThirdRight FormThirdRight' 
      'FormHalfRight FormHalfRight FormHalfRight FormHalfLeft FormHalfLeft FormHalfLeft'
    `,
    gridTemplateColumns: 'repeat(6, 1fr)',
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

export const Tiled2and3Columns = () => (
  <Grid cs={styles.grid}>
    <Box cs={styles.heading}>
      <Heading size="medium">3 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton gridArea="FormThirdLeft" text="Form - Left Third" />
    <FormSkeleton gridArea="FormThirdCenter" text="Form - Center Third" />
    <FormSkeleton gridArea="FormThirdRight" text="Form - Right Third" />
    <FormSkeleton gridArea="FormHalfRight" text="Form - Left Half" />
    <FormSkeleton gridArea="FormHalfLeft" text="Form - Right Half" />
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
