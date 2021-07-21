import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';

export const Shape = () => {
  return (
    <Skeleton>
      <Skeleton.Shape width={space.xxl} height={space.xxl} borderRadius={borderRadius.circle} />
    </Skeleton>
  );
};
