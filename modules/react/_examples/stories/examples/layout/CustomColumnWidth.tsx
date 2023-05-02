import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const CustomColumnWidth = () => (
  <>
    <Heading size="medium">Custom Column Width</Heading>
    <Grid gridTemplateColumns="4fr 2fr 6fr" gridGap="m">
      <Box height="120px" backgroundColor="blueberry400">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          4 column width
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          2 column width
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry600">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          6 column width
        </BodyText>
      </Box>
    </Grid>
  </>
);
