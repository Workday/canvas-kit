import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';

import {cs, createVars, fallback, createModifiers, cssVar} from '@workday/canvas-kit-styling';
import {createComponent, GrowthBehavior, newTheme} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes} from './types';

export interface ButtonContainerProps extends Partial<SystemIconProps>, GrowthBehavior {
  /**
   * Override default colors of a button. The default will depend on the button type
   */
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in ToolbarIconButton
   */
  fillIcon?: boolean;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

const newType = {
  levels: {
    subtext: {
      large: cs({
        fontFamily: cssVar(newTheme.fontFamilies.default),
        /** 14px converted to base-16 rem (0.875rem)*/
        fontSize: cssVar(newTheme.fontSizes[14]),
        /** 20px converted to base-16 rem (1.25rem) */
        lineHeight: '1.25rem',
        /** 0.24px converted to base-16 rem (0.015rem) */
        letterSpacing: '0.015rem',
        fontWeight: cssVar(newTheme.fontWeights.regular),
        color: cssVar(newTheme.colors.body),
      }),
    },
  },
};

const baseButtonVars = createVars('background', 'label');

const baseButtonModifiers = createModifiers({
  size: {
    large: cs({
      fontSize: '1.5rem;',
      paddingInlineStart: space.l,
      paddingInlineEnd: space.l,
      '&.canvas-button-icon-only': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: 'm',
      },
      '&.canvas-button-icon-end': {
        paddingInlineEnd: space.m,
      },
    }),
    small: cs({
      fontSize: '0.8rem',
    }),
  },
});

const baseButtonStyles = cs(newType.levels.subtext.large, {
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  fontWeight: cssVar(newTheme.fontWeights.bold),
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  borderRadius: borderRadius.circle,
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  border: '1px solid transparent',
  background: fallback(baseButtonVars.background, 'red'),
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: 0.4,
  },
  color: fallback(baseButtonVars.label, 'black'),

  '&:hover:active': {transitionDuration: '40ms'},
});

export const BaseButton = createComponent('button')({
  displayName: 'Button',
  Component: ({children, colors, cs, ...elemProps}: ButtonContainerProps, ref, Element) => {
    return (
      <Box
        as={Element}
        className="foobar"
        cs={[
          baseButtonStyles,
          baseButtonVars({background: colors?.default.background, label: colors?.default.label}),
          baseButtonModifiers({
            size: 'large',
          }),
        ]}
        type="button"
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
  subComponents: {
    Icon: ButtonLabelIcon,
    Label: ButtonLabel,
  },
});
