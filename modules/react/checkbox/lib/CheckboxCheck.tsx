import {ErrorType, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {CheckBackground} from './CheckBackground';

interface CheckboxCheckProps {
  checked: boolean;
  error?: ErrorType;
  indeterminate?: boolean;
  variant?: 'inverse';
}

const checkboxCheckStencil = createStencil({
  base: {
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '100%',
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    span: {
      marginInlineStart: calc.negate(px2rem(5)),
      transition: 'margin 200ms ease',
    },
    opacity: system.opacity.zero,
    transform: 'scale(0.5)',
  },
  modifiers: {
    checked: {
      true: {
        [systemIconStencil.vars.color]: system.color.fg.inverse,
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
        [systemIconStencil.vars.color]: system.legacy.color.brand.accent.primary,

        '& > div': {
          backgroundColor: system.legacy.color.brand.accent.primary,
        },
      },
    },
  },
});

const indeterminateBoxStencil = createStencil({
  base: {
    width: px2rem(10),
    height: px2rem(2),
    backgroundColor: system.color.fg.inverse,
  },
  modifiers: {
    variant: {
      inverse: {
        backgroundColor: system.legacy.color.brand.accent.positive,
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
            <div {...indeterminateBoxStencil({variant})} />
          ) : (
            checked && <SystemIcon icon={checkSmallIcon} />
          )}
        </div>
      </CheckBackground>
    );
  },
});
