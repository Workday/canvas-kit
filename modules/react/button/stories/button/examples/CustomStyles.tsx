import React from 'react';

import {buttonStencil, PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, createStyles, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const myButtonStencil = createStencil({
  base: {
    [buttonStencil.vars.background]: system.color.static.green.soft,
    [buttonStencil.vars.label]: system.color.static.green.strong,
    [systemIconStencil.vars.color]: system.color.static.green.strong,
    [buttonStencil.vars.borderRadius]: system.shape.half,
    border: `${px2rem(3)} solid transparent`,
    '&:hover': {
      [buttonStencil.vars.background]: system.color.static.green.default,
      border: `${px2rem(3)} dotted ${system.color.static.green.strong}`,
      [systemIconStencil.vars.color]: system.color.static.green.strong,
    },
    '&:active': {
      [buttonStencil.vars.background]: system.color.static.green.strong,
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
  },
});

const MyCustomButton = createComponent('button')({
  Component: ({children, size, ...elemProps}: PrimaryButtonProps, ref, Element) => (
    <PrimaryButton ref={ref} {...handleCsProp(elemProps, myButtonStencil({size}))}>
      {children}
    </PrimaryButton>
  ),
});

const myCustomStyles = createStyles({
  padding: system.space.x4,
  textTransform: 'uppercase',
});

export const CustomStyles = () => (
  <Grid cs={{gap: px2rem(4), gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center'}}>
    <MyCustomButton icon={plusIcon}>Styling Override Via Stencil Variables</MyCustomButton>
    <PrimaryButton cs={myCustomStyles}>Style Override Via Create Styles</PrimaryButton>
  </Grid>
);
