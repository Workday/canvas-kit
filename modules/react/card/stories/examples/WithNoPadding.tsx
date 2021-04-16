import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {space} from '@workday/canvas-kit-react/tokens';

export const WithNoPadding = () => {
  return (
    <Card padding={space.zero}>
      <Card.Header>Title</Card.Header>
      <Card.Body>No Padding</Card.Body>
    </Card>
  );
};
