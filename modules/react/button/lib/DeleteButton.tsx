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
    [buttonStencil.vars.background]: cssVar(system.color.brand.accent.critical, brand.error.base),
    [buttonStencil.vars.borderRadius]: cssVar(system.shape.full, system.shape.round),
    [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
    [systemIconStencil.vars.color]: cssVar(
      system.color.fg.inverse,
      cssVar(buttonColorPropVars.default.icon, brand.error.accent)
    ),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(system.color.brand.accent.critical, brand.error.base),
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.inverse,
        cssVar(buttonColorPropVars.focus.icon, brand.error.accent)
      ),
      [buttonStencil.vars.boxShadowInner]: cssVar(
        system.color.focus.inverse,
        cssVar(system.color.border.inverse.default, base.neutral0)
      ),
      [buttonStencil.vars.boxShadowOuter]: cssVar(
        system.color.brand.focus.primary,
        brand.common.focusOutline
      ),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.brand.accent.critical,
        brand.error.dark,
        system.color.accent.overlay.mixin,
        system.opacity.accent.hover
      ),
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.inverse,
        cssVar(buttonColorPropVars.focus.icon, brand.error.accent)
      ),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.brand.accent.critical,
        brand.error.darkest,
        system.color.accent.overlay.mixin,
        system.opacity.accent.pressed
      ),
      [buttonStencil.vars.label]: cssVar(system.color.fg.inverse, brand.error.accent),
      [systemIconStencil.vars.color]: cssVar(
        system.color.fg.inverse,
        cssVar(buttonColorPropVars.focus.icon, brand.error.accent)
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
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
