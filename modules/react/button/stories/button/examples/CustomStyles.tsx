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
    '&:focus-visible': {
      [buttonStencil.vars.background]: system.color.static.green.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.static.green.soft,
      [buttonStencil.vars.boxShadowOuter]: system.color.static.green.strong,
    },
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
  Component: ({children, cs, ...elemProps}: PrimaryButtonProps, ref, Element) => (
    <PrimaryButton as={Element} ref={ref} cs={[myButtonStencil(), cs]} {...elemProps}>
      {children}
    </PrimaryButton>
  ),
});

const myCustomStyles = createStyles({
  padding: system.space.x4,
  textTransform: 'uppercase',
});

const customColors = {
  default: {
    background: system.color.static.orange.soft,
    icon: system.color.static.orange.strong,
    label: system.color.static.orange.strong,
  },
  hover: {
    background: system.color.static.orange.default,
    icon: system.color.static.orange.strong,
  },
  active: {
    background: system.color.static.orange.strong,
  },
  focus: {
    background: system.color.static.orange.strong,
    boxShadowInner: system.color.static.orange.soft,
    boxShadowOuter: system.color.static.orange.strong,
  },
  disabled: {},
};

export const CustomStyles = () => (
  <Grid cs={{gap: px2rem(4), gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center'}}>
    <MyCustomButton icon={plusIcon}>Styling Override Via Stencil Variables</MyCustomButton>
    <PrimaryButton cs={myCustomStyles}>Style Override Via Create Styles</PrimaryButton>
    <PrimaryButton icon={plusIcon} colors={customColors}>
      Styling Override Via Colors Prop
    </PrimaryButton>
  </Grid>
);
