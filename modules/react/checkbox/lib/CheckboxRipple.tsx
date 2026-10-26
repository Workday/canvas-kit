import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const checkboxRippleStencil = createStencil({
  parts: {
    ripple: 'checkbox-ripple',
  },
  base: {
    borderRadius: system.legacy.shape.full,
    boxShadow: 'none',
    height: system.legacy.size.xxxs,
    width: system.legacy.size.xxxs,
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
