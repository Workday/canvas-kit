import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Base} from './Base';

const bodyStyles = createStyles({
  ...system.type.subtext.large,
  color: base.blackPepper300,
  gridColumn: '2',
  fontWeight: 400, // This is here to keep createStyle types from being angry
  margin: 0,
});

export const Body = createComponent('p')({
  displayName: 'Body',
  Component: (props, ref, Element) => {
    return <Base as={Element} ref={ref} cs={bodyStyles} {...props} />;
  },
});
