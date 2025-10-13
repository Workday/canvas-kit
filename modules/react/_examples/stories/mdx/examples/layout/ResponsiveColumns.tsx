import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  container: createStencil({
    vars: {
      maxWidth: '',
    },
    base: ({maxWidth}) => ({
      maxWidth,
      border: '2px solid black',
      marginTop: system.space.x4,
      padding: system.space.x4,
    }),
  }),
  grid: createStyles({
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: system.space.x4,
    '> *': {
      height: px2rem(120),
    },
  }),
  box: createStencil({
    vars: {
      backgroundColor: '',
    },
    base: ({backgroundColor}) => ({
      backgroundColor,
    }),
  }),
};

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
      <Box cs={styles.container({maxWidth: screen})}>
        <Grid cs={styles.grid}>
          <Box cs={styles.box({backgroundColor: system.color.bg.primary.soft})} />
          <Box cs={styles.box({backgroundColor: system.color.bg.primary.default})} />
          <Box cs={styles.box({backgroundColor: system.color.bg.primary.strong})} />
          <Box cs={styles.box({backgroundColor: system.color.bg.primary.stronger})} />
        </Grid>
      </Box>
    </>
  );
};
