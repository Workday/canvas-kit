import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';

export const NonSkeletonChildren = () => {
  return (
    <Skeleton>
      <div style={{marginBottom: 10}}>
        <Avatar size={Avatar.Size.l} />
      </div>
      <Skeleton.Text />
    </Skeleton>
  );
};
