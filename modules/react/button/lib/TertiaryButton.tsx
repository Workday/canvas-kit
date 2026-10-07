import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
    [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
    [buttonStencil.vars.label]: system.color.fg.default,
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    [buttonStencil.vars.border]: system.color.border.transparent,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.legacy.color.surface.default,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.legacy.color.focus.inverse,
      [buttonStencil.vars.boxShadowOuter]: system.legacy.color.brand.focus.primary,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.legacy.color.surface.overlay.hover.default,
      [systemIconStencil.vars.color]: system.color.fg.stronger,
      [buttonStencil.vars.label]: system.color.fg.stronger,
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.legacy.color.surface.overlay.pressed.default,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
      [buttonStencil.vars.label]: system.color.fg.stronger,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.legacy.color.surface.overlay.hover.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.legacy.color.surface.inverse,
          [buttonStencil.vars.label]: system.color.fg.contrast.default,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.legacy.color.focus.inverse,
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.legacy.color.surface.overlay.pressed.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [buttonStencil.vars.background]: system.legacy.color.surface.transparent,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
        },
      },
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.lg,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.md,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.sm,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.legacy.size.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.legacy.padding.xxs,
        paddingInlineEnd: system.legacy.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.legacy.padding.xs,
        paddingInlineEnd: system.legacy.padding.xxs,
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
            iconPosition,
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
