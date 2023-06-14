import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

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
