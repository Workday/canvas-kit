import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {v14ButtonColorPropVars, v14ButtonStencil} from './v14ButtonStencil';
import {systemIconStencil} from './v14SystemIconStencil';

export const v14TertiaryButtonStencil = createStencil({
  extends: v14ButtonStencil,
  // Base Styles
  base: {
    paddingInline: system.padding.xs,
    minWidth: 'auto',
    borderWidth: px2rem(2),
    [v14ButtonStencil.vars.borderRadius]: system.legacy.shape.full,
    [v14ButtonStencil.vars.background]: system.legacy.color.surface.transparent,
    [v14ButtonStencil.vars.label]: brand.legacy.primary600,
    [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      // TODO: Correct this in v15 with our new color tokens
      [v14ButtonStencil.vars.background]: system.color.bg.transparent.default,
      [v14ButtonStencil.vars.label]: brand.legacy.primary600,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.focus.icon, 'currentColor'),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: cssVar(system.color.border.inverse.default, base.neutral0),
        outerColor: brand.legacy.common.focus,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      // TODO: Correct this in v15 with our new color tokens
      [v14ButtonStencil.vars.background]: system.color.bg.alt.soft,
      [v14ButtonStencil.vars.label]: brand.legacy.primary700,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.hover.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Active Styles
    '&:active, &.active': {
      // TODO: Correct this in v15 with our new color tokens
      [v14ButtonStencil.vars.background]: base.legacy.slate100,
      [v14ButtonStencil.vars.label]: brand.legacy.primary800,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.active.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      // TODO: Correct this in v15 with our new color tokens
      [v14ButtonStencil.vars.background]: system.color.bg.transparent.default,
      [v14ButtonStencil.vars.label]: brand.legacy.primary600,
      [v14ButtonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.disabled.icon, 'currentColor'),
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        [systemIconStencil.vars.color]: cssVar(
          v14ButtonColorPropVars.default.icon,
          system.color.fg.strong
        ),
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.disabled.icon,
            system.color.fg.strong
          ),
        },
      },
      start: {},
      end: {},
    },
    variant: {
      // Inverse Styles
      inverse: {
        [v14ButtonStencil.vars.background]: 'transparent',
        [v14ButtonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          // TODO: Correct this in v15 with our new color tokens
          [v14ButtonStencil.vars.background]: system.color.bg.transparent.strong,
          [v14ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          // TODO: Correct this in v15 with our new color tokens
          [v14ButtonStencil.vars.background]: system.color.bg.translucent,
          [v14ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.focus.icon, 'currentColor'),
          ...focusRing({
            width: 2,
            separation: 0,
            outerColor: cssVar(system.color.border.inverse.default, base.neutral0),
          }),
        },
        // Active Styles
        '&:active, &.active': {
          // TODO: Correct this in v15 with our new color tokens
          [v14ButtonStencil.vars.background]: system.color.bg.transparent.stronger,
          [v14ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.active.icon,
            'currentColor'
          ),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [v14ButtonStencil.vars.background]: 'transparent',
          [v14ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(
            v14ButtonColorPropVars.disabled.icon,
            'currentColor'
          ),
        },
      },
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
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
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
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
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
        paddingInlineStart: system.legacy.padding.xxs,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.xxs,
      },
    },
  ],
});
