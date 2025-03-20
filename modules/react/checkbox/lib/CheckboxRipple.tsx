import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const checkboxRippleStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    boxShadow: 'none',
    height: calc.add(system.space.x4, px2rem(2)),
    width: calc.add(system.space.x4, px2rem(2)),
    transition: 'box-shadow 150ms ease-out',
    position: 'absolute',
    pointerEvents: 'none',
  },
});

export const CheckboxRipple = createComponent('span')({
  displayName: 'CheckboxRipple',
  Component: elemProps => {
    return <span {...checkboxRippleStencil()} />;
  },
});
