import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {depth} from '@workday/canvas-kit-react/tokens';

export const Depth = () => {
  return (
    <Card heading="Title" depth={depth.inset}>
      No Padding
    </Card>
  );
};
