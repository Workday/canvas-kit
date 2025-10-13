import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, createStencil, px2rem} from '@workday/canvas-kit-styling';

const styles = {
  grid: createStyles({
    gridTemplateAreas: "'Heading Heading Heading' 'FormLeft FormCenter FormRight'",
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
    width: px2rem(120),
    height: system.space.x4,
  }),
  cellItem2: createStyles({
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    borderColor: system.color.border.input.default,
    width: '100%',
    height: system.space.x10,
  }),
};

export const FullWidthWith3Columns = () => (
  <Grid cs={styles.grid}>
    <Box cs={styles.heading}>
      <Heading size="medium">Full Width With 3 Columns</Heading>
    </Box>
    <FormSkeleton gridArea="FormLeft" text="Form - Left Third" />
    <FormSkeleton gridArea="FormCenter" text="Form - Center Third" />
    <FormSkeleton gridArea="FormRight" text="Form - Right Third" />
  </Grid>
);

const FormSkeleton = ({gridArea, text}) => (
  <Box cs={styles.skeleton({gridArea})}>
    <BodyText size="small">{text}</BodyText>
    {Array.from({length: 5}).map(() => (
      <Grid cs={styles.cell}>
        <Box cs={styles.cellItem1} />
        <Box cs={styles.cellItem2} />
      </Grid>
    ))}
  </Box>
);
