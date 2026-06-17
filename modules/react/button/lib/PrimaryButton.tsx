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
    // These are here temporarily until tokens are updated
    '[data-theme="sana-canvas"] &': {
      '--cnvs-sys-color-accent-overlay-mixin': 'white',
    },
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
      [buttonStencil.vars.background]: colorSpace.hover({
        color: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        fallback: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        colorType: 'accent',
      }),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, system.color.fg.inverse),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.pressed({
        color: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        fallback: cssVar(brand.action.base, system.legacy.color.brand.accent.primary),
        colorType: 'accent',
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
        // This is here temporarily until tokens are updated
        '[data-theme="sana-canvas"] &': {
          '--cnvs-sys-color-accent-overlay-mixin': 'black',
        },
        [buttonStencil.vars.background]: cssVar(
          brand.action.lightest,
          system.legacy.color.surface.inverse
        ),
        [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: colorSpace.hover({
            color: cssVar(brand.action.lightest, system.legacy.color.surface.inverse),
            fallback: cssVar(brand.action.lightest, system.legacy.color.surface.inverse),
            colorType: 'accent',
          }),
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: cssVar(
            brand.action.lightest,
            system.legacy.color.surface.inverse
          ),
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.legacy.color.focus.inverse,

          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.pressed({
            color: cssVar(brand.action.lightest, system.legacy.color.surface.inverse),
            fallback: cssVar(brand.action.lightest, system.legacy.color.surface.inverse),
            colorType: 'surface',
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
