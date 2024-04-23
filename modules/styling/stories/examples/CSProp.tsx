import React from 'react';

import {createStyles, createVars, cssVar} from '@workday/canvas-kit-styling';
import {Card} from '@workday/canvas-kit-react/card';

const myVars = createVars('backgroundColor', 'color');

const myStyles = createStyles({
  backgroundColor: myVars.backgroundColor,
  maxWidth: '30rem',
});

export const CSProp = () => {
  return (
    <Card cs={[myStyles, myVars({backgroundColor: '#1E2329', color: '#E0AAFF'})]}>
      <Card.Heading cs={{color: cssVar(myVars.color)}}>The Future of Styling</Card.Heading>
      <Card.Body cs={{color: '#fff'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas blandit consectetur.
        Nam in congue mauris. Ut non metus a arcu rutrum accumsan. Duis luctus, diam vitae iaculis
        semper, nibh nisl varius erat, vitae dapibus velit lacus blandit tellus. Aenean vestibulum
        porta lectus non mollis. Quisque in lacus vitae sem vulputate rutrum. Sed dapibus aliquam
        dui, eu aliquam purus egestas eu.
      </Card.Body>
    </Card>
  );
};
