import * as React from 'react';

import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem, withCornerShape} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

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
    ...withCornerShape(system.legacy.shape.sm),
    boxSizing: 'border-box',
    display: 'flex',
    height: base.legacy.size225,
    justifyContent: 'center',
    padding: `0 ${px2rem(2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: base.legacy.size225,
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

        [errorRingColorOuter]: 'transparent',
        backgroundColor: system.legacy.color.brand.surface.critical.default,
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: system.legacy.color.brand.focus.caution.inner,

        [errorRingColorOuter]: system.legacy.color.brand.border.caution,

        backgroundColor: system.legacy.color.brand.surface.caution.default,
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
