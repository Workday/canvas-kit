import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  container: createStyles({
    columnCount: 3,
    columnGap: system.space.x3,
  }),
  card: createStyles({
    breakInside: 'avoid',
    border: `${px2rem(2)} dashed ${system.color.border.primary.default}`,
    padding: system.space.x4,
    marginBottom: system.space.x3,
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

export const Masonry = () => (
  <>
    <Heading size="medium">Masonry Layout</Heading>
    <Box cs={styles.container}>
      {Array.from({length: 8}).map((_, ind) => (
        <Box key={ind} cs={styles.card}>
          <Grid cs={styles.cell}>
            <Box cs={styles.cellItem1} />
            <Box cs={styles.cellItem2} />
          </Grid>
          {ind % 2 === 0 && (
            <Grid cs={styles.cell}>
              <Box cs={styles.cellItem1} />
              <Box cs={styles.cellItem2} />
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  </>
);
