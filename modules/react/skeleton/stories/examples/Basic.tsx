import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  return (
    <Skeleton>
      <Flex cs={{alignItems: 'center'}}>
        <Skeleton.Shape
          cs={{width: system.size.md, height: system.size.md, borderRadius: system.shape.full}}
        />
        <Box cs={{flex: 1, marginLeft: calc.add(system.gap.sm, system.gap.xs)}}>
          <Skeleton.Header />
        </Box>
      </Flex>
      <Skeleton.Text />
    </Skeleton>
  );
};
