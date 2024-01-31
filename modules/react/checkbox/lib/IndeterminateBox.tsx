import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const indeterminateBoxStencil = createStencil({
  base: {
    width: calc.add(system.space.x2, px2rem(2)),
    height: calc.divide(system.space.x1, 2),
    backgroundColor: brand.primary.accent,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: brand.primary.base,
      },
    },
  },
});

export const IndeterminateBox = createComponent('div')({
  displayName: 'IndeterminateBox',
  Component: ({variant}: {variant?: 'inverse'}) => {
    return <div {...indeterminateBoxStencil({variant})} />;
  },
});
