import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {depth} from '@workday/canvas-kit-react/tokens';

export const Depth = () => {
  return (
    <Card depth={depth[1]}>
      <Card.Heading>Title</Card.Heading>
      <Card.Body>Less depth</Card.Body>
    </Card>
  );
};
