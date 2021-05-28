import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';

export const Depth = () => {
  return (
    <Card depth={4}>
      <Card.Heading>Title</Card.Heading>
      <Card.Body>Less depth</Card.Body>
    </Card>
  );
};
