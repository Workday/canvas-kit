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
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    borderRadius: system.shape.sm,
    boxSizing: 'border-box',
    display: 'flex',
    height: cssVar(base.size225, px2rem(18)),
    justifyContent: 'center',
    padding: `0 ${px2rem(2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: cssVar(base.size225, px2rem(18)),
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.default),
      },
    },
    error: {
      error: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: cssVar(system.color.brand.border.critical, brand.common.errorInner),
        [errorRingColorOuter]: 'transparent',
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        [errorRingColorInner]: cssVar(
          system.color.brand.focus.caution.inner,
          brand.common.alertInner
        ),
        [errorRingColorOuter]: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
      }),
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        backgroundColor: cssVar(system.color.surface.inverse, brand.error.lightest),
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'caution'},
      styles: {
        backgroundColor: cssVar(system.color.surface.inverse, brand.alert.lightest),
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
