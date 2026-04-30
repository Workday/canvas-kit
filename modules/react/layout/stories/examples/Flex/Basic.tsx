import {Flex} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const baseStyles = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    color: system.color.fg.default,
    minHeight: system.size.xl,
    minWidth: system.size.sm,
    padding: system.gap.sm,
    textAlign: 'center',
    backgroundColor,
  }),
});

export const Basic = () => (
  <Flex cs={{columnGap: system.gap.sm}}>
    <Flex cs={{flexDirection: 'column', rowGap: system.gap.md, flex: 1}}>
      <Flex.Item cs={baseStyles({backgroundColor: base.amber400})}>1</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.green400})}>1</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.indigo400})}>1</Flex.Item>
    </Flex>
    <Flex cs={{flexDirection: 'column', rowGap: system.gap.md, flex: 2}}>
      <Flex.Item cs={baseStyles({backgroundColor: base.amber400})}>2</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.green400})}>2</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.indigo400})}>2</Flex.Item>
    </Flex>
    <Flex cs={{flexDirection: 'column', rowGap: system.gap.md, flex: 1}}>
      <Flex.Item cs={baseStyles({backgroundColor: base.amber400})}>1</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.green400})}>1</Flex.Item>
      <Flex.Item cs={baseStyles({backgroundColor: base.indigo400})}>1</Flex.Item>
    </Flex>
  </Flex>
);
