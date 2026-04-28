import * as React from 'react';

import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

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
    borderRadius: system.legacy.shape.sm,
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
        [errorRingColorInner]: cssVar(
          system.legacy.color.brand.border.critical,
          brand.common.errorInner
        ),
        [errorRingColorOuter]: 'transparent',
        backgroundColor: cssVar(
          system.legacy.color.brand.surface.critical.default,
          brand.error.lightest
        ),
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: cssVar(
          system.legacy.color.brand.focus.caution.inner,
          brand.common.alertInner
        ),
        [errorRingColorOuter]: cssVar(
          system.legacy.color.brand.border.caution,
          brand.common.alertOuter
        ),
        backgroundColor: cssVar(
          system.legacy.color.brand.surface.caution.default,
          brand.alert.lightest
        ),
      }),
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        backgroundColor: cssVar(system.legacy.color.surface.inverse, brand.error.lightest),
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'caution'},
      styles: {
        backgroundColor: cssVar(system.legacy.color.surface.inverse, brand.alert.lightest),
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
