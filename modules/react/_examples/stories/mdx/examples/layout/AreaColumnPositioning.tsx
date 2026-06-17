import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    gridArea: '',
    backgroundColor: '',
  },
  base: ({backgroundColor, gridArea}) => ({
    height: px2rem(120),
    backgroundColor,
    gridArea,
    p: {
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
      textAlign: 'center',
    },
  }),
});

const headingStyles = createStyles({
  gridTemplateColumns: '4fr 8fr',
  gridTemplateAreas: "'header header' 'side main'",
  gridGap: system.gap.md,
});

export const AreaColumnPositioning = () => (
  <>
    <Heading size="medium">Area Column Positioning</Heading>
    <Grid cs={headingStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500, gridArea: 'header'})}>
        <BodyText size="small">"header" area</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600, gridArea: 'side'})}>
        <BodyText size="small">"side" area</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700, gridArea: 'main'})}>
        <BodyText size="small">"main" area</BodyText>
      </Box>
    </Grid>
  </>
);
