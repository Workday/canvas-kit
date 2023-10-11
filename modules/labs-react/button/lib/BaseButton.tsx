import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';

import {createComponent, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {createStyles, createVars, cssVar, createModifiers} from '@workday/canvas-kit-styling';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface BaseButtonContainerProps extends Partial<SystemIconProps>, GrowthBehavior {
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
 * Extends all the style properties from Box to our buttons as well as props from BaseButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

export const buttonVars = {
  default: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'iconFill',
    'color',
    'opacity',
    'borderRadius'
  ),
  hover: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'iconFill',
    'color',
    'opacity',
    'borderRadius'
  ),
  active: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'iconFill',
    'color',
    'opacity',
    'borderRadius'
  ),
  focus: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'iconFill',
    'color',
    'opacity',
    'borderRadius'
  ),
  disabled: createVars(
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'icon',
    'iconFill',
    'color',
    'opacity',
    'borderRadius'
  ),
};

const baseButtonStyles = createStyles({
  fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  letterSpacing: '0.015rem',
  fontWeight: 'bold',
  backgroundColor: cssVar(buttonVars.default.background),
  color: cssVar(buttonVars.default.color),
  border: '1px solid transparent',
  borderColor: cssVar(buttonVars.default.border),
  maxWidth: 'min-content',
  minWidth: '96px',
  cursor: 'pointer',
  display: 'inline-flex',
  gap: space.xxs,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: '2px transparent',
  paddingInline: space.m,
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  borderRadius: cssVar(buttonVars.default.borderRadius),
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: 0.4,
  },
  '&:focus-visible, &.focus': {
    backgroundColor: cssVar(buttonVars.focus.background),
    borderColor: cssVar(buttonVars.focus.border),
    boxShadow: `${cssVar(buttonVars.focus.boxShadowInner)} 0px 0px 0px 2px, ${cssVar(
      buttonVars.focus.boxShadowOuter
    )} 0px 0px 0px 4px`,
    color: cssVar(buttonVars.focus.color),
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
    borderColor: cssVar(buttonVars.hover.border),
    color: cssVar(buttonVars.hover.color),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.hover.icon),
    },
  },
  '&:hover:active': {transitionDuration: '40ms'},
  '&:active, &.active': {
    backgroundColor: cssVar(buttonVars.active.background),
    borderColor: cssVar(buttonVars.active.border),
    color: cssVar(buttonVars.active.color),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.active.icon),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    backgroundColor: cssVar(buttonVars.disabled.background),
    borderColor: cssVar(buttonVars.disabled.border),
    color: cssVar(buttonVars.disabled.color),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.disabled.icon),
    },
  },
});

export const sizeModifiers = createModifiers({
  size: {
    large: createStyles({
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
        paddingInlineStart: `${spaceNumbers.xl / 2}rem`,
        paddingInlineEnd: space.m,
      },
      '&.canvas-button-icon-end': {
        paddingInlineStart: space.m,
        paddingInlineEnd: `${spaceNumbers.xl / 2}rem`,
      },
    }),
    medium: createStyles({
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.015rem',
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
    small: createStyles({
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
    extraSmall: createStyles({
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
      size = 'medium',
      iconPosition = 'start',
      icon,
      colors,
      shouldMirrorIcon = false,
      ...elemProps
    }: BaseButtonContainerProps,
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
          sizeModifiers({size: size}),
          buttonVars.active(colors?.active || {}),
          buttonVars.default(colors?.default || {}),
          buttonVars.disabled(colors?.disabled || {}),
          buttonVars.focus(colors?.focus || {}),
          buttonVars.hover(colors?.hover || {}),
          cs,
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
