import {Box} from '@workday/canvas-kit-react/layout';

export const Text = () => (
  <Box padding="m" border="solid 4px" borderColor="blueberry300" color="blackPepper500">
    <Box as="h3" fontSize="large" fontWeight="bold" margin="zero">
      The Elements of Typographic Style
    </Box>
    <Box as="p" fontSize="medium" fontStyle="italic">
      "Typography is the craft of endowing human language with a durable visual form."
    </Box>
    <Box as="span" fontSize="small" fontWeight="bold" color="licorice300">
      ― Robert Bringhurst
    </Box>
  </Box>
);
