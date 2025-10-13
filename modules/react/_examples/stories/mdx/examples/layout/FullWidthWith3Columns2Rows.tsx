import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const styles = {
  grid: createStyles({
    gridTemplateAreas: "'Heading Heading Heading'",
    gridColumn: 'repeat(3, 1fr)',
    gridAutoRows: 'min-content',
    gridRowGap: system.space.x4,
    gridColumnGap: system.space.x20,
  }),
  heading: createStyles({
    gridArea: 'Heading',
    paddingInline: system.space.x4,
    border: `1px solid ${system.color.border.primary.default}`,
  }),
  skeleton: createStyles({
    border: `1px dashed ${system.color.border.primary.default}`,
    paddingInline: system.space.x6,
    fontWeight: system.fontWeight.bold,
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
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
    width: '100%',
    height: system.space.x10,
  }),
};

export const FullWidthWith3Columns2Rows = () => (
  <Grid cs={styles.grid}>
    <Box cs={styles.heading}>
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

const FormSkeleton = props => (
  <Box cs={styles.skeleton} {...props}>
    <BodyText size="small">Form Block</BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={styles.cell}>
        <Box cs={styles.cellItem1} />
        <Box cs={styles.cellItem2} />
      </Grid>
    ))}
  </Box>
);
