import React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const myStencil = createStencil({
  base: {
    maxWidth: px2rem(400),
    padding: system.space.zero,
    overflow: 'hidden',
  },
});

export const CSProp = () => {
  return (
    <Card cs={myStencil()}>
      <Card.Heading
        cs={{
          color: cssVar(system.color.text.inverse),
          background: cssVar(system.color.bg.primary.default),
          padding: cssVar(system.space.x3),
        }}
      >
        The Future of Styling
      </Card.Heading>
      <Card.Body cs={{padding: cssVar(system.space.x3)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas blandit consectetur.
        Nam in congue mauris. Ut non metus a arcu rutrum accumsan. Duis luctus, diam vitae iaculis
        semper, nibh nisl varius erat, vitae dapibus velit lacus blandit tellus. Aenean vestibulum
        porta lectus non mollis. Quisque in lacus vitae sem vulputate rutrum. Sed dapibus aliquam
        dui, eu aliquam purus egestas eu.
      </Card.Body>
    </Card>
  );
};
