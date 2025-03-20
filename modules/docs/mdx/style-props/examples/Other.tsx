import {Box} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  padding: 'xs',
};

export const Other = () => (
  <Box>
    <Box
      backgroundColor="cinnamon300"
      cursor="grab"
      outline={`2px dashed ${colors.cinnamon300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Grab
    </Box>
    <Box
      backgroundColor="sourLemon300"
      cursor="text"
      outline={`2px dashed ${colors.sourLemon300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Text
    </Box>
    <Box
      backgroundColor="blueberry300"
      cursor="wait"
      outline={`2px dashed ${colors.blueberry300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Wait
    </Box>
  </Box>
);
