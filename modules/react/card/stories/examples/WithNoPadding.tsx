import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {space} from '@workday/canvas-kit-react/tokens';

export const WithNoPadding = () => {
  return (
    <Card heading="Title" padding={space.zero}>
      No Padding
    </Card>
  );
};
