import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const AreaColumnPositioning = () => (
  <>
    <Heading size="medium">Area Column Positioning</Heading>
    <Grid gridTemplateColumns="4fr 8fr" gridTemplateAreas="'header header' 'side main'" gridGap="m">
      <Box height="120px" backgroundColor="blueberry400" gridArea="header">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "header" area
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry500" gridArea="side">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "side" area
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry600" gridArea="main">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "main" area
        </BodyText>
      </Box>
    </Grid>
  </>
);
