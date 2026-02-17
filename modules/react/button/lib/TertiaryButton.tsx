import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {buttonColorPropVars, buttonStencil} from './BaseButton';
import {Button, ButtonProps} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface TertiaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const tertiaryButtonStencil = createStencil({
  extends: buttonStencil,
  // Base Styles
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingInline: cssVar(system.padding.xs, system.space.x2),
    minWidth: 'auto',
    borderWidth: px2rem(2),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.transparent,
      system.color.bg.transparent.default
    ),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.label]: cssVar(system.color.fg.default, brand.primary.base),
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.transparent,
        system.color.bg.transparent.default
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.default, brand.primary.base),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.boxShadowInner]: cssVar(
        system.color.focus.inverse,
        cssVar(system.color.border.inverse.default, base.neutral0)
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.boxShadowOuter]: cssVar(
        system.color.brand.focus.primary,
        brand.common.focusOutline
      ),
    },
    // Hover Styles
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.soft,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, brand.primary.dark),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.strong,
        cssVar(buttonColorPropVars.hover.icon, 'currentColor')
      ),
      textDecoration: 'underline',
    },
    // Active Styles
    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.default,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, brand.primary.dark),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          system.color.fg.default
        ),
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
        },
      },
      start: {},
      end: {},
    },
    variant: {
      // Inverse Styles
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.background]: cssVar(system.color.surface.transparent, 'transparent'),
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Focus Styles
        '&:focus-visible, &.focus': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: cssVar(
            system.color.surface.inverse,
            system.color.bg.translucent
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.label]: cssVar(
            system.color.fg.contrast.default,
            system.color.fg.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.boxShadowOuter]: cssVar(
            system.color.focus.inverse,
            cssVar(system.color.border.inverse.default, base.neutral0)
          ),
        },
        // Hover Styles
        '&:hover, &.hover': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.transparent,
            system.color.bg.transparent.strong,
            system.color.surface.overlay.mixin,
            system.opacity.surface.hover
          ),
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.transparent,
            system.color.bg.transparent.stronger,
            system.color.surface.overlay.mixin,
            system.opacity.surface.pressed
          ),
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
        },
      },
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
        paddingInlineStart: cssVar(system.padding.xs, system.space.x2),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xs, system.space.x2),
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
        paddingInlineStart: cssVar(system.padding.xs, system.space.x2),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xs, system.space.x2),
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
        paddingInlineStart: cssVar(system.padding.xs, system.space.x2),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xs, system.space.x2),
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
        paddingInlineStart: cssVar(system.padding.xxs, system.space.x1),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xs, system.space.x2),
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.xs, system.space.x2),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.xxs, system.space.x1),
      },
    },
  ],
});

export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
  Component: (
    {
      children,
      icon,
      size = 'medium',
      variant,
      iconPosition,
      grow,
      cs,
      ...elemProps
    }: TertiaryButtonProps,
    ref,
    Element
  ) => {
    const baseIconPosition = iconPosition
      ? iconPosition
      : icon
        ? children
          ? 'start'
          : 'only'
        : undefined;

    return (
      <Button
        as={Element}
        ref={ref}
        icon={icon}
        size={size}
        iconPosition={iconPosition}
        grow={grow}
        cs={[
          tertiaryButtonStencil({
            size,
            variant,
            grow,
            iconPosition: baseIconPosition,
          }),
          cs,
        ]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
