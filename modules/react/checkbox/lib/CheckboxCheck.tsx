import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';

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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: cssVar(system.color.fg.inverse, brand.primary.accent),
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: cssVar(
          system.color.brand.fg.primary.default,
          brand.primary.base
        ),
        '& > div': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base),
        },
      },
    },
  },
});

const indeterminateBoxStencil = createStencil({
  base: {
    width: px2rem(10),
    height: calc.divide(system.space.x1, 2),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.fg.inverse, brand.primary.accent),
  },
  modifiers: {
    variant: {
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base),
      },
    },
  },
});

export const CheckboxCheck = createComponent('div')({
  displayName: 'CheckboxCheck',
  Component: ({checked, error, indeterminate, variant}: CheckboxCheckProps) => {
    return (
      <CheckBackground error={error} variant={variant}>
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
