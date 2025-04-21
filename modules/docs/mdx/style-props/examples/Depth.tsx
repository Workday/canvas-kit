import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Depth = () => (
  <div>
    <Box backgroundColor="cinnamon300" depth={1} {...baseStyles}>
      Depth 1
    </Box>
    <Box backgroundColor="sourLemon300" depth={2} {...baseStyles}>
      Depth 2
    </Box>
    <Box backgroundColor="blueberry300" depth={3} {...baseStyles}>
      Depth 3
    </Box>
  </div>
);
