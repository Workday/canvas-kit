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
    gap: system.space.x2,
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
      cssVar(borderRadius, system.shape.round)
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
          cssVar(boxShadowInner, cssVar(system.color.border.inverse.default, base.neutral0))
        ),
        outerColor: cssVar(
          v14ButtonColorPropVars.focus.boxShadowOuter,
          cssVar(boxShadowOuter, brand.common.focusOutline)
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
