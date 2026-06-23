import * as React from 'react';

import {GrowthBehavior, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, createVars, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

import {ButtonLabel} from '../lib/parts/ButtonLabel';
import {ButtonLabelIcon} from '../lib/parts/ButtonLabelIcon';
import {ButtonColors, ButtonSizes, IconPositions} from './types';

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
    // This is here temporarily until tokens are updated
    '[data-theme="sana-canvas"] &': {
      '--cnvs-sys-opacity-accent-hover': '0.045',
      '--cnvs-sys-opacity-accent-pressed': '0.118',
    },
    // Default Styles
    fontFamily: system.fontFamily.default,
    fontSize: system.legacy.fontSize.subtext.lg,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    fontWeight: system.fontWeight.bold,
    backgroundColor: cssVar(
      buttonColorPropVars.default.background,
      cssVar(background, 'transparent')
    ),
    minWidth: 'max-content',
    color: cssVar(buttonColorPropVars.default.label, cssVar(label, system.color.fg.strong)),
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    gap: system.legacy.gap.sm,
    borderColor: cssVar(buttonColorPropVars.default.border, cssVar(border, 'transparent')),
    cursor: 'pointer',
    display: 'inline-flex',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    outline: `${px2rem(2)} transparent`,
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    borderRadius: cssVar(
      buttonColorPropVars.default.borderRadius,
      cssVar(borderRadius, system.legacy.shape.full)
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
      boxShadow: `0 0 0 ${px2rem(2)} ${cssVar(
        buttonColorPropVars.focus.boxShadowInner,
        cssVar(boxShadowInner, system.legacy.color.border.inverse.default)
      )},0 0 0 ${px2rem(4)} ${cssVar(
        buttonColorPropVars.focus.boxShadowOuter,
        cssVar(boxShadowOuter, system.legacy.color.brand.focus.primary)
      )}`,
    },
    // Hover Styles
    '&:hover, &.hover': {
      backgroundColor: cssVar(
        buttonColorPropVars.hover.background,
        cssVar(background, system.legacy.color.surface.contrast.strong)
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
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.disabled.icon, 'currentColor'),
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
        fontSize: system.legacy.fontSize.body.sm,
        lineHeight: system.legacy.lineHeight.body.sm,
        letterSpacing: system.legacy.letterSpacing.body.sm,
        height: system.legacy.size.lg,
        paddingInline: system.legacy.padding.lg,
      },
      medium: {
        fontSize: system.legacy.fontSize.subtext.lg,
        lineHeight: system.legacy.lineHeight.subtext.lg,
        letterSpacing: system.legacy.letterSpacing.subtext.lg,
        paddingInline: system.legacy.padding.md,
        height: system.legacy.size.md,
        gap: base.size75,
      },
      small: {
        fontSize: system.legacy.fontSize.subtext.lg,
        lineHeight: system.legacy.lineHeight.subtext.lg,
        letterSpacing: system.legacy.letterSpacing.subtext.lg,
        height: system.legacy.size.sm,
        paddingInline: system.legacy.padding.sm,
        gap: system.legacy.gap.xs,
      },
      extraSmall: {
        fontSize: system.legacy.fontSize.subtext.md,
        lineHeight: system.legacy.lineHeight.subtext.md,
        letterSpacing: system.legacy.letterSpacing.subtext.md,
        height: system.legacy.size.xs,
        paddingInline: system.legacy.padding.xs,
        gap: system.legacy.gap.xs,
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
      only: {padding: 0},
      start: {},
      end: {},
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.lg,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.md,
        paddingInlineEnd: system.legacy.padding.lg,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.lg,
        paddingInlineEnd: system.legacy.padding.md,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.md,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.md,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.md,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: calc.add(system.legacy.padding.xxs, '0.125rem'),
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: calc.add(system.legacy.padding.xxs, '0.125rem'),
      },
    },
  ],
});

/**
 * The baseLegacy button which which is the foundation of all Button variants (`PrimaryButton`,
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
