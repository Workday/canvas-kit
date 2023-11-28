import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Base} from './Base';

const headingStyles = createStyles({
  ...system.type.body.small,
  color: base.blackPepper400,
  gridColumn: '2',
  fontWeight: 700, // should use system.fontWeight.bold
});

export const Heading = createComponent('div')({
  displayName: 'Heading',
  Component: (props, ref, Element) => {
    return <Base as={Element} ref={ref} cs={headingStyles} {...props} />;
  },
});
