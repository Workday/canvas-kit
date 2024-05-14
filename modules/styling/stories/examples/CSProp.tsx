import React from 'react';

import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Card} from '@workday/canvas-kit-react/card';

const myStencil = createStencil({
  vars: {
    color: system.color.static.orange.default,
  },
  base: {
    maxWidth: px2rem(400),
    backgroundColor: system.color.bg.muted.strong,
  },
});

export const CSProp = () => {
  return (
    <Card cs={myStencil()}>
      <Card.Heading cs={{color: cssVar(myStencil.vars.color)}}>The Future of Styling</Card.Heading>
      <Card.Body cs={{color: cssVar(system.color.text.inverse)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas blandit consectetur.
        Nam in congue mauris. Ut non metus a arcu rutrum accumsan. Duis luctus, diam vitae iaculis
        semper, nibh nisl varius erat, vitae dapibus velit lacus blandit tellus. Aenean vestibulum
        porta lectus non mollis. Quisque in lacus vitae sem vulputate rutrum. Sed dapibus aliquam
        dui, eu aliquam purus egestas eu.
      </Card.Body>
    </Card>
  );
};
