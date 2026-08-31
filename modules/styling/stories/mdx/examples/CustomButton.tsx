import {PrimaryButtonProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const myButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    [buttonStencil.vars.background]: base.green100,
    [buttonStencil.vars.label]: base.green700,
    [systemIconStencil.vars.color]: base.green700,
    [buttonStencil.vars.borderRadius]: px2rem(2),
    border: `${px2rem(3)} solid transparent`,
    width: 'fit-content',
    '&:hover': {
      [buttonStencil.vars.background]: base.green600,
      border: `${px2rem(3)} dotted ${base.green700}`,
      [systemIconStencil.vars.color]: base.green700,
    },
    '&:active': {
      [buttonStencil.vars.background]: base.green700,
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
  },
  modifiers: {
    size: {
      small: {
        padding: system.padding.md,
      },
      medium: {
        padding: system.padding.xl,
      },
      large: {
        padding: system.padding.xxl,
      },
    },
  },
});

const MyButton = createComponent('button')({
  Component: ({children, size, ...elemProps}: PrimaryButtonProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, myButtonStencil({size}))}>
      {children}
    </Element>
  ),
});

export const CustomButton = () => (
  <Grid cs={{gap: system.gap.xs, gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center'}}>
    <MyButton icon={plusIcon}>My Button</MyButton>
    <MyButton size="medium" icon={plusIcon} iconPosition="end">
      Medium My Button
    </MyButton>
    <MyButton size="large" icon={plusIcon}>
      Large My Button
    </MyButton>
  </Grid>
);
