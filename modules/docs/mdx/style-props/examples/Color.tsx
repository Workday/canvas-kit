import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Color = () => (
  <div>
    <Box backgroundColor="cinnamon300" color="blackPepper500" {...baseStyles}>
      Cinnamon 300
    </Box>
    <Box backgroundColor="sourLemon300" color="blackPepper500" {...baseStyles}>
      Sour Lemon 300
    </Box>
    <Box backgroundColor="blueberry300" color="blackPepper500" {...baseStyles}>
      Blueberry 300
    </Box>
  </div>
);
