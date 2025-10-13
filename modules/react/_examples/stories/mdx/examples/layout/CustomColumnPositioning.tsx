import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  grid: createStyles({
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: system.space.x6,
    '> *': {
      height: '60px',
      textAlign: 'center',
    },
  }),
  span4: createStyles({
    gridColumn: 'span 4',
    backgroundColor: system.color.bg.primary.softest,
  }),
  span3: createStyles({
    gridColumn: 'span 3',
    backgroundColor: system.color.bg.primary.softer,
  }),
  span5: createStyles({
    gridColumn: 'span 5',
    backgroundColor: system.color.bg.primary.soft,
  }),
  spanFrom1To6: createStyles({
    gridColumn: '1 / 6',
    backgroundColor: system.color.bg.primary.default,
  }),
  spanFrom7To12: createStyles({
    gridColumn: '7 / 12',
    backgroundColor: system.color.bg.primary.strong,
  }),
  spanFrom2To10: createStyles({
    gridColumn: '2 / span 10',
    backgroundColor: system.color.bg.primary.stronger,
  }),
};

export const CustomColumnPositioning = () => (
  <>
    <Heading size="medium">Custom Column Positioning</Heading>
    <Grid cs={styles.grid}>
      <Box cs={styles.span4}>
        <BodyText size="small" textAlign="center">
          4 column width
        </BodyText>
      </Box>
      <Box cs={styles.span3}>
        <BodyText size="small" textAlign="center">
          3 column width
        </BodyText>
      </Box>
      <Box cs={styles.span5}>
        <BodyText size="small">5 column width</BodyText>
      </Box>
      <Box cs={styles.spanFrom1To6}>
        <BodyText size="small" variant="inverse">
          from 1st to 5th column position
        </BodyText>
      </Box>
      <Box cs={styles.spanFrom7To12}>
        <BodyText size="small" variant="inverse">
          from 7th to 11th column position
        </BodyText>
      </Box>
      <Box cs={styles.spanFrom2To10}>
        <BodyText size="small" variant="inverse">
          10 column width starting from 2nd column
        </BodyText>
      </Box>
    </Grid>
  </>
);
