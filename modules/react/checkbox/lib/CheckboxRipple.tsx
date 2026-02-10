import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const checkboxRippleStencil = createStencil({
  parts: {
    ripple: 'checkbox-ripple',
  },
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    boxShadow: 'none',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.sm, calc.add(system.space.x4, px2rem(2))),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.size.sm, calc.add(system.space.x4, px2rem(2))),
    transition: 'box-shadow 150ms ease-out',
    position: 'absolute',
    pointerEvents: 'none',
  },
});

export const CheckboxRipple = createComponent('span')({
  displayName: 'CheckboxRipple',
  Component: (elemProps: CSProps) => {
    return (
      <span
        {...handleCsProp(elemProps, checkboxRippleStencil())}
        {...checkboxRippleStencil.parts.ripple}
      />
    );
  },
});
