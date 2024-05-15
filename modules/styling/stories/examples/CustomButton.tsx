import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {createComponent} from '@workday/canvas-kit-react/common';
import {buttonStencil, BaseButtonProps} from '@workday/canvas-kit-react/button';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Grid} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

const myButtonStencil = createStencil({
  extends: buttonStencil,
  base: ({background, borderRadius, label}) => ({
    [background]: system.color.static.green.soft,
    [label]: system.color.static.green.strong,
    [systemIconStencil.vars.color]: system.color.static.green.strong,
    [borderRadius]: system.shape.half,
    border: `3px solid transparent`,
    width: 'fit-content',
    '&:hover': {
      border: `3px dotted ${system.color.static.green.strong}`,
      [systemIconStencil.vars.color]: system.color.static.green.strong,
    },
    '&:active': {
      [background]: system.color.static.green.strong,
      [label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
  }),
});

const MyButton = createComponent('button')({
  Component: ({children, size, ...elemProps}: BaseButtonProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, myButtonStencil({size}))}>
      {children}
    </Element>
  ),
});

export const CustomButton = () => (
  <Grid gridGap={4} gridTemplateColumns="repeat(3, 1fr)" alignItems="center">
    <MyButton>
      <Text>My Button</Text>
      <SystemIcon icon={plusIcon} />
    </MyButton>
    <MyButton size="medium">
      <Text>Medium My Button</Text>
      <SystemIcon icon={plusIcon} />
    </MyButton>
    <MyButton size="large">
      <Text>Large My Button</Text>
      <SystemIcon icon={plusIcon} />
    </MyButton>
  </Grid>
);
