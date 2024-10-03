import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const buttonStyles = createStyles({
  ...system.type.subtext.medium,
  gridColumn: '2',
  justifySelf: 'start',
  color: `${cssVar(base.blackPepper400)} !important`,
  fontWeight: 500, // should use system.fontWeight.bold
});

export const Button = createComponent('div')({
  displayName: 'Button',
  Component: (props, ref, Element) => {
    return (
      <SecondaryButton
        as={Element}
        ref={ref}
        className={buttonStyles}
        {...props}
        size={'extraSmall'}
      />
    );
  },
});
