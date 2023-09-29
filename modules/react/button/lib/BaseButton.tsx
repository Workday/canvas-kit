import * as React from 'react';

import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonLabel} from '../lib/parts/ButtonLabel';

import {
  createComponent,
  GrowthBehavior,
  cs,
  createVars,
  cssVar,
  createModifiers,
} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {base, system} from '@workday/canvas-tokens-web';
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
  focusRing?: keyof typeof buttonModifiers.focusRing;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

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

export const focusRingVars = createVars('separation', 'width', 'innerColor', 'outerColor');

export const focusRingStyles = {
  inset: cs({
    '&:focus-visible, &.focus': {
      boxShadow: `inset ${cssVar(focusRingVars.innerColor)} 0px 0px 0px ${cssVar(
        focusRingVars.width
      )}, ${cssVar(focusRingVars.outerColor)} 0px 0px 0px calc(${cssVar(
        focusRingVars.width
      )} + ${cssVar(focusRingVars.separation)})`,
    },
  }),
  outer: cs({
    '&:focus-visible, &.focus': {
      boxShadow: `${cssVar(focusRingVars.innerColor)} 0px 0px 0px ${cssVar(
        focusRingVars.width
      )}, ${cssVar(focusRingVars.outerColor)} 0px 0px 0px calc(${cssVar(
        focusRingVars.width
      )} + ${cssVar(focusRingVars.separation)})`,
    },
  }),
  both: cs({
    '&:focus-visible, &.focus': {
      boxShadow: `${cssVar(focusRingVars.innerColor)} 0px 0px 0px ${cssVar(
        focusRingVars.width
      )}, ${cssVar(focusRingVars.outerColor)} 0px 0px 0px calc(${cssVar(
        focusRingVars.width
      )} + ${cssVar(focusRingVars.separation)})`,
    },
  }),
};

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

const baseButtonStyles = cs({
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  letterSpacing: '0.015rem',
  fontWeight: 'bold',
  backgroundColor: cssVar(buttonVars.default.background, 'transparent'),
  color: cssVar(buttonVars.default.label, base.frenchVanilla100),
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: cssVar(buttonVars.default.border, 'transparent'),
  cursor: 'pointer',
  display: 'inline-flex',
  gap: cssVar(system.space.x2),
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
    opacity: cssVar(buttonVars.disabled.opacity),
  },
  [focusRingVars.width]: '2px',
  [focusRingVars.separation]: '2px',
  [focusRingVars.innerColor]: cssVar(buttonVars.focus.boxShadowInner),
  [focusRingVars.outerColor]: cssVar(buttonVars.focus.boxShadowOuter),
  '&:focus-visible, &.focus': {
    backgroundColor: cssVar(buttonVars.focus.background, 'transparent'),
    borderColor: cssVar(buttonVars.focus.border, 'transparent'),
    color: cssVar(buttonVars.focus.label),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.focus.icon),
    },
  },
  '& span .wd-icon-fill': {
    transitionDuration: '40ms',
    fill: cssVar(buttonVars.default.icon),
  },
  '&:hover, &.hover': {
    backgroundColor: cssVar(buttonVars.hover.background),
    borderColor: cssVar(buttonVars.hover.border, 'transparent'),
    color: cssVar(buttonVars.hover.label),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.hover.icon),
    },
  },
  '&:hover:active': {transitionDuration: '40ms'},
  '&:active, &.active': {
    backgroundColor: cssVar(buttonVars.active.background),
    borderColor: cssVar(buttonVars.active.border, 'transparent'),
    color: cssVar(buttonVars.active.label),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.active.icon),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    backgroundColor: cssVar(buttonVars.disabled.background),
    borderColor: cssVar(buttonVars.disabled.border, 'transparent'),
    color: cssVar(buttonVars.disabled.label),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.disabled.icon),
    },
  },
});

export const buttonModifiers = createModifiers({
  focusRing: {
    inset: focusRingStyles.inset,
    outer: focusRingStyles.outer,
    both: focusRingStyles.both,
  },
  size: {
    large: cs({
      fontSize: space.s,
      lineHeight: space.m,
      letterSpacing: '0.01rem',
      height: '48px',
      paddingInline: space.l,
      minWidth: '112px',
      '&.canvas-button-icon-only': {
        padding: '0',
        minWidth: `${spaceNumbers.xl + spaceNumbers.xxs}rem`,
      },
      '&.canvas-button-icon-start': {
        paddingInlineStart: space.m,
        paddingInlineEnd: space.l,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.l,
        paddingInlineEnd: space.m,
      },
    }),
    medium: cs({
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.015rem',
      minWidth: '96px',
      paddingInline: space.m,
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
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.015rem',
      height: space.l,
      minWidth: space.xxxl,
      paddingInline: space.s,
      gap: space.xxxs,
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
      fontSize: '0.75rem',
      lineHeight: space.s,
      letterSpacing: '0.02rem',
      height: space.m,
      minWidth: 'auto',
      paddingInline: space.xs,
      gap: space.xxxs,
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

export const BaseButton = createComponent('button')({
  displayName: 'BaseButton',
  Component: (
    {
      children,
      cs,
      size,
      focusRing = 'both',
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
          buttonModifiers({focusRing: focusRing, size: size}),
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
