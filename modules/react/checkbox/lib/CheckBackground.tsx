import * as React from 'react';

import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface CheckBackgroundProps {
  children: React.ReactNode;
  error?: ErrorType;
  variant?: 'inverse';
}

export const checkboxBackgroundStencil = createStencil({
  vars: {
    errorRingColorInner: '',
    errorRingColorOuter: '',
  },
  parts: {
    background: 'checkbox-background',
  },
  base: {
    alignItems: 'center',
    backgroundColor: system.legacy.color.surface.default,
    borderRadius: system.sana.shape.xs,
    cornerShape: 'superellipse(1.1)',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    padding: `0 ${px2rem(2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    height: system.legacy.size.xxxs,
    width: system.legacy.size.xxxs,
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: system.legacy.color.surface.inverse,
      },
    },
    error: {
      error: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: system.legacy.color.brand.border.critical,
        [errorRingColorOuter]: system.legacy.color.brand.border.critical,
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: system.legacy.color.brand.focus.caution.inner,
        [errorRingColorOuter]: system.legacy.color.brand.border.caution,
      }),
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        backgroundColor: system.legacy.color.surface.inverse,
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'caution'},
      styles: {
        backgroundColor: system.legacy.color.surface.inverse,
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
