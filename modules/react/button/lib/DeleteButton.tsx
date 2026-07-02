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
export interface DeleteButtonProps extends ButtonProps {
  /**
   * Variant has an option for `outline` which will reverse the styling of the button
   */
  variant?: 'outline';
}

const deleteButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: system.legacy.color.brand.accent.critical,
    [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      system.color.fg.inverse
    ),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.legacy.color.brand.accent.critical,
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        system.color.fg.inverse
      ),
      [buttonStencil.vars.boxShadowInner]: system.legacy.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: cssVar(
        brand.critical700,
        colorSpace.hover({
          color: system.legacy.color.brand.accent.critical,
          fallback: system.legacy.color.brand.accent.critical,
          colorType: 'accent',
        })
      ),
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.hover.icon,
        system.color.fg.inverse
      ),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: cssVar(
        brand.critical800,
        colorSpace.pressed({
          color: system.legacy.color.brand.accent.critical,
          fallback: system.legacy.color.brand.accent.critical,
          colorType: 'accent',
        })
      ),
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        system.color.fg.inverse
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.legacy.color.brand.accent.critical,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.inverse
      ),
      [buttonStencil.vars.label]: system.color.fg.inverse,
    },
  },
  modifiers: {
    variant: {
      outline: {
        // Default Styles
        [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
        [buttonStencil.vars.border]: system.color.border.default,
        [buttonStencil.vars.label]: system.legacy.color.brand.fg.critical.default,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
          [buttonStencil.vars.border]: system.legacy.color.brand.border.critical,
          [buttonStencil.vars.label]: system.legacy.color.brand.fg.critical.default,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.legacy.color.surface.default,
          [buttonStencil.vars.border]: system.legacy.color.border.default,
          [buttonStencil.vars.label]: system.legacy.color.brand.fg.critical.default,
          [buttonStencil.vars.boxShadowInner]: system.color.focus.inverse,
          [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
          [buttonStencil.vars.border]: system.legacy.color.brand.border.critical,
          [buttonStencil.vars.label]: system.legacy.color.brand.fg.critical.default,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
          [buttonStencil.vars.label]: system.legacy.color.brand.fg.critical.default,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        },
      },
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
    {children, size, iconPosition, grow, variant, cs, ...elemProps}: DeleteButtonProps,
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
        cs={[deleteButtonStencil({variant, size, iconPosition}), cs]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
