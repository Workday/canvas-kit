import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';

export const Shape = () => {
  return (
    <Skeleton>
      <Skeleton.Shape width={64} height={64} borderRadius={32} />
    </Skeleton>
  );
};
