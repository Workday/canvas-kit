import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  grid: createStyles({
    gridTemplateColumns: '4fr 2fr 6fr',
    gridGap: system.space.x6,
    '> *': {
      height: '120px',
      textAlign: 'center',
    },
  }),
  width4: createStyles({
    gridColumn: '4fr',
    backgroundColor: system.color.bg.primary.strong,
  }),
  width2: createStyles({
    gridColumn: '2fr',
    backgroundColor: system.color.bg.primary.stronger,
  }),
  width6: createStyles({
    gridColumn: '6fr',
    backgroundColor: system.color.bg.primary.default,
  }),
};

export const CustomColumnWidth = () => (
  <>
    <Heading size="medium">Custom Column Width</Heading>
    <Grid cs={styles.grid}>
      <Box cs={styles.width4}>
        <BodyText size="small" variant="inverse">
          4 column width
        </BodyText>
      </Box>
      <Box cs={styles.width2}>
        <BodyText size="small" variant="inverse">
          2 column width
        </BodyText>
      </Box>
      <Box cs={styles.width6}>
        <BodyText size="small" variant="inverse">
          6 column width
        </BodyText>
      </Box>
    </Grid>
  </>
);
