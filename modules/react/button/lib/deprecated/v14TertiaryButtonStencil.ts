import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {v14ButtonColorPropVars, v14ButtonStencil} from './v14ButtonStencil';
import {systemIconStencil} from './v14SystemIconStencil';

export const v14TertiaryButtonStencil = createStencil({
  extends: v14ButtonStencil,
  // Base Styles
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    borderWidth: px2rem(2),
    [v14ButtonStencil.vars.borderRadius]: system.shape.round,
    [v14ButtonStencil.vars.background]: system.color.bg.transparent.default,
    [v14ButtonStencil.vars.label]: brand.primary.base,
    [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [v14ButtonStencil.vars.background]: system.color.bg.transparent.default,
      [v14ButtonStencil.vars.label]: brand.primary.base,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.focus.icon, 'currentColor'),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: cssVar(system.color.border.inverse.default, base.neutral0),
        outerColor: brand.common.focusOutline,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [v14ButtonStencil.vars.background]: system.color.bg.alt.soft,
      [v14ButtonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.hover.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Active Styles
    '&:active, &.active': {
      // TODO: Correct this in v15 with our new color tokens
      [v14ButtonStencil.vars.background]: base.slate100,
      [v14ButtonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.active.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [v14ButtonStencil.vars.background]: system.color.bg.transparent.default,
      [v14ButtonStencil.vars.label]: brand.primary.base,
      [v14ButtonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.disabled.icon, 'currentColor'),
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        [systemIconStencil.vars.color]: system.color.fg.default,
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
          [v14ButtonStencil.vars.background]: system.color.bg.transparent.strong,
          [v14ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(v14ButtonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
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
        minWidth: calc.multiply(system.space.x4, 3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
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
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
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
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
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
        paddingInlineStart: system.space.x1,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x1,
      },
    },
  ],
});
