import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    height: px2rem(120),
    backgroundColor,
    p: {
      textAlign: 'center',
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const gridStyles = createStyles({
  gridTemplateColumns: '4fr 2fr 6fr',
  gridGap: system.gap.md,
});

export const CustomColumnWidth = () => (
  <>
    <Heading size="medium">Custom Column Width</Heading>
    <Grid cs={gridStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500})}>
        <BodyText size="small">4 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600})}>
        <BodyText size="small">2 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700})}>
        <BodyText size="small">6 column width</BodyText>
      </Box>
    </Grid>
  </>
);
