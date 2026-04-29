import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, createVars, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from './v14SystemIconStencil';

/**
 * The purpose of this object is for the `colors` prop - to provide backwards compatibility with how we allowed color overrides in Emotion.
 */
export const v14ButtonColorPropVars = {
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
export const v14ButtonStencil = createStencil({
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
      v14ButtonColorPropVars.default.background,
      cssVar(background, 'transparent')
    ),
    color: cssVar(v14ButtonColorPropVars.default.label, cssVar(label, system.color.fg.strong)),
    borderWidth: px2rem(1),
    borderStyle: 'solid',
    gap: system.legacy.gap.sm,
    borderColor: cssVar(v14ButtonColorPropVars.default.border, cssVar(border, 'transparent')),
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
      v14ButtonColorPropVars.default.borderRadius,
      cssVar(borderRadius, system.legacy.shape.full)
    ),
    position: 'relative',
    verticalAlign: 'middle',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: cssVar(
      v14ButtonColorPropVars.default.icon,
      system.color.fg.strong
    ),
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:disabled, &:disabled:active, &.disabled': {
      cursor: 'default',
      boxShadow: 'none',
      opacity: cssVar(v14ButtonColorPropVars.default.opacity, cssVar(opacity, system.opacity.full)),
    },
    // Focus Styles
    '&:focus-visible, &.focus': {
      backgroundColor: cssVar(
        v14ButtonColorPropVars.focus.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(v14ButtonColorPropVars.focus.border, cssVar(border, 'transparent')),
      color: cssVar(v14ButtonColorPropVars.focus.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        v14ButtonColorPropVars.focus.icon,
        system.color.fg.strong
      ),
      outline: `${px2rem(2)} solid transparent`,
      outlineOffset: px2rem(2),
      ...focusRing({
        width: 2,
        separation: 2,
        innerColor: cssVar(
          v14ButtonColorPropVars.focus.boxShadowInner,
          cssVar(
            boxShadowInner,
            cssVar(system.legacy.color.border.inverse.default, base.legacy.neutral0)
          )
        ),
        outerColor: cssVar(
          v14ButtonColorPropVars.focus.boxShadowOuter,
          cssVar(boxShadowOuter, brand.legacy.common.focus)
        ),
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      backgroundColor: cssVar(
        v14ButtonColorPropVars.hover.background,
        cssVar(background, system.color.bg.contrast.strong)
      ),
      borderColor: cssVar(v14ButtonColorPropVars.hover.border, cssVar(border, 'transparent')),
      color: cssVar(v14ButtonColorPropVars.hover.label, cssVar(label, system.color.fg.stronger)),
      [systemIconStencil.vars.color]: cssVar(
        v14ButtonColorPropVars.hover.icon,
        system.color.fg.stronger
      ),
    },
    '&:hover:active': {transitionDuration: '40ms'},
    // Active Styles
    '&:active, &.active': {
      backgroundColor: cssVar(
        v14ButtonColorPropVars.active.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(v14ButtonColorPropVars.active.border, cssVar(border, 'transparent')),
      color: cssVar(v14ButtonColorPropVars.active.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        v14ButtonColorPropVars.active.icon,
        system.color.fg.strong
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      backgroundColor: cssVar(
        v14ButtonColorPropVars.disabled.background,
        cssVar(background, 'transparent')
      ),
      borderColor: cssVar(v14ButtonColorPropVars.disabled.border, cssVar(border, 'transparent')),
      color: cssVar(v14ButtonColorPropVars.disabled.label, cssVar(label, system.color.fg.strong)),
      [systemIconStencil.vars.color]: cssVar(
        v14ButtonColorPropVars.disabled.icon,
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
        ...system.legacy.type.body.sm,
        fontWeight: system.fontWeight.bold,
        height: system.legacy.size.lg,
        paddingInline: system.legacy.padding.xxl,
        minWidth: px2rem(112),
      },
      medium: {
        ...system.legacy.type.subtext.lg,
        fontWeight: system.fontWeight.bold,
        minWidth: px2rem(96),
        paddingInline: system.legacy.padding.xl,
        height: system.legacy.size.md,
      },
      small: {
        ...system.legacy.type.subtext.lg,
        fontWeight: system.fontWeight.bold,
        height: system.legacy.size.sm,
        minWidth: px2rem(80),
        paddingInline: system.legacy.padding.md,
        gap: system.legacy.gap.xs,
      },
      extraSmall: {
        ...system.legacy.type.subtext.md,
        fontWeight: system.fontWeight.bold,
        height: system.legacy.size.xs,
        minWidth: 'auto',
        paddingInline: system.legacy.padding.sm,
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
      only: {padding: '0'},
      start: {},
      end: {},
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: calc.multiply(system.legacy.size.xxxs, 3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xl,
        paddingInlineEnd: system.legacy.padding.xxl,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.xxl,
        paddingInlineEnd: system.legacy.padding.xl,
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
        paddingInlineStart: calc.multiply(system.legacy.padding.xxs, 5),
        paddingInlineEnd: system.legacy.padding.xl,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.xl,
        paddingInlineEnd: calc.multiply(system.legacy.padding.xxs, 5),
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
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.md,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.md,
        paddingInlineEnd: system.legacy.padding.sm,
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
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
  ],
});
