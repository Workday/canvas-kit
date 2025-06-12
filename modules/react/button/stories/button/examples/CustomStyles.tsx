import {buttonStencil, PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customContainer = createStyles({
  gap: system.space.x4,
  maxWidth: 'max-content',
});

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
      [systemIconStencil.vars.color]: system.color.icon.inverse,
    },
    '&:hover': {
      [buttonStencil.vars.background]: system.color.static.green.default,
      border: `${px2rem(3)} dotted ${system.color.static.green.strong}`,
      [systemIconStencil.vars.color]: system.color.static.green.strong,
      [systemIconStencil.vars.color]: system.color.icon.inverse,
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
  [buttonStencil.vars.background]: system.color.static.gray.soft,
  [buttonStencil.vars.label]: system.color.static.gray.strong,
  [systemIconStencil.vars.color]: system.color.static.gray.strong,
  [buttonStencil.vars.borderRadius]: system.shape.x2,
  [buttonStencil.vars.border]: system.color.static.gray.stronger,
  '&:focus-visible': {
    [buttonStencil.vars.background]: system.color.static.gray.strong,
    [buttonStencil.vars.boxShadowInner]: system.color.static.gray.soft,
    [buttonStencil.vars.boxShadowOuter]: system.color.static.gray.strong,
    [systemIconStencil.vars.color]: system.color.icon.inverse,
  },
  '&:hover': {
    [buttonStencil.vars.background]: system.color.static.gray.default,
    [buttonStencil.vars.border]: `${px2rem(3)} dotted ${system.color.static.gray.strong}`,
    [systemIconStencil.vars.color]: system.color.static.gray.strong,
    [systemIconStencil.vars.color]: system.color.icon.inverse,
    border: `${px2rem(3)} dotted ${system.color.static.gray.strong}`,
  },
  '&:active': {
    [buttonStencil.vars.background]: system.color.static.gray.strong,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
  },
});

const customColors = {
  default: {
    background: system.color.static.amber.soft,
    icon: system.color.static.amber.strong,
    label: system.color.static.amber.strong,
  },
  focus: {
    background: system.color.static.amber.strong,
    boxShadowInner: system.color.static.amber.soft,
    boxShadowOuter: system.color.static.amber.strong,
  },
  hover: {
    background: system.color.static.amber.default,
    icon: system.color.icon.inverse,
  },
  active: {
    background: system.color.static.amber.strong,
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
