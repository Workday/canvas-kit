import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {createComponent} from '@workday/canvas-kit-react/common';
import {buttonStencil, PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Grid} from '@workday/canvas-kit-react/layout';

const myButtonStencil = createStencil({
  base: {
    [buttonStencil.vars.background]: system.color.static.green.soft,
    [buttonStencil.vars.label]: system.color.static.green.strong,
    [systemIconStencil.vars.color]: system.color.static.green.strong,
    [buttonStencil.vars.borderRadius]: system.shape.half,
    border: `${px2rem(3)} solid transparent`,
    width: 'fit-content',
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

const MyButton = createComponent('button')({
  Component: ({children, size, ...elemProps}: PrimaryButtonProps, ref, Element) => (
    <PrimaryButton ref={ref} {...handleCsProp(elemProps, myButtonStencil({size}))}>
      {children}
    </PrimaryButton>
  ),
});

export const CustomButton = () => (
  <Grid cs={{gap: px2rem(4), gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center'}}>
    <MyButton icon={plusIcon}>My Button</MyButton>
    <MyButton size="medium" icon={plusIcon} iconPosition="end">
      Medium My Button
    </MyButton>
    <MyButton size="large" icon={plusIcon}>
      Large My Button
    </MyButton>
  </Grid>
);
