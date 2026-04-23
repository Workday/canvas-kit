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
    [buttonStencil.vars.background]: system.color.surface.transparent,
    [buttonStencil.vars.borderRadius]: system.shape.full,
    [buttonStencil.vars.border]: system.color.border.input.default,
    [buttonStencil.vars.label]: system.color.fg.default,
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.surface.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.color.brand.focus.primary,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: base.slate100,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.hover,
      }),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.border]: system.color.border.input.hover,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.strong,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.pressed,
      }),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.border]: system.color.border.input.hover,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.color.surface.transparent,

      [buttonStencil.vars.label]: system.color.fg.default,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: system.color.surface.transparent,
        [buttonStencil.vars.border]: system.color.border.inverse.default,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: colorSpace.darken({
            color: system.color.surface.transparent,
            fallback: system.color.bg.transparent.strong,
            mixinColor: system.color.surface.overlay.mixin,
            mixinValue: system.opacity.surface.hover,
          }),
          [buttonStencil.vars.border]: system.color.border.inverse.default,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.surface.inverse,

          [buttonStencil.vars.border]: system.color.border.transparent,
          [buttonStencil.vars.label]: system.color.fg.contrast.default,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.focus.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.darken({
            color: system.color.surface.transparent,
            fallback: system.color.bg.transparent.stronger,
            mixinColor: system.color.surface.overlay.mixin,
            mixinValue: system.opacity.surface.pressed,
          }),
          [buttonStencil.vars.border]: system.color.border.inverse.default,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [buttonStencil.vars.background]: system.color.surface.transparent,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
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
