import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';

import {
  createComponent,
  GrowthBehavior,
  cs,
  createVars,
  fallback,
  createModifiers,
  newTheme,
  cssVar,
} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {borderRadius, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions, TertiaryButtonSizes} from './types';

import {CanvasSystemIcon} from '@workday/design-assets-types';

type ButtonVariant =
  | 'primary'
  | 'primaryInverse'
  | 'secondary'
  | 'secondaryInverse'
  | 'tertiary'
  | 'tertiaryInverse';

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
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   */
  shouldMirrorIcon?: boolean;
  /**
   * Has three variants Primary, Secondary and Tertiary
   */
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface ButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

const ButtonVars = createVars('background', 'label', 'main');

export const ButtonStyles = cs({
  cursor: 'pointer',
  display: 'inline-flex',
  gap: space.xxs,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  paddingInline: space.m,
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
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: 0.4,
  },
  color: cssVar(newTheme.colors.neutral.contrast),
  '&:hover:active': {transitionDuration: '40ms'},
  '& span .wd-icon-fill': {
    transitionDuration: '40ms',
  },
});

export const ButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    primary: cs({
      color: cssVar(newTheme.colors.primary.contrast),
      backgroundColor: cssVar(newTheme.colors.primary.main),
      '&:hover': {
        backgroundColor: cssVar(newTheme.colors.primary.dark),
      },
      '&:focus-visible, &:active': {
        backgroundColor: cssVar(newTheme.colors.primary.darkest),
      },
      '& span .wd-icon-fill': {
        fill: cssVar(newTheme.colors.primary.contrast),
      },
    }),
    primaryInverse: cs({
      color: cssVar(newTheme.colors.heading),
      backgroundColor: cssVar(newTheme.colors.primary.contrast),
      '&:hover': {
        backgroundColor: cssVar(newTheme.colors.neutral.light),
        color: cssVar(newTheme.colors.primaryInverse.dark),
      },
      '&:focus-visible, &:active': {
        backgroundColor: cssVar(newTheme.colors.primaryInverse.darkest),
      },
      '& span .wd-icon-fill': {
        fill: cssVar(newTheme.colors.primaryInverse.contrast),
      },
    }),
    secondary: cs({
      color: cssVar(newTheme.colors.heading),
      backgroundColor: 'transparent',
      border: `1px solid ${cssVar(newTheme.colors.heading)}`,
      '&:hover': {
        backgroundColor: cssVar(newTheme.colors.heading),
        color: cssVar(newTheme.colors.primary.contrast),
        '& span .wd-icon-fill': {
          fill: cssVar(newTheme.colors.primary.contrast),
        },
      },
      '&:focus-visible, &:active': {
        backgroundColor: cssVar(newTheme.colors.heading),
      },
      '& span .wd-icon-fill': {
        fill: cssVar(newTheme.colors.heading),
      },
    }),
    secondaryInverse: cs({
      color: cssVar(newTheme.colors.heading),
      backgroundColor: 'transparent',
      border: `1px solid ${cssVar(newTheme.colors.heading)}`,
      '&:hover': {
        backgroundColor: cssVar(newTheme.colors.heading),
        color: cssVar(newTheme.colors.primary.contrast),
        '& span .wd-icon-fill': {
          fill: cssVar(newTheme.colors.primary.contrast),
        },
      },
      '&:focus-visible, &:active': {
        backgroundColor: cssVar(newTheme.colors.primary.darkest),
      },
      '& span .wd-icon-fill': {
        fill: cssVar(newTheme.colors.heading),
      },
    }),
    tertiary: cs({
      backgroundColor: cssVar(newTheme.colors.alert.dark),
    }),
    tertiaryInverse: cs({
      backgroundColor: cssVar(newTheme.colors.alert.dark),
    }),
  },
  size: {
    large: cs({
      ...type.levels.body.small,
      fontWeight: cssVar(newTheme.fontWeights.bold),
      height: '48px',
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.xl,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: `${spaceNumbers.xl / 2}rem`,
        paddingInlineEnd: space.m,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.m,
        paddingInlineEnd: `${spaceNumbers.xl / 2}rem`,
      },
    }),
    medium: cs({
      ...type.levels.subtext.large,
      height: space.xl,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.xl,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: `${spaceNumbers.xl / 2}rem`,
        paddingInlineEnd: space.m,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.m,
        paddingInlineEnd: `${spaceNumbers.xl / 2}rem`,
      },
    }),
    small: cs({
      ...type.levels.subtext.large,
      height: space.l,
      paddingInline: space.s,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.l,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.s,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.s,
        paddingInlineEnd: space.xs,
      },
    }),
    extraSmall: cs({
      ...type.levels.subtext.medium,
      fontWeight: cssVar(newTheme.fontWeights.bold),
      height: space.m,
      paddingInline: space.s,
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: space.m,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xxs,
      },
    }),
  },
});

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: (
    {
      children,
      colors,
      icon,
      iconPosition,
      shouldMirrorIcon,
      size = 'medium',
      variant,
      ...elemProps
    }: ButtonContainerProps,
    ref,
    Element
  ) => {
    return (
      <Box
        as={Element}
        className="foobar"
        cs={[
          ButtonStyles,
          ButtonModifiers({
            size: size,
            iconPosition: iconPosition,
            variant: variant,
          }),
        ]}
        type="button"
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {children && <Button.Label>{children}</Button.Label>}

        {icon && iconPosition === 'end' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </Box>
    );
  },
  subComponents: {
    Icon: ButtonLabelIcon,
    Label: ButtonLabel,
  },
});
