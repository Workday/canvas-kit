import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const ResponsiveColumns = () => {
  const [screen, setScreen] = React.useState('100%');

  return (
    <>
      <Heading size="medium">Responsive Columns</Heading>
      <BodyText size="small">Choose screen size to see changes</BodyText>
      <SegmentedControl initialValue={screen} onSelect={data => setScreen(data.id)}>
        <SegmentedControl.List aria-label="screen-size" cs={{marginBlockEnd: system.gap.lg}}>
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="75%">75%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="50%">50%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="25%">25%</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <Box
        cs={{
          maxWidth: screen,
          padding: system.padding.md,
          border: `${px2rem(2)} solid ${system.color.border.default}`,
        }}
      >
        <Grid
          cs={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: system.gap.md}}
        >
          <Box cs={{height: px2rem(120), backgroundColor: base.blue400}} />
          <Box cs={{height: px2rem(120), backgroundColor: base.blue500}} />
          <Box cs={{height: px2rem(120), backgroundColor: base.blue600}} />
        </Grid>
      </Box>
    </>
  );
};
