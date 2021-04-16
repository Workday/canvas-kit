import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {depth} from '@workday/canvas-kit-react/tokens';

export const Depth = () => {
  return (
    <Card depth={depth.inset}>
      <Card.Header>Title</Card.Header>
      <Card.Body>No Padding</Card.Body>
    </Card>
  );
};
