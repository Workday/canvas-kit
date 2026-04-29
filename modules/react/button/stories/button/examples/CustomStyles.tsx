import {PrimaryButton, PrimaryButtonProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const customContainer = createStyles({
  gap: system.gap.md,
  maxWidth: 'max-content',
});

const myButtonStencil = createStencil({
  base: {
    [buttonStencil.vars.background]: base.green100,
    [buttonStencil.vars.label]: base.green700,
    [systemIconStencil.vars.color]: base.green700,
    [buttonStencil.vars.borderRadius]: px2rem(2),
    border: `${px2rem(3)} solid transparent`,
    '&:focus-visible': {
      [buttonStencil.vars.background]: base.green700,
      [buttonStencil.vars.boxShadowInner]: base.green100,
      [buttonStencil.vars.boxShadowOuter]: base.green700,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
    '&:hover': {
      [buttonStencil.vars.background]: base.green600,
      border: `${px2rem(3)} dotted ${base.green700}`,
      [systemIconStencil.vars.color]: base.green700,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
    '&:active': {
      [buttonStencil.vars.background]: base.green700,
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
  padding: system.padding.md,
  textTransform: 'uppercase',
  [buttonStencil.vars.background]: base.slate200,
  [buttonStencil.vars.label]: base.slate700,
  [systemIconStencil.vars.color]: base.slate700,
  [buttonStencil.vars.borderRadius]: system.shape.md,
  [buttonStencil.vars.border]: base.slate800,
  '&:focus-visible': {
    [buttonStencil.vars.background]: base.slate700,
    [buttonStencil.vars.boxShadowInner]: base.slate200,
    [buttonStencil.vars.boxShadowOuter]: base.slate700,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
  },
  '&:hover': {
    [buttonStencil.vars.background]: base.slate600,
    [buttonStencil.vars.border]: `${px2rem(3)} dotted ${base.slate700}`,
    [systemIconStencil.vars.color]: base.slate700,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
    border: `${px2rem(3)} dotted ${base.slate700}`,
  },
  '&:active': {
    [buttonStencil.vars.background]: base.slate700,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
  },
});

const customColors = {
  default: {
    background: base.amber100,
    icon: base.amber500,
    label: base.amber500,
  },
  focus: {
    background: base.amber500,
    boxShadowInner: base.amber100,
    boxShadowOuter: base.amber500,
  },
  hover: {
    background: base.amber400,
    icon: system.color.fg.inverse,
  },
  active: {
    background: base.amber500,
  },
  disabled: {},
};

export const CustomStyles = () => (
  <Grid cs={customContainer}>
    <MyCustomButton icon={plusIcon}>Styling Override Via Stencil Variables</MyCustomButton>
    <MyCustomButton icon={plusIcon} cs={myCustomStyles}>
      Style Override Via Create Styles
    </MyCustomButton>
    <PrimaryButton icon={plusIcon} colors={customColors}>
      Styling Override Via Colors Prop
    </PrimaryButton>
  </Grid>
);
