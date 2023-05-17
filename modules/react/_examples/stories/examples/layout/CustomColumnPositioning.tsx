import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const CustomColumnPositioning = () => (
  <>
    <Heading size="medium">Custom Column Positioning</Heading>
    <Grid gridTemplateColumns="repeat(12, 1fr)" gridGap="m">
      <Box height="60px" gridColumn="span 4" backgroundColor="blueberry100">
        <BodyText size="small" textAlign="center">
          4 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="span 3" backgroundColor="blueberry200">
        <BodyText size="small" textAlign="center">
          3 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="span 5" backgroundColor="blueberry400">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          5 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="1 / 6" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          from 1st to 5th column position
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="7 / 12" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          from 7th to 11th column position
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="2 / span 10" backgroundColor="blueberry600">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          10 column width starting from 2nd column
        </BodyText>
      </Box>
    </Grid>
  </>
);
