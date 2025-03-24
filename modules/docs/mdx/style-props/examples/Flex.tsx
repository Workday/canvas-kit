import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  minHeight: 'xl',
  minWidth: '2rem',
  padding: 'xs',
};

export const FlexExample = () => (
  <Flex columnGap="xs">
    <Flex flexDirection="column" rowGap="xs" flex={1}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
    <Flex flexDirection="column" rowGap="xs" flex={2}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
    </Flex>
    <Flex flexDirection="column" rowGap="xs" flex={1}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
  </Flex>
);
