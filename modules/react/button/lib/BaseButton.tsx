import * as React from 'react';

import {GrowthBehavior, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, createVars, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

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
    // Default Styles
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    fontWeight: system.fontWeight.bold,
    backgroundColor: cssVar(
      buttonColorPropVars.default.background,
      cssVar(background, 'transparent')
    ),
    color: cssVar(buttonColorPropVars.default.label, cssVar(label, system.color.fg.strong)),
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.sm, system.space.x2),
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
      cssVar(borderRadius, cssVar(system.shape.full, system.shape.round))
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
        cssVar(boxShadowInner, cssVar(system.color.border.inverse.default, base.neutral0))
      )},0 0 0 ${px2rem(4)} ${cssVar(
        buttonColorPropVars.focus.boxShadowOuter,
        cssVar(boxShadowOuter, cssVar(system.color.brand.focus.primary, brand.common.focusOutline))
      )}`,
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.sm, system.fontSize.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.sm, system.lineHeight.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.body.sm, base.letterSpacing200),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        height: cssVar(system.size.lg, px2rem(48)),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInline: cssVar(system.padding.xxl, system.space.x8),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(base.size1400, px2rem(112)),
      },
      medium: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(base.size1200, px2rem(96)),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInline: cssVar(system.padding.xl, system.space.x6),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        height: cssVar(system.size.md, system.space.x10),
      },
      small: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        height: cssVar(system.size.sm, system.space.x8),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(base.size1000, system.space.x20),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInline: cssVar(system.padding.md, system.space.x4),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        gap: cssVar(system.gap.xs, system.space.x1),
      },
      extraSmall: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.md, system.lineHeight.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.md, base.letterSpacing100),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        height: cssVar(system.size.xs, system.space.x6),
        minWidth: 'auto',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInline: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        gap: cssVar(system.gap.xs, system.space.x1),
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(system.size.lg, px2rem(48)),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.xl, system.space.x6),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xxl, system.space.x8),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.xxl, system.space.x8),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xl, system.space.x6),
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(system.size.md, system.space.x10),
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.lg, px2rem(20)),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xl, system.space.x6),
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.xl, system.space.x6),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.lg, px2rem(20)),
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(system.size.sm, system.space.x8),
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.md, system.space.x4),
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.md, system.space.x4),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(system.size.xs, system.space.x6),
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.xs, system.space.x2),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xs, system.space.x2),
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
