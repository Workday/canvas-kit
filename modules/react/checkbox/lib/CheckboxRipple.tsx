import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const checkboxRippleStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    boxShadow: `0 0 0 0 ${base.soap200}`,
    height: calc.add(system.space.x4, px2rem(2)),
    width: calc.add(system.space.x4, px2rem(2)),
    transition: 'box-shadow 150ms ease-out',
    position: 'absolute',
    pointerEvents: 'none',
  },
  modifiers: {
    variant: {
      inverse: {
        opacity: 0.4,
      },
    },
  },
});

export const CheckboxRipple = createComponent('span')({
  displayName: 'CheckboxRipple',
  Component: ({variant}: {variant?: 'inverse'}) => {
    return <span {...checkboxRippleStencil({variant})} />;
  },
});
