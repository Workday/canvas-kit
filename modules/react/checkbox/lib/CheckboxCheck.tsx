import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, createStyles, cssVar, calc, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {CheckBackground} from './CheckBackground';

interface CheckboxCheckProps {
  checked: boolean;
  error?: 'error' | 'alert';
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
    opacity: 0,
    transform: 'scale(0.5)',
  },
  modifiers: {
    checked: {
      true: {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    indeterminate: {
      true: {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    variant: {
      inverse: {
        '& > div': {
          backgroundColor: brand.primary.base,
        },
      },
    },
  },
});

const indeterminateBoxStyles = createStyles({
  width: calc.add(system.space.x2, px2rem(2)),
  height: calc.divide(system.space.x1, 2),
  backgroundColor: brand.primary.accent,
});

export const CheckboxCheck = createComponent('div')({
  displayName: 'CheckboxCheck',
  Component: ({checked, error, indeterminate, variant}: CheckboxCheckProps) => {
    return (
      <CheckBackground error={error}>
        <div {...checkboxCheckStencil({checked, indeterminate, variant})}>
          {indeterminate ? (
            <div className={indeterminateBoxStyles} />
          ) : (
            checked && (
              <SystemIcon
                icon={checkSmallIcon}
                color={
                  variant === 'inverse' ? cssVar(brand.primary.base) : cssVar(brand.primary.accent)
                }
              />
            )
          )}
        </div>
      </CheckBackground>
    );
  },
});
