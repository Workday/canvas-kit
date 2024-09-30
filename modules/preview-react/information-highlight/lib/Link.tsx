import * as React from 'react';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const linkStyles = createStyles({
  ...system.type.subtext.large,
  gridColumn: '2',
  justifySelf: 'start',
  color: `${cssVar(base.blueberry500)} !important`,
  fontWeight: 500, // should use system.fontWeight.bold
});

export const Link = createComponent('div')({
  displayName: 'Link',
  Component: (props, ref, Element) => {
    return <ExternalHyperlink as={Element} ref={ref} className={linkStyles} {...props} />;
  },
});
