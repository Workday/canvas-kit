import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {space} from '@workday/canvas-kit-react/tokens';

export const Padding = () => {
  return (
    <Card padding={space.xs}>
      <Card.Heading>Canvas Supreme</Card.Heading>
      <Card.Body>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Card.Body>
    </Card>
  );
};
