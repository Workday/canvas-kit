import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export const Color = () => {
  return (
    <Skeleton>
      <Flex alignItems="center">
        <Skeleton.Shape
          width={space.xl}
          height={space.xl}
          borderRadius={borderRadius.circle}
          backgroundColor={colors.berrySmoothie100}
        />
        <Box flex={1} marginLeft="xs">
          <Skeleton.Header backgroundColor={colors.cantaloupe100} />
        </Box>
      </Flex>
      <div>
        <Skeleton.Text backgroundColor={colors.fruitPunch100} />
      </div>
    </Skeleton>
  );
};
