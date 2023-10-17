import * as React from 'react';

import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonLabel} from '../lib/parts/ButtonLabel';

import {createComponent, GrowthBehavior, focusRing} from '@workday/canvas-kit-react/common';
import {createStyles, createVars, cssVar, createModifiers} from '@workday/canvas-kit-styling';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';
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

export const getMinWidthStyles = (children: React.ReactNode, size: ButtonSizes) => {
  switch (size) {
    case 'large':
      return children ? '112px' : '48px';
    case 'medium':
      return children ? '96px' : space.xl;
    case 'small':
      return children ? space.xxxl : space.l;
    case 'extraSmall':
      return children ? 'auto' : space.m;
    default:
      return children ? '96px' : space.xl;
  }
};

export const getPaddingStyles = (
  children: React.ReactNode,
  size: ButtonSizes,
  icon: CanvasSystemIcon | undefined,
  iconPosition: IconPositions | undefined
) => {
  // In order to calculate the correct padding, we need to know its children
  // and what side the icon is on and if there's an icon provided
  if (!children) {
    // icon buttons do not have any padding
    return 0;
  }
  // If there are children AND an icon
  // 1. We check what side the icon is in
  // 2. Adjust padding to visually center the icon and text
  // If there is children (most likely just text)
  // 1. We keep the padding the same on both side
  switch (size) {
    case 'large':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.l} 0 ${space.m}`
          : `0 ${space.m} 0 ${space.l}`
        : `0 ${space.l}`;

    case 'medium':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.m} 0 20px`
          : `0 20px 0 ${space.m}`
        : `0 ${space.m}`;

    case 'small':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.s} 0 ${space.xs}`
          : `0 ${space.xs} 0 ${space.s}`
        : `0 ${space.s}`;

    case 'extraSmall':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.xs} 0 ${space.xxs}`
          : `0 ${space.xxs} 0 ${space.xs}`
        : `0 ${space.xs}`;

    default:
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.m} 0 20px`
          : `0 20px 0 ${space.m}`
        : `0 ${space.m}`;
  }
};

/**
 * Factory function for creating Button vars.
 */
const createButtonVars = () =>
  createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'label',
    'opacity',
    'borderRadius'
  );

/**
 * Temporary css variables to be used across all Buttons.
 */
export const buttonVars = {
  default: createButtonVars(),
  hover: createButtonVars(),
  active: createButtonVars(),
  focus: createButtonVars(),
  disabled: createButtonVars(),
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
  color: cssVar(buttonVars.default.label, cssVar(base.blackPepper400)),
  borderWidth: '1px',
  borderStyle: 'solid',
  gap: cssVar(system.space.x2, space.xxs),
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
  borderRadius: cssVar(buttonVars.default.borderRadius, system.shape.circle),
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: cssVar(buttonVars.disabled.opacity, '1'),
  },
  '& span .wd-icon-fill': {
    transitionDuration: '40ms',
    fill: cssVar(buttonVars.default.icon, cssVar(base.blackPepper400)),
  },
  '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
    fill: cssVar(buttonVars.default.icon, cssVar(base.blackPepper400)),
  },
  '&:focus-visible, &.focus': {
    backgroundColor: cssVar(buttonVars.focus.background, 'transparent'),
    borderColor: cssVar(buttonVars.focus.border, 'transparent'),
    color: cssVar(buttonVars.focus.label, cssVar(base.blackPepper400)),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.focus.icon),
    },
    '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: cssVar(buttonVars.focus.icon),
    },
    ...focusRing({
      width: 2,
      separation: 2,
      innerColor: cssVar(buttonVars.focus.boxShadowInner, cssVar(base.frenchVanilla100)),
      outerColor: cssVar(buttonVars.focus.boxShadowOuter, cssVar(brand.primary.base)),
    }),
  },
  '&:hover, &.hover': {
    backgroundColor: cssVar(buttonVars.hover.background, cssVar(base.blackPepper500)),
    borderColor: cssVar(buttonVars.hover.border, 'transparent'),
    color: cssVar(buttonVars.hover.label, cssVar(base.blackPepper500)),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.hover.icon, cssVar(base.blackPepper500)),
    },
    '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: cssVar(buttonVars.hover.icon),
    },
  },
  '&:hover:active': {transitionDuration: '40ms'},
  '&:active, &.active': {
    backgroundColor: cssVar(buttonVars.active.background, 'transparent'),
    borderColor: cssVar(buttonVars.active.border, 'transparent'),
    color: cssVar(buttonVars.active.label, cssVar(base.blackPepper400)),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.active.icon, cssVar(base.blackPepper400)),
    },
    '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: cssVar(buttonVars.active.icon),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    backgroundColor: cssVar(buttonVars.disabled.background, 'transparent'),
    borderColor: cssVar(buttonVars.disabled.border, 'transparent'),
    color: cssVar(buttonVars.disabled.label, cssVar(base.blackPepper400)),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.disabled.icon, cssVar(base.blackPepper400)),
    },
    '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: cssVar(buttonVars.disabled.icon, cssVar(base.blackPepper400)),
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
      fontSize: cssVar(system.space.x4, space.s),
      lineHeight: cssVar(system.space.x6, space.m),
      letterSpacing: '0.01rem',
      height: '48px',
      paddingInline: cssVar(system.space.x8, space.l),
      minWidth: '112px',
    }),
    medium: createStyles({
      fontSize: '0.875rem',
      letterSpacing: '0.015rem',
      minWidth: '96px',
      paddingInline: cssVar(system.space.x6, space.m),
      height: cssVar(system.space.x10, space.xl),
    }),
    small: createStyles({
      fontSize: '0.875rem',
      letterSpacing: '0.015rem',
      height: cssVar(system.space.x8, space.l),
      minWidth: cssVar(system.space.x20, space.xxxl),
      paddingInline: cssVar(system.space.x4, space.s),
      gap: cssVar(system.space.x1, space.xxxs),
    }),
    extraSmall: createStyles({
      fontSize: '0.75rem',
      lineHeight: cssVar(system.space.x4, space.s),
      letterSpacing: '0.02rem',
      height: cssVar(system.space.x6, space.m),
      minWidth: 'auto',
      paddingInline: cssVar(system.space.x3, space.xs),
      gap: cssVar(system.space.x1, space.xxxs),
    }),
  },
  iconPosition: {
    largeOnly: createStyles({
      padding: '0',
      minWidth: cssVar(system.space.x12, '3rem'),
    }),
    largeStart: createStyles({
      paddingInlineStart: cssVar(system.space.x6, space.m),
      paddingInlineEnd: cssVar(system.space.x8, space.l),
    }),
    largeEnd: createStyles({
      paddingInlineStart: cssVar(system.space.x8, space.l),
      paddingInlineEnd: cssVar(system.space.x6, space.m),
    }),
    mediumOnly: createStyles({padding: '0', minWidth: cssVar(system.space.x10, space.xl)}),
    mediumStart: createStyles({
      paddingInlineStart: cssVar(system.space.x5, '1.25rem'),
      paddingInlineEnd: cssVar(system.space.x6, space.m),
    }),
    mediumEnd: createStyles({
      paddingInlineStart: cssVar(system.space.x6, space.m),
      paddingInlineEnd: cssVar(system.space.x5, '1.25rem'),
    }),
    smallOnly: createStyles({padding: '0', minWidth: cssVar(system.space.x8, space.l)}),
    smallStart: createStyles({
      paddingInlineStart: cssVar(system.space.x3, space.xs),
      paddingInlineEnd: cssVar(system.space.x4, space.s),
    }),
    smallEnd: createStyles({
      paddingInlineStart: cssVar(system.space.x4, space.s),
      paddingInlineEnd: cssVar(system.space.x3, space.xs),
    }),
    extraSmallOnly: createStyles({padding: '0', minWidth: cssVar(system.space.x6, space.m)}),
    extraSmallStart: createStyles({
      paddingInlineStart: cssVar(system.space.x2, space.xxs),
      paddingInlineEnd: cssVar(system.space.x3, space.xs),
    }),
    extraSmallEnd: createStyles({
      paddingInlineStart: cssVar(system.space.x3, space.xs),
      paddingInlineEnd: cssVar(system.space.x2, space.xxs),
    }),
  },
});

export function capitalize(string: string = '') {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export function getIconPosition(
  size?: keyof typeof buttonModifiers.size,
  iconPosition?: IconPositions
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
      cs,
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
      <Box
        as={Element}
        ref={ref}
        type="button"
        cs={[
          baseButtonStyles,
          cs,
          buttonModifiers({
            size: size,
            iconPosition: getIconPosition(size, iconPosition),
          }),
          buttonVars.active(colors?.active || {}),
          buttonVars.default(colors?.default || {}),
          buttonVars.disabled(colors?.disabled || {}),
          buttonVars.focus(colors?.focus || {}),
          buttonVars.hover(colors?.hover || {}),
        ]}
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
