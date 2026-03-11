import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {calc} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const Color = () => {
  return (
    <Skeleton>
      <Flex cs={{alignItems: 'center'}}>
        <Skeleton.Shape
          cs={{
            width: system.size.md,
            height: system.size.md,
            borderRadius: system.shape.full,
            backgroundColor: base.indigo50,
          }}
        />
        <Box cs={{flex: 1, marginLeft: calc.add(system.gap.sm, system.gap.xs)}}>
          <Skeleton.Header cs={{backgroundColor: base.amber50}} />
        </Box>
      </Flex>
      <div>
        <Skeleton.Text cs={{backgroundColor: base.red25}} />
      </div>
    </Skeleton>
  );
};
