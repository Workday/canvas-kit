import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  border: 'dotted 2px',
  color: 'blackPepper500',
  display: 'inline-block',
  verticalAlign: 'bottom',
};

export const Space = () => (
  <div>
    <Box backgroundColor="cinnamon300" margin="xxs" padding="s" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Small
      </Box>
    </Box>
    <Box backgroundColor="sourLemon300" margin="xxs" padding="m" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Medium
      </Box>
    </Box>
    <Box backgroundColor="blueberry300" margin="xxs" padding="l" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Large
      </Box>
    </Box>
  </div>
);
