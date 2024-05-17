import * as React from 'react';

import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonLabel} from '../lib/parts/ButtonLabel';

import {createComponent, GrowthBehavior, focusRing} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles, createVars, cssVar, createModifiers} from '@workday/canvas-kit-styling';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {base, brand, system} from '@workday/canvas-tokens-web';
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
const baseButtonStyles = createStyles({
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
  fontSize: '0.875rem',
  lineHeight: 'normal',
  letterSpacing: '0.015rem',
  fontWeight: 'bold',
  backgroundColor: cssVar(buttonVars.default.background, 'transparent'),
  color: cssVar(buttonVars.default.label, base.blackPepper400),
  borderWidth: '1px',
  borderStyle: 'solid',
  gap: system.space.x2,
  borderColor: cssVar(buttonVars.default.border, 'transparent'),
  cursor: 'pointer',
  display: 'inline-flex',
  boxShadow: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  outline: '2px transparent',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  borderRadius: cssVar(buttonVars.default.borderRadius, system.shape.round),
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active, &.disabled': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: cssVar(buttonVars.disabled.opacity, '1'),
  },
  '& span .wd-icon-fill, & span .wd-icon-accent, & span .wd-icon-accent2': {
    transitionDuration: '40ms',
    fill: cssVar(buttonVars.default.icon, base.blackPepper400),
  },
  '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
    fill: cssVar(buttonVars.default.icon, base.blackPepper400),
  },
  '&:focus-visible, &.focus': {
    backgroundColor: cssVar(buttonVars.focus.background, 'transparent'),
    borderColor: cssVar(buttonVars.focus.border, 'transparent'),
    color: cssVar(buttonVars.focus.label, base.blackPepper400),
    '& span .wd-icon-fill, & span .wd-icon-accent, & span .wd-icon-accent2': {
      fill: cssVar(buttonVars.focus.icon, base.blackPepper400),
    },
    ...focusRing({
      width: 2,
      separation: 2,
      innerColor: cssVar(buttonVars.focus.boxShadowInner, base.frenchVanilla100),
      outerColor: cssVar(buttonVars.focus.boxShadowOuter, brand.primary.base),
    }),
  },
  '&:hover, &.hover': {
    backgroundColor: cssVar(buttonVars.hover.background, base.blackPepper500),
    borderColor: cssVar(buttonVars.hover.border, 'transparent'),
    color: cssVar(buttonVars.hover.label, base.blackPepper500),
    '& span .wd-icon-fill, & span .wd-icon-accent, & span .wd-icon-accent2': {
      fill: cssVar(buttonVars.hover.icon, base.blackPepper500),
    },
  },
  '&:hover:active': {transitionDuration: '40ms'},
  '&:active, &.active': {
    backgroundColor: cssVar(buttonVars.active.background, 'transparent'),
    borderColor: cssVar(buttonVars.active.border, 'transparent'),
    color: cssVar(buttonVars.active.label, base.blackPepper400),
    '& span .wd-icon-fill, & span .wd-icon-accent, & span .wd-icon-accent2': {
      fill: cssVar(buttonVars.active.icon, base.blackPepper400),
    },
  },
  '&:disabled, &.disabled': {
    backgroundColor: cssVar(buttonVars.disabled.background, 'transparent'),
    borderColor: cssVar(buttonVars.disabled.border, 'transparent'),
    color: cssVar(buttonVars.disabled.label, base.blackPepper400),
    '& span .wd-icon-fill, & span .wd-icon-accent, & span .wd-icon-accent2': {
      fill: cssVar(buttonVars.disabled.icon, base.blackPepper400),
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
      height: '48px',
      paddingInline: system.space.x8,
      minWidth: '112px',
    }),
    medium: createStyles({
      fontSize: '0.875rem',
      letterSpacing: '0.015rem',
      minWidth: '96px',
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
          baseButtonStyles,
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
