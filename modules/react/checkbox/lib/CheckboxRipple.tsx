import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const checkboxRippleStencil = createStencil({
  parts: {
    ripple: 'checkbox-ripple',
  },
  base: {
    borderRadius: system.shape.full,
    boxShadow: 'none',
    height: base.size225,
    width: base.size225,
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
