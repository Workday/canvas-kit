import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Box, Flex} from '@workday/canvas-kit-labs-react';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  return (
    <Skeleton>
      <Flex alignItems="center">
        <Skeleton.Shape width={space.xl} height={space.xl} borderRadius={borderRadius.circle} />
        <Box flex={1} marginLeft="xs">
          <Skeleton.Header />
        </Box>
      </Flex>
      <Skeleton.Text />
    </Skeleton>
  );
};
