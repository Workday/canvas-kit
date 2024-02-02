import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, createVars, px2rem, cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export const backgroundVars = createVars('inner', 'outer');

const checkboxBackgroundStyles = createStencil({
  base: {
    alignItems: 'center',
    backgroundColor: base.frenchVanilla100,
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
    border: `1px solid ${base.licorice200}`,
  },
  modifiers: {
    error: {
      error: {
        [backgroundVars.inner]: cssVar(brand.error.base, base.cinnamon500),
        [backgroundVars.outer]: 'transparent',
      },
      alert: {
        [backgroundVars.inner]: cssVar(brand.alert.base, base.cantaloupe600),
        [backgroundVars.outer]: cssVar(brand.alert.darkest, base.cantaloupe400),
      },
    },
  },
});

export const CheckBackground = createComponent('div')({
  displayName: 'CheckBackground',
  Component: ({error, ...elemProps}: any) => {
    return <div {...mergeStyles(elemProps, checkboxBackgroundStyles({error}))} />;
  },
});
