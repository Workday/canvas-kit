import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    gridColumn: '',
    backgroundColor: '',
  },
  base: ({backgroundColor, gridColumn}) => ({
    height: system.size.xxl,
    backgroundColor,
    gridColumn,
    p: {
      textAlign: 'center',
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const gridStyles = createStyles({
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: system.gap.md,
});

export const CustomColumnPositioning = () => (
  <>
    <Heading size="medium">Custom Column Positioning</Heading>
    <Grid cs={gridStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500, gridColumn: 'span 4'})}>
        <BodyText size="small">4 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600, gridColumn: 'span 3'})}>
        <BodyText size="small">3 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700, gridColumn: 'span 5'})}>
        <BodyText size="small">5 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue800, gridColumn: '1 / 6'})}>
        <BodyText size="small">from 1st to 5th column position</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue900, gridColumn: '7 / 12'})}>
        <BodyText size="small">from 7th to 11th column position</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue950, gridColumn: '2 / span 10'})}>
        <BodyText size="small">10 column width starting from 2nd column</BodyText>
      </Box>
    </Grid>
  </>
);
