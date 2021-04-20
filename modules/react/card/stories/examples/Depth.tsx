import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {depth} from '@workday/canvas-kit-react/tokens';

export const Depth = () => {
  return (
    <Card depth={depth[1]}>
      <Card.Header>Title</Card.Header>
      <Card.Body>Less depth</Card.Body>
    </Card>
  );
};
