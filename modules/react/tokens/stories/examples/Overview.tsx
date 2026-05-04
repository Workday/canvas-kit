import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  ...system.type.body.medium,
  boxShadow: system.depth[3],
  padding: system.padding.lg,
  borderRadius: system.shape.md,
  backgroundColor: system.color.accent.danger,
});

export const Overview = () => (
  <Flex>
    <div className={cardStyles}>Using Tokens To Style</div>
  </Flex>
);
