import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper300',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Border = () => (
  <div>
    <Box borderRadius="m" border="solid 4px" borderColor="cinnamon300" {...baseStyles}>
      Cinnamon 300
    </Box>
    <Box borderRadius="m" border="solid 4px" borderColor="sourLemon300" {...baseStyles}>
      Sour Lemon 300
    </Box>
    <Box borderRadius="m" border="solid 4px" borderColor="blueberry300" {...baseStyles}>
      Blueberry 300
    </Box>
  </div>
);
