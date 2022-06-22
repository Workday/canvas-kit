import * as React from 'react';
import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';

// temporary placeholder until type components are added to canvas-kit
const H3 = props => (
  <h3
    style={{
      ...type.levels.body.large,
      margin: 0,
      fontWeight: type.properties.fontWeights.bold,
    }}
    {...props}
  />
);

const Body = props => <p style={{...type.levels.body.small, margin: 0}} {...props} />;

export const GridCard = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  return (
    <Grid
      padding="m"
      depth={1}
      borderRadius="l"
      border="solid 1px"
      borderColor="soap400"
      maxWidth={600}
      gridTemplate="auto / auto"
    >
      <H3>Learn about Grid {isComplete && '🥳'}</H3>
      <Box paddingY="s">
        <Body>Complete this task when you have a functional understanding of Grid.</Body>
      </Box>
      <Grid gridTemplate="auto / 1fr auto" justifyItems="end">
        <Box marginRight="xxs">
          <PrimaryButton onClick={() => setIsComplete(true)}>Complete</PrimaryButton>
        </Box>
        <SecondaryButton onClick={() => setIsComplete(false)}>Cancel</SecondaryButton>
      </Grid>
      <Grid.Item>
        <div>Hello World</div>
      </Grid.Item>
    </Grid>
  );
};
