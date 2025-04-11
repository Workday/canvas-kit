import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  minHeight: 'xl',
  minWidth: '2rem',
  padding: 'xs',
};

export const FlexItem = () => (
  <Flex flexDirection="column" rowGap="xs">
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
    </Flex>
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
  </Flex>
);
