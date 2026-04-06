import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.alt.softer,
  padding: system.space.x4,
});

export const Borderless = () => {
  return (
    <div className={styles}>
      <Card variant="borderless">
        <Card.Heading>Canvas Supreme</Card.Heading>
        <Card.Body>
          Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
          onions, and oregano.
        </Card.Body>
      </Card>
    </div>
  );
};
