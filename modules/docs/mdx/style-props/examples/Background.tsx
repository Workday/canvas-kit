import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Background = () => {
  return (
    <div>
      <Box backgroundColor="cinnamon300" {...baseStyles}>
        Cinnamon 300
      </Box>
      <Box backgroundColor="sourLemon300" {...baseStyles}>
        Sour Lemon 300
      </Box>
      <Box backgroundColor="blueberry300" {...baseStyles}>
        Blueberry 300
      </Box>
    </div>
  );
};
