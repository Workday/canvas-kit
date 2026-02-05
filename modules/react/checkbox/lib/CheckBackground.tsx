import * as React from 'react';

import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.sm, system.shape.half),
    boxSizing: 'border-box',
    display: 'flex',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, px2rem(2))),
    justifyContent: 'center',
    padding: `${system.space.zero} ${calc.divide(system.space.x1, 2)}`,
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(base.size225, calc.add(system.space.x4, px2rem(2))),
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
  },
  modifiers: {
    variant: {
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.default),
      },
    },
    error: {
      error: ({errorRingColorInner, errorRingColorOuter}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [errorRingColorInner]: cssVar(system.color.brand.border.critical, brand.common.errorInner),
        [errorRingColorOuter]: 'transparent',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
      }),
      caution: ({errorRingColorInner, errorRingColorOuter}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [errorRingColorInner]: cssVar(
          system.color.brand.focus.caution.inner,
          brand.common.alertInner
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [errorRingColorOuter]: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
      }),
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.inverse, brand.error.lightest),
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'caution'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
