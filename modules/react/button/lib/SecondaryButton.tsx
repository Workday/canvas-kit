import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {buttonColorPropVars, buttonStencil} from './BaseButton';
import {Button, ButtonProps} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface SecondaryButtonProps extends ButtonProps {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const secondaryButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.transparent,
      system.color.bg.transparent.default
    ),
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
    [buttonStencil.vars.border]: system.color.border.input.default,
    [buttonStencil.vars.label]: cssVar(system.color.fg.default, system.color.fg.strong),
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.default,
        system.color.bg.default
      ),
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, system.color.fg.stronger),
      [buttonStencil.vars.boxShadowInner]: cssVar(
        system.color.focus.inverse,
        cssVar(system.color.border.inverse.default, base.neutral0)
      ),
      [buttonStencil.vars.boxShadowOuter]: cssVar(
        system.color.brand.focus.primary,
        brand.common.focusOutline
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        base.slate100,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ), // TODO: Correct this in v15 with our new color tokens
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, system.color.fg.stronger),
      [buttonStencil.vars.border]: cssVar(
        system.color.border.input.hover,
        system.color.border.input.strong
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.transparent,
        system.color.bg.alt.strong,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      [buttonStencil.vars.label]: cssVar(system.color.fg.strong, system.color.fg.stronger),
      [buttonStencil.vars.border]: cssVar(
        system.color.border.input.hover,
        system.color.border.input.strong
      ),
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent.default,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.disabled.icon, 'currentColor'),
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: cssVar(system.color.surface.transparent, 'transparent'),
        [buttonStencil.vars.border]: cssVar(system.color.border.inverse.default, base.neutral0),
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.transparent,
            system.color.bg.transparent.strong,
            system.color.surface.overlay.mixin,
            system.opacity.surface.hover
          ),
          [buttonStencil.vars.border]: cssVar(system.color.border.inverse.default, base.neutral0),
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: cssVar(
            system.color.surface.inverse,
            system.color.bg.translucent
          ),
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: cssVar(
            system.color.fg.contrast.default,
            system.color.fg.inverse
          ),
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: cssVar(
            system.color.focus.inverse,
            cssVar(system.color.border.inverse.default, base.neutral0)
          ),
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.transparent,
            system.color.bg.transparent.stronger,
            system.color.surface.overlay.mixin,
            system.opacity.surface.pressed
          ),
          [buttonStencil.vars.border]: cssVar(system.color.border.inverse.default, base.neutral0),
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.border]: cssVar(system.color.border.inverse.default, base.neutral0),
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.disabled.icon, 'currentColor'),
        },
      },
    },
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {children, variant, size, iconPosition, grow, cs, ...elemProps}: SecondaryButtonProps,
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
        cs={[secondaryButtonStencil({variant, iconPosition, grow, size}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
