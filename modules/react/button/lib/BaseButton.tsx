import * as React from 'react';

import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonLabel} from '../lib/parts/ButtonLabel';

import {createComponent, GrowthBehavior, focusRing} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  createStyles,
  createVars,
  createModifiers,
  createStencil,
  px2rem,
} from '@workday/canvas-kit-styling';
import {SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {system} from '@workday/canvas-tokens-web';
import {ButtonColors, ButtonSizes, IconPositions} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface ButtonContainerProps extends Partial<SystemIconProps>, GrowthBehavior {
  /**
   * Override default colors of a button. The default will depend on the button type
   */
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium
   */
  size?: ButtonSizes;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in ToolbarIconButton
   */
  fillIcon?: boolean;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   *
   * @default 'start'
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

/**
 * Temporary css variables to be used across all Buttons.
 */
export const buttonVars = {
  default: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  ),
  hover: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  ),
  active: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  ),
  focus: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  ),
  disabled: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  ),
};

/**
 * Base styles for Buttons.
 */
const baseButtonStyles = createStencil({
  base: {
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: '0.015rem',
    fontWeight: 'bold',
    backgroundColor: buttonVars.default.background,
    color: buttonVars.default.label,
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    gap: system.space.x2,
    borderColor: buttonVars.default.border,
    cursor: 'pointer',
    display: 'inline-flex',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    outline: `${px2rem(2)} transparent`,
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    borderRadius: buttonVars.default.borderRadius,
    position: 'relative',
    verticalAlign: 'middle',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: buttonVars.default.icon,
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:disabled, &:disabled:active, &.disabled': {
      cursor: 'default',
      boxShadow: 'none',
      opacity: buttonVars.disabled.opacity,
    },
    '&:focus-visible, &.focus': {
      backgroundColor: buttonVars.focus.background,
      borderColor: buttonVars.focus.border,
      color: buttonVars.focus.label,
      [systemIconStencil.vars.color]: buttonVars.focus.icon,
      ...focusRing({
        width: 2,
        separation: 2,
        innerColor: buttonVars.focus.boxShadowInner,
        outerColor: buttonVars.focus.boxShadowOuter,
      }),
    },
    '&:hover, &.hover': {
      backgroundColor: buttonVars.hover.background,
      borderColor: buttonVars.hover.border,
      color: buttonVars.hover.label,
      [systemIconStencil.vars.color]: buttonVars.hover.icon,
    },
    '&:hover:active': {transitionDuration: '40ms'},
    '&:active, &.active': {
      backgroundColor: buttonVars.active.background,
      borderColor: buttonVars.active.border,
      color: buttonVars.active.label,
      [systemIconStencil.vars.color]: buttonVars.active.icon,
    },
    '&:disabled, &.disabled': {
      backgroundColor: buttonVars.disabled.background,
      borderColor: buttonVars.disabled.border,
      color: buttonVars.disabled.label,
      [systemIconStencil.vars.color]: buttonVars.disabled.icon,
    },
  },
});

/**
 * Button modifiers that will overwrite the base styles of Buttons.
 * - `Size`: These modifiers will dictate a size of a Button and has a set of styles to associated with it.
 * - `iconPosition`: These modifiers will override the existing `Size` styles. These are specific to icon locations
 * within a button or if there is only an icon and no text.
 */
export const buttonModifiers = createModifiers({
  size: {
    large: createStyles({
      fontSize: system.space.x4,
      lineHeight: system.space.x6,
      letterSpacing: '0.01rem',
      height: px2rem(48),
      paddingInline: system.space.x8,
      minWidth: px2rem(112),
    }),
    medium: createStyles({
      fontSize: '0.875rem',
      letterSpacing: '0.015rem',
      minWidth: px2rem(96),
      paddingInline: system.space.x6,
      height: system.space.x10,
    }),
    small: createStyles({
      fontSize: '0.875rem',
      letterSpacing: '0.015rem',
      height: system.space.x8,
      minWidth: system.space.x20,
      paddingInline: system.space.x4,
      gap: system.space.x1,
    }),
    extraSmall: createStyles({
      fontSize: '0.75rem',
      lineHeight: system.space.x4,
      letterSpacing: '0.02rem',
      height: system.space.x6,
      minWidth: 'auto',
      paddingInline: system.space.x3,
      gap: system.space.x1,
    }),
  },
  iconPosition: {
    largeOnly: createStyles({
      padding: '0',
      minWidth: `calc(${system.space.x4} * 3)`,
    }),
    largeStart: createStyles({
      paddingInlineStart: system.space.x6,
      paddingInlineEnd: system.space.x8,
    }),
    largeEnd: createStyles({
      paddingInlineStart: system.space.x8,
      paddingInlineEnd: system.space.x6,
    }),
    mediumOnly: createStyles({padding: '0', minWidth: system.space.x10}),
    mediumStart: createStyles({
      paddingInlineStart: `calc(${system.space.x1} * 5)`,
      paddingInlineEnd: system.space.x6,
    }),
    mediumEnd: createStyles({
      paddingInlineStart: system.space.x6,
      paddingInlineEnd: `calc(${system.space.x1} * 5)`,
    }),
    smallOnly: createStyles({padding: '0', minWidth: system.space.x8}),
    smallStart: createStyles({
      paddingInlineStart: system.space.x3,
      paddingInlineEnd: system.space.x4,
    }),
    smallEnd: createStyles({
      paddingInlineStart: system.space.x4,
      paddingInlineEnd: system.space.x3,
    }),
    extraSmallOnly: createStyles({padding: '0', minWidth: system.space.x6}),
    extraSmallStart: createStyles({
      paddingInlineStart: system.space.x2,
      paddingInlineEnd: system.space.x3,
    }),
    extraSmallEnd: createStyles({
      paddingInlineStart: system.space.x3,
      paddingInlineEnd: system.space.x2,
    }),
  },
});

export function capitalize(string: string = '') {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export function getIconPosition(
  size?: keyof typeof buttonModifiers.size,
  iconPosition?: IconPositions,
  children?: React.ReactNode
): keyof typeof buttonModifiers.iconPosition {
  return `${size}${capitalize(iconPosition)}` as keyof typeof buttonModifiers.iconPosition;
}

/**
 * The base button which all other buttons are built.
 */
export const BaseButton = createComponent('button')({
  displayName: 'BaseButton',
  Component: (
    {
      children,
      size,
      fillIcon,
      iconPosition,
      icon,
      colors,
      shouldMirrorIcon = false,
      ...elemProps
    }: ButtonContainerProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        type="button"
        {...mergeStyles(elemProps, [
          baseButtonStyles(),
          buttonModifiers({
            size: size,
            iconPosition: getIconPosition(size, iconPosition, children),
          }),
          buttonVars.default(colors?.default || {}),
          buttonVars.focus(colors?.focus || {}),
          buttonVars.hover(colors?.hover || {}),
          buttonVars.active(colors?.active || {}),
          buttonVars.disabled(colors?.disabled || {}),
        ])}
      >
        {children}
      </Element>
    );
  },
  subComponents: {
    Icon: ButtonLabelIcon,
    Label: ButtonLabel,
  },
});
