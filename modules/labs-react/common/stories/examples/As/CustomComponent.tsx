import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

const CustomButton = props => {
  return (
    <Box
      as="button"
      backgroundColor="frenchVanilla100"
      border="solid 1px"
      borderColor="blackPepper500"
      borderRadius="circle"
      paddingX="s"
      paddingY="xs"
      {...props}
    />
  );
};

export const AsPropCustomComponent = () => {
  const [complete, setComplete] = React.useState(false);
  return (
    <Box depth={4} padding="m" border="solid 1px" borderRadius="l">
      <h3>Objective</h3>
      <p>{complete ? '🥳' : '🧐'} Learn about Box</p>
      <Box
        as={CustomButton}
        onClick={() => setComplete(true)}
        backgroundColor="blackPepper500"
        color="frenchVanilla100"
      >
        Mark as Complete
      </Box>
      <Box as={CustomButton} onClick={() => setComplete(false)} marginInlineStart="xs">
        Mark as Incomplete
      </Box>
    </Box>
  );
};
