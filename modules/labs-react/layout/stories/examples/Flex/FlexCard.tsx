import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {PrimaryButton, SecondaryButton, IconButton} from '@workday/canvas-kit-react/button';
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

export const FlexCard = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  return (
    <Flex
      flexDirection="column"
      padding="m"
      depth={1}
      borderRadius="l"
      border="solid 1px"
      borderColor="soap400"
      maxWidth={600}
    >
      <H3>Learn about Flex {isComplete && '🥳'}</H3>
      <Box paddingY="s">
        <Body>Complete this task when you have a functional understanding of Flex.</Body>
      </Box>
      <Flex justifyContent="flex-end">
        <Box marginRight="xxs">
          <PrimaryButton onClick={() => setIsComplete(true)}>Complete</PrimaryButton>
        </Box>
        <SecondaryButton onClick={() => setIsComplete(false)}>Cancel</SecondaryButton>
      </Flex>
    </Flex>
  );
};
