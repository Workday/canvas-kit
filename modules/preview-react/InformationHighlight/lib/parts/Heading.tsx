import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Base} from './Base';

const headingStyles = createStyles({
  ...system.type.body.small,
  color: base.blackPepper400,
  gridColumn: '2',
  fontWeight: system.fontWeight.bold,
  marginTop: system.space.zero,
  marginBottom: system.space.zero,
});

export const Heading = createComponent('h3')({
  displayName: 'Heading',
  Component: (props, ref, Element) => {
    return <Base as={Element} ref={ref} cs={headingStyles} {...props} />;
  },
});
