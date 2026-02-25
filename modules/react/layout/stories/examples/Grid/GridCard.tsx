import * as React from 'react';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const h3Styles = createStyles({
  ...system.type.body.lg,
  margin: 0,
  fontWeight: system.fontWeight.bold,
});

// temporary placeholder until type components are added to canvas-kit
const H3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={h3Styles} {...props} />
);

const bodyStyles = createStyles({
  ...system.type.body.sm,
  margin: 0,
});

const Body = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={bodyStyles} {...props} />
);

const containerStyles = createStyles({
  padding: system.padding.xl,
  backgroundColor: system.color.surface.info.default,
  borderRadius: system.shape.lg,
  boxShadow: system.depth[1],
  maxWidth: px2rem(600),
  gridTemplate: 'auto / auto',
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
});

export const GridCard = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  return (
    <Grid cs={containerStyles}>
      <H3>Learn about Grid {isComplete && '🥳'}</H3>
      <Box cs={{paddingBlock: system.padding.md}}>
        <Body>Complete this task when you have a functional understanding of Grid.</Body>
      </Box>
      <Grid cs={{gridTemplate: 'auto / 1fr auto', justifyItems: 'end'}}>
        <Box cs={{marginRight: system.gap.sm}}>
          <PrimaryButton onClick={() => setIsComplete(true)}>Complete</PrimaryButton>
        </Box>
        <SecondaryButton onClick={() => setIsComplete(false)}>Cancel</SecondaryButton>
      </Grid>
    </Grid>
  );
};
