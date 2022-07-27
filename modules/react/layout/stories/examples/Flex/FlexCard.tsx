import * as React from 'react';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';
// eslint-disable-next-line workday-custom-rules/restricted-imports
import {useBreakpointValues} from '@workday/canvas-kit-react/layout/lib/utils/res';

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
  const xsStyles = {
    backgroundColor: 'red',
    border: '10px solid green',
  };
  const smStyles = {
    backgroundColor: 'orange',
    border: '10px solid blue',
  };
  const mdStyles = {
    backgroundColor: 'yellow',
    border: '10px solid violet',
  };
  const lgStyles = {
    backgroundColor: 'green',
    border: '10px solid red',
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentColor = useBreakpointValues({
    xs: xsStyles,
    sm: smStyles,
    md: mdStyles,
    lg: lgStyles,
  });
  const [isComplete, setIsComplete] = React.useState(false);
  return (
    <Flex
      style={currentColor}
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
