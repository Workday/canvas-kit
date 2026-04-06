import * as React from 'react';
import {createComponent, ErrorType} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

interface CheckBackgroundProps {
  children: React.ReactNode;
  error?: ErrorType;
}

export const checkboxBackgroundStencil = createStencil({
  vars: {
    errorRingColorInner: '',
    errorRingColorOuter: '',
  },
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.half,
    display: 'flex',
    height: calc.add(system.space.x4, px2rem(2)),
    justifyContent: 'center',
    padding: `${system.space.zero} ${calc.divide(system.space.x1, 2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: calc.add(system.space.x4, px2rem(2)),
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
  },
  modifiers: {
    error: {
      error: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: brand.common.errorInner,
        [errorRingColorOuter]: 'transparent',
        backgroundColor: brand.error.lightest,
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: brand.common.alertInner,
        [errorRingColorOuter]: brand.common.alertOuter,
        backgroundColor: brand.alert.lightest,
      }),
    },
  },
});

export const CheckBackground = createComponent('div')({
  displayName: 'CheckBackground',
  Component: ({error, children}: CheckBackgroundProps) => {
    return <div {...checkboxBackgroundStencil({error})}>{children}</div>;
  },
});
