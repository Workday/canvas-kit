import * as React from 'react';

import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonLabel} from '../lib/parts/ButtonLabel';

import {createComponent, GrowthBehavior, focusRing} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, px2rem, createVars, calc} from '@workday/canvas-kit-styling';
import {SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {brand, system} from '@workday/canvas-tokens-web';
import {ButtonColors, ButtonSizes, IconPositions} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

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
   * Note: Not displayed at `small` size
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
  children?: React.ReactNode;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

/**
 * The purpose of this object is for the `colors` prop - to provide backwards compatibility with how we allowed color overrides in Emotion.
 */
export const buttonColorPropVars = {
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
export const buttonStencil = createStencil({
  vars: {
    background: '',
    border: '',
    boxShadowInner: '',
    boxShadowOuter: '',
    label: '',
    opacity: '',
    borderRadius: '',
  },
  base: ({background, border, boxShadowInner, boxShadowOuter, label, opacity, borderRadius}) => ({
    // Default Styles
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: '0.015rem',
    fontWeight: system.fontWeight.bold,
    backgroundColor: cssVar(
      buttonColorPropVars.default.background,
      cssVar(background, 'transparent')
    ),
    color: cssVar(buttonColorPropVars.default.label, cssVar(label, system.color.fg.strong)),
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    gap: system.space.x2,
    borderColor: cssVar(buttonColorPropVars.default.border, cssVar(border, 'transparent')),
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
    borderRadius: cssVar(
      buttonColorPropVars.default.borderRadius,
      cssVar(borderRadius, system.shape.round)
    ),
    position: 'relative',
    verticalAlign: 'middle',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      system.color.fg.strong
    ),
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:disabled, &:disabled:active, &.disabled': {
      cursor: 'default',
      boxShadow: 'none',
      opacity: cssVar(buttonColorPropVars.default.opacity, cssVar(opacity, system.opacity.full)),
    },
    // Focus Styles
    '&:focus-visible, &.focus': {
      backgroundColor: cssVar(
        buttonColorPropVars.focus.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(buttonColorPropVars.focus.border, cssVar(border, 'transparent')),
      color: cssVar(buttonColorPropVars.focus.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        system.color.fg.strong
      ),
      outline: `${px2rem(2)} solid transparent`,
      outlineOffset: px2rem(2),
      ...focusRing({
        width: 2,
        separation: 2,
        innerColor: cssVar(
          buttonColorPropVars.focus.boxShadowInner,
          cssVar(boxShadowInner, system.color.border.inverse)
        ),
        outerColor: cssVar(
          buttonColorPropVars.focus.boxShadowOuter,
          cssVar(boxShadowOuter, brand.common.focusOutline)
        ),
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      backgroundColor: cssVar(
        buttonColorPropVars.hover.background,
        cssVar(background, system.color.bg.contrast.strong)
      ),
      borderColor: cssVar(buttonColorPropVars.hover.border, cssVar(border, 'transparent')),
      color: cssVar(buttonColorPropVars.hover.label, cssVar(label, system.color.fg.stronger)),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        system.color.fg.stronger
      ),
    },
    '&:hover:active': {transitionDuration: '40ms'},
    // Active Styles
    '&:active, &.active': {
      backgroundColor: cssVar(
        buttonColorPropVars.active.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(buttonColorPropVars.active.border, cssVar(border, 'transparent')),
      color: cssVar(buttonColorPropVars.active.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        system.color.fg.strong
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      backgroundColor: cssVar(
        buttonColorPropVars.disabled.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(buttonColorPropVars.disabled.border, cssVar(border, 'transparent')),
      color: cssVar(buttonColorPropVars.disabled.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.strong
      ),
    },
    // for Windows high contrast desktop themes
    '@media (prefers-contrast: more)': {
      // Toggle Buttons (Segmented Control)
      '&[aria-pressed="true"]': {
        outline: `${px2rem(2)} solid transparent`,
        outlineOffset: `-${px2rem(1)}`,
      },
      // Toggle Buttons && Focus (Segmented Control)
      '&[aria-pressed="true"]:focus-visible, &[aria-pressed="true"].focus': {
        outline: `${px2rem(4)} double transparent`,
        outlineOffset: 0,
      },
    },
    // prevent ReactDOM 19 SVG issue https://github.com/Workday/canvas-kit/issues/3357.
    // Can be removed when the ReactDOM 19 issue is fixed.
    svg: {
      pointerEvents: 'none',
    },
  }),
  modifiers: {
    /**
     * Button modifiers that will overwrite the base styles of Buttons.
     * - `Size`: These modifiers will dictate a size of a Button and has a set of styles to associated with it.
     * - `iconPosition`: These modifiers will override the existing `Size` styles. These are specific to icon locations
     * within a button or if there is only an icon and no text.
     */
    size: {
      large: {
        ...system.type.body.small,
        fontWeight: system.fontWeight.bold,
        height: px2rem(48),
        paddingInline: system.space.x8,
        minWidth: px2rem(112),
      },
      medium: {
        ...system.type.subtext.large,
        fontWeight: system.fontWeight.bold,
        minWidth: px2rem(96),
        paddingInline: system.space.x6,
        height: system.space.x10,
      },
      small: {
        ...system.type.subtext.large,
        fontWeight: system.fontWeight.bold,
        height: system.space.x8,
        minWidth: system.space.x20,
        paddingInline: system.space.x4,
        gap: system.space.x1,
      },
      extraSmall: {
        ...system.type.subtext.medium,
        fontWeight: system.fontWeight.bold,
        height: system.space.x6,
        minWidth: 'auto',
        paddingInline: system.space.x3,
        gap: system.space.x1,
      },
    },
    grow: {
      true: {
        width: '100%',
        maxWidth: '100%',
      },
    },
    // IconPosition Styles
    iconPosition: {
      only: {padding: system.space.zero},
      start: {},
      end: {},
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: calc.multiply(system.space.x4, 3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x6,
        paddingInlineEnd: system.space.x8,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x8,
        paddingInlineEnd: system.space.x6,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x10,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: calc.multiply(system.space.x1, 5),
        paddingInlineEnd: system.space.x6,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x6,
        paddingInlineEnd: calc.multiply(system.space.x1, 5),
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x8,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x4,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x4,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x6,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
  ],
});

/**
 * The base button which which is the foundation of all Button variants (`PrimaryButton`,
 * `SecondaryButton`, `TertiaryButton`, `DeleteButton`, `ToolbarIconButton` and `ToolbarDropdownButton`).
 */
export const BaseButton = createComponent('button')({
  displayName: 'BaseButton',
  Component: (
    {
      children,
      size,
      fillIcon,
      grow,
      iconPosition,
      icon,
      colors,
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
          buttonStencil({size, iconPosition, grow}),
          buttonColorPropVars.default(colors?.default || {}),
          buttonColorPropVars.focus(colors?.focus || {}),
          buttonColorPropVars.hover(colors?.hover || {}),
          buttonColorPropVars.active(colors?.active || {}),
          buttonColorPropVars.disabled(colors?.disabled || {}),
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
