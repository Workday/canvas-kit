import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  margin: 'xxs',
  padding: 'xs',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const Layout = () => (
  <Flex alignItems="flex-end">
    <Flex
      backgroundColor="cinnamon300"
      display="inline-flex"
      height="xl"
      width="xxxl"
      {...baseStyles}
    >
      40 x 80
    </Flex>
    <Flex
      backgroundColor="sourLemon300"
      display="inline-flex"
      height="xxl"
      width="xxxl"
      {...baseStyles}
    >
      64 x 80
    </Flex>
    <Flex
      backgroundColor="blueberry300"
      display="inline-flex"
      height="xxxl"
      width="xxxl"
      {...baseStyles}
    >
      80 x 80
    </Flex>
  </Flex>
);
