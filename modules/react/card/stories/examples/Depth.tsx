import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardCustomDepth = createStyles({
  boxShadow: system.depth[2],
});

export const Depth = () => {
  return (
    <Card cs={cardCustomDepth}>
      <Card.Heading>Canvas Supreme</Card.Heading>
      <Card.Body>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Card.Body>
    </Card>
  );
};
