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
export interface DeleteButtonProps extends ButtonProps {}

const deleteButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(system.color.brand.accent.critical, brand.error.base),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
    [systemIconStencil.vars.color]: cssVar(
    buttonColorPropVars.default.icon,
      cssVar(system.color.fg.inverse, brand.error.accent)
    ),
    // Focus Styles
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(system.color.brand.accent.critical, brand.error.base),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        cssVar(system.color.fg.inverse, brand.error.accent)
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
    },
    // Hover Styles
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.brand.accent.critical,
        brand.error.dark,
        system.color.accent.overlay.mixin,
        system.opacity.accent.hover
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        cssVar(system.color.fg.inverse, brand.error.accent)
      ),
    },
    // Active Styles
    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.brand.accent.critical,
        brand.error.darkest,
        system.color.accent.overlay.mixin,
        system.opacity.accent.pressed
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        cssVar(system.color.fg.inverse, brand.error.accent)
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(system.color.brand.accent.critical, brand.error.base),
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        cssVar(system.color.fg.inverse, brand.error.accent)
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
    },
  },
});

/**
 * Use sparingly for destructive actions that will result in data loss, can’t be undone, or will
 * have significant consequences. They commonly appear in confirmation dialogs as the final
 * confirmation before being deleted.
 */
export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: (
    {children, size, iconPosition, grow, cs, ...elemProps}: DeleteButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        grow={grow}
        iconPosition={iconPosition}
        cs={[deleteButtonStencil({size, iconPosition}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
