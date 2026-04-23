import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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
    [buttonStencil.vars.background]: system.color.brand.accent.critical,
    [buttonStencil.vars.borderRadius]: system.shape.full,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      system.color.fg.inverse
    ),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.brand.accent.critical,
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: buttonColorPropVars.focus.icon,
      [buttonStencil.vars.boxShadowInner]: system.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.color.brand.focus.primary,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.brand.accent.critical,
        fallback: brand.error.dark,
        mixinColor: system.color.accent.overlay.mixin,
        mixinValue: system.opacity.accent.hover,
      }),
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        system.color.fg.inverse
      ),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.brand.accent.critical,
        fallback: brand.error.darkest,
        mixinColor: system.color.accent.overlay.mixin,
        mixinValue: system.opacity.accent.pressed,
      }),
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        system.color.fg.inverse
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.color.brand.accent.critical,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.inverse
      ),
      [buttonStencil.vars.label]: system.color.fg.inverse,
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
