import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {brand} from '@workday/canvas-tokens-web';
import {IndeterminateBox} from './IndeterminateBox';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {CheckBackground} from './CheckBackground';

const checkboxCheckStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    span: {
      marginLeft: '-6px',
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
  },
});

export const CheckboxCheck = createComponent('div')({
  displayName: 'CheckboxCheck',
  Component: ({
    variant,
    checked,
    indeterminate,
  }: {
    variant?: 'inverse';
    checked: boolean;
    indeterminate?: boolean;
  }) => {
    return (
      <CheckBackground>
        <div {...checkboxCheckStencil({checked, indeterminate})}>
          {indeterminate ? (
            <IndeterminateBox variant={variant} />
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
