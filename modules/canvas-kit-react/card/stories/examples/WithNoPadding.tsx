import React from 'react';
import {Card} from '@workday/canvas-kit-react-card';
import {spacing} from '@workday/canvas-kit-react-core';

export const WithNoPadding = () => {
  return (
    <Card heading="Title" padding={spacing.zero}>
      No Padding
    </Card>
  );
};
