import * as React from 'react';

import {ErrorType, cornerShapeStencil, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface CheckBackgroundProps {
  children: React.ReactNode;
  error?: ErrorType;
  variant?: 'inverse';
}

export const checkboxBackgroundStencil = createStencil({
  extends: cornerShapeStencil,
  vars: {
    errorRingColorInner: '',
    errorRingColorOuter: '',
  },
  parts: {
    background: 'checkbox-background',
  },
  base: {
    alignItems: 'center',
    backgroundColor: system.color.surface.default,
    [cornerShapeStencil.vars.shape]: system.shape.xs,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    padding: `0 ${px2rem(2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    height: system.size.xxxs,
    width: system.size.xxxs,
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: system.color.surface.inverse,
      },
    },
    error: {
      error: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: system.color.brand.border.critical,
        [errorRingColorOuter]: system.color.brand.border.critical,
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: system.color.brand.focus.caution.inner,
        [errorRingColorOuter]: system.color.brand.border.caution,
      }),
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        backgroundColor: system.color.surface.inverse,
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'caution'},
      styles: {
        backgroundColor: system.color.surface.inverse,
      },
    },
  ],
});

export const CheckBackground = createComponent('div')({
  displayName: 'CheckBackground',
  Component: ({error, variant, children}: CheckBackgroundProps) => {
    return (
      <div
        {...checkboxBackgroundStencil.parts.background}
        {...checkboxBackgroundStencil({error, variant})}
      >
        {children}
      </div>
    );
  },
});
