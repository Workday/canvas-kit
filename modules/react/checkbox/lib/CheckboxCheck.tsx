import * as React from 'react';
import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, calc, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {CheckBackground} from './CheckBackground';

interface CheckboxCheckProps {
  checked: boolean;
  error?: ErrorType;
  indeterminate?: boolean;
  variant?: 'inverse';
}

const checkboxCheckStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    span: {
      marginInlineStart: calc.negate(px2rem(6)),
      transition: 'margin 200ms ease',
    },
    opacity: system.opacity.zero,
    transform: 'scale(0.5)',
  },
  modifiers: {
    checked: {
      true: {
        [systemIconStencil.vars.color]: cssVar(brand.primary.accent, system.color.icon.inverse),
        opacity: system.opacity.full,
        transform: 'scale(1)',
      },
    },
    indeterminate: {
      true: {
        opacity: system.opacity.full,
        transform: 'scale(1)',
      },
    },
    variant: {
      inverse: {
        [systemIconStencil.vars.color]: cssVar(
          brand.primary.base,
          system.color.icon.primary.default
        ),
        '& > div': {
          backgroundColor: cssVar(brand.primary.base, system.color.bg.primary.default),
        },
      },
    },
  },
});

const indeterminateBoxStencil = createStencil({
  base: {
    width: px2rem(10),
    height: calc.divide(system.space.x1, 2),
    backgroundColor: cssVar(brand.primary.accent, system.color.bg.default),
  },
});

export const CheckboxCheck = createComponent('div')({
  displayName: 'CheckboxCheck',
  Component: ({checked, error, indeterminate, variant}: CheckboxCheckProps) => {
    return (
      <CheckBackground error={error}>
        <div {...checkboxCheckStencil({checked, indeterminate, variant})}>
          {indeterminate ? (
            <div {...indeterminateBoxStencil()} />
          ) : (
            checked && <SystemIcon icon={checkSmallIcon} />
          )}
        </div>
      </CheckBackground>
    );
  },
});
