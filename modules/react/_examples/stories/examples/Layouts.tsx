import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

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

export const ResponsiveColumns = () => {
  const [screen, setScreen] = React.useState('100%');

  return (
    <>
      <Heading size="medium">Responsive Columns</Heading>
      <BodyText size="small">Choose screen size to see changes</BodyText>
      <SegmentedControl initialValue={screen} onSelect={data => setScreen(data.id)}>
        <SegmentedControl.List aria-label="screen-size" marginBottom="l">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="75%">75%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="50%">50%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="25%">25%</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <Box maxWidth={screen} border="2px solid black" padding="s">
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gridGap="m">
          <Box height="120px" backgroundColor="blueberry300" />
          <Box height="120px" backgroundColor="blueberry400" />
          <Box height="120px" backgroundColor="blueberry500" />
          <Box height="120px" backgroundColor="blueberry600" />
        </Grid>
      </Box>
    </>
  );
};
