import * as React from 'react';
import {createComponent, ErrorType} from '@workday/canvas-kit-react/common';
import {calc, createStencil, createVars, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

interface CheckBackgroundProps {
  children: React.ReactNode;
  error?: ErrorType;
}

export const checkboxStatusColorVars = createVars('inner', 'outer');

const checkboxBackgroundStencil = createStencil({
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.half,
    boxSizing: 'border-box',
    display: 'flex',
    height: calc.add(system.space.x4, px2rem(2)),
    justifyContent: 'center',
    padding: `${system.space.zero} ${calc.divide(system.space.x1, 2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: calc.add(system.space.x4, px2rem(2)),
    border: `${px2rem(1)} solid ${system.color.border.default}`,
  },
  modifiers: {
    error: {
      error: {
        [checkboxStatusColorVars.inner]: brand.error.base,
        [checkboxStatusColorVars.outer]: 'transparent',
      },
      alert: {
        [checkboxStatusColorVars.inner]: brand.alert.base,
        [checkboxStatusColorVars.outer]: brand.alert.darkest,
      },
    },
  },
});

export const CheckBackground = createComponent('div')({
  displayName: 'CheckBackground',
  Component: ({error, children}: CheckBackgroundProps) => {
    return <div {...checkboxBackgroundStencil({error})}>{children}</div>;
  },
});
