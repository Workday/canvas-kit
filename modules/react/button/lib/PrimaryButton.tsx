import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {buttonColorPropVars, buttonStencil} from './BaseButton';
import {Button, type ButtonProps} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface PrimaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const primaryButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      brand.action.base,
      cssVar(system.color.brand.accent.primary, brand.primary.base)
    ),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.label]: cssVar(
      brand.action.accent,
      cssVar(system.color.fg.inverse, brand.primary.accent)
    ),
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        brand.action.base,
        cssVar(system.color.brand.accent.primary, brand.primary.base)
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(
        brand.action.accent,
        cssVar(system.color.fg.inverse, brand.primary.accent)
      ),
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
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
    },
    // Hover Styles
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        brand.action.base,
        cssVar(system.color.brand.accent.primary, cssVar(brand.action.dark, brand.primary.dark)),
        system.color.accent.overlay.mixin,
        system.opacity.accent.hover
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(
        brand.action.accent,
        cssVar(system.color.fg.inverse, brand.primary.accent)
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
    },
    // Active Styles
    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        brand.action.base,
        cssVar(
          system.color.brand.accent.primary,
          cssVar(brand.action.darkest, brand.primary.darkest)
        ),
        system.color.accent.overlay.mixin,
        system.opacity.accent.pressed
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(
        brand.action.accent,
        cssVar(system.color.fg.inverse, brand.primary.accent)
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: cssVar(
        brand.action.base,
        cssVar(system.color.brand.accent.primary, brand.primary.base)
      ),
      [buttonStencil.vars.label]: cssVar(
        brand.action.accent,
        cssVar(system.color.fg.inverse, brand.primary.accent)
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.background]: cssVar(
          brand.action.lightest,
          cssVar(system.color.surface.inverse, brand.primary.lightest)
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: colorSpace.darken(
            brand.action.lightest,
            cssVar(
              system.color.surface.inverse,
              cssVar(brand.action.lighter, brand.primary.lighter)
            ),
            system.color.accent.overlay.mixin,
            system.opacity.accent.hover
          ),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: cssVar(
            brand.action.lightest,
            cssVar(
              system.color.surface.inverse,
              cssVar(brand.action.lightest, brand.primary.lightest)
            )
          ),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.boxShadowOuter]: cssVar(
            system.color.focus.inverse,
            cssVar(system.color.border.inverse.default, base.neutral0)
          ),
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [buttonStencil.vars.background]: colorSpace.darken(
            brand.action.lightest,
            cssVar(system.color.surface.inverse, cssVar(brand.action.light, brand.primary.light)),
            system.color.accent.overlay.mixin,
            system.opacity.accent.pressed
          ),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [buttonStencil.vars.background]: cssVar(
            brand.action.lightest,
            cssVar(system.color.surface.inverse, brand.primary.lightest)
          ),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.disabled.icon, 'currentColor'),
        },
      },
    },
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {children, variant, size, iconPosition, grow, cs, ...elemProps}: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        iconPosition={iconPosition}
        size={size}
        grow={grow}
        cs={[primaryButtonStencil({variant, iconPosition, grow, size}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
