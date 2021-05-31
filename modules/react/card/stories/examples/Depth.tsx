import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';

export const Depth = () => {
  return (
    <Card depth={1}>
      <Card.Heading>Title</Card.Heading>
      <Card.Body>Less depth</Card.Body>
    </Card>
  );
};
