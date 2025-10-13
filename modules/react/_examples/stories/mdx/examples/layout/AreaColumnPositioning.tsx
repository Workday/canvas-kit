import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  grid: createStyles({
    gridTemplateColumns: '4fr 8fr',
    gridTemplateAreas: "'header header' 'side main'",
    gridGap: 'm',
    '> *': {
      height: '120px',
    },
  }),
  header: createStyles({
    backgroundColor: system.color.bg.primary.default,
    gridArea: 'header',
  }),
  side: createStyles({
    backgroundColor: system.color.bg.primary.strong,
    gridArea: 'side',
  }),
  main: createStyles({
    backgroundColor: system.color.bg.primary.stronger,
    gridArea: 'main',
  }),
  text: createStyles({
    textAlign: 'center',
    color: system.color.text.inverse,
  }),
};

export const AreaColumnPositioning = () => (
  <>
    <Heading size="medium">Area Column Positioning</Heading>
    <Grid cs={styles.grid}>
      <Box cs={styles.header}>
        <BodyText size="small" cs={styles.text}>
          "header" area
        </BodyText>
      </Box>
      <Box cs={styles.side}>
        <BodyText size="small" cs={styles.text}>
          "side" area
        </BodyText>
      </Box>
      <Box cs={styles.main}>
        <BodyText size="small" cs={styles.text}>
          "main" area
        </BodyText>
      </Box>
    </Grid>
  </>
);
