import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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
    [buttonStencil.vars.background]: cssVar(
      brand.action.base,
      system.legacy.color.brand.accent.primary
    ),
    [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
    [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(
        brand.action.base,
        system.legacy.color.brand.accent.primary
      ),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
      [buttonStencil.vars.boxShadowInner]: system.legacy.color.focus.inverse,

      [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        mixinColor: system.legacy.color.accent.overlay.mixin,
        mixinValue: system.legacy.opacity.accent.hover,
      }),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        mixinColor: system.legacy.color.accent.overlay.mixin,
        mixinValue: system.legacy.opacity.accent.pressed,
      }),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: cssVar(
        brand.action.base,
        system.legacy.color.brand.accent.primary
      ),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: cssVar(
          brand.action.lightest,
          system.legacy.color.surface.inverse
        ),
        [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: colorSpace.darken({
            color: brand.action.lightest,
            fallback: cssVar(
              system.legacy.color.surface.inverse,
              cssVar(brand.action.lighter, brand.primary.lighter)
            ),
            mixinColor: system.legacy.color.accent.overlay.mixin,
            mixinValue: system.legacy.opacity.accent.hover,
          }),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: cssVar(
            brand.action.lightest,
            cssVar(
              system.legacy.color.surface.inverse,
              cssVar(brand.action.lightest, brand.primary.lightest)
            )
          ),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.legacy.color.focus.inverse,

          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.darken({
            color: brand.action.lightest,
            fallback: cssVar(
              system.legacy.color.surface.inverse,
              cssVar(brand.action.light, brand.primary.light)
            ),
            mixinColor: system.legacy.color.accent.overlay.mixin,
            mixinValue: system.legacy.opacity.accent.pressed,
          }),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [buttonStencil.vars.background]: cssVar(
            brand.action.lightest,
            system.legacy.color.surface.inverse
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
