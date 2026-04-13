import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {v13ButtonColorPropVars, v13ButtonStencil} from './v13ButtonStencil';
import {systemIconStencil} from './v13SystemIconStencil';

export const v13TertiaryButtonStencil = createStencil({
  extends: v13ButtonStencil,
  // Base Styles
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    textDecoration: 'underline',
    border: system.space.zero,
    [v13ButtonStencil.vars.background]: 'transparent',
    [v13ButtonStencil.vars.borderRadius]: system.shape.x1,
    [v13ButtonStencil.vars.label]: brand.primary.base,
    [systemIconStencil.vars.color]: cssVar(v13ButtonColorPropVars.default.icon, brand.primary.base),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [v13ButtonStencil.vars.background]: 'transparent',
      [v13ButtonStencil.vars.label]: brand.primary.base,
      [v13ButtonStencil.vars.boxShadowInner]: brand.common.focusOutline,
      [v13ButtonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: cssVar(v13ButtonColorPropVars.focus.icon, brand.primary.base),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: cssVar(system.color.border.inverse.default, base.neutral0),
        outerColor: brand.common.focusOutline,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [v13ButtonStencil.vars.background]: system.color.bg.alt.default,
      [v13ButtonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: cssVar(v13ButtonColorPropVars.hover.icon, brand.primary.dark),
    },
    // Active Styles
    '&:active, &.active': {
      [v13ButtonStencil.vars.background]: system.color.bg.alt.strong,
      [v13ButtonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: cssVar(
        v13ButtonColorPropVars.active.icon,
        brand.primary.darkest
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [v13ButtonStencil.vars.background]: 'transparent',
      [v13ButtonStencil.vars.label]: brand.primary.base,
      [v13ButtonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(
        v13ButtonColorPropVars.active.icon,
        brand.primary.base
      ),
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        borderRadius: system.shape.round,
        [systemIconStencil.vars.color]: cssVar(
          v13ButtonColorPropVars.default.icon,
          system.color.fg.strong
        ),
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.disabled.icon,
            system.color.fg.strong
          ),
        },
      },
      start: {},
      end: {},
    },
    isThemeable: {
      true: {
        [systemIconStencil.vars.color]: cssVar(
          v13ButtonColorPropVars.default.icon,
          brand.primary.base
        ),

        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.focus.icon,
            brand.primary.base
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.hover.icon,
            brand.primary.dark
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.active.icon,
            brand.primary.darkest
          ),
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.disabled.icon,
            brand.primary.base
          ),
        },
      },
    },
    variant: {
      // Inverse Styles
      inverse: {
        [v13ButtonStencil.vars.background]: 'transparent',
        [v13ButtonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(
          v13ButtonColorPropVars.default.icon,
          system.color.fg.inverse
        ),
        // Focus Styles
        '&:focus-visible, &.focus': {
          [v13ButtonStencil.vars.background]: system.color.bg.default,
          [v13ButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
          ...focusRing({
            inset: 'inner',
            width: 2,
            separation: 2,
            innerColor: system.color.border.contrast.default,
            outerColor: cssVar(system.color.border.inverse.default, base.neutral0),
          }),
        },
        // Hover Styles
        '&:hover, &.hover': {
          [v13ButtonStencil.vars.background]: system.color.bg.default,
          [v13ButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        // Active Styles
        '&:active, &.active': {
          [v13ButtonStencil.vars.background]: system.color.bg.alt.soft,
          [v13ButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [v13ButtonStencil.vars.background]: 'transparent',
          [v13ButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(
            v13ButtonColorPropVars.disabled.icon,
            system.color.fg.inverse
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
