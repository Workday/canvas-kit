import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {colorSpace, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {buttonColorPropVars, buttonStencil} from './BaseButton';
import {Button, ButtonProps} from './Button';
import {v14TertiaryButtonStencil} from './deprecated/v14TertiaryButtonStencil';

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
  /**
   * This data attributes affords toggling Tertiary Button styles to pre-DSR styles
   * to look like the former v14 Tertiary Buttons.
   *
   * This functionality is temporary and will be removed in the next major version of Canvas Kit.
   * @default undefined
   */
  'data-dsr-off'?: boolean;
}

const tertiaryButtonStencil = createStencil({
  extends: buttonStencil,
  // Base Styles
  base: {
    paddingInline: system.padding.xs,
    minWidth: 'auto',
    borderWidth: px2rem(2),
    [buttonStencil.vars.borderRadius]: system.shape.full,
    [buttonStencil.vars.background]: system.color.surface.transparent,

    [buttonStencil.vars.label]: system.color.fg.default,
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.surface.transparent,

      [buttonStencil.vars.label]: system.color.fg.default,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.label]: system.color.fg.contrast.default,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.focus.inverse,

        outerColor: system.color.brand.focus.primary,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.soft,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.hover,
      }),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      textDecoration: 'underline',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: colorSpace.darken({
        color: system.color.surface.transparent,
        fallback: system.color.bg.alt.default,
        mixinColor: system.color.surface.overlay.mixin,
        mixinValue: system.opacity.surface.pressed,
      }),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, 'currentColor'),
      textDecoration: 'underline',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      textDecoration: 'none',
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [buttonStencil.vars.background]: system.color.surface.transparent,
      [buttonStencil.vars.label]: system.color.fg.default,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, 'currentColor'),
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          system.color.fg.default
        ),
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        '&:disabled, &.disabled': {
          [buttonStencil.vars.opacity]: system.opacity.disabled,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.disabled.icon,
            system.color.fg.default
          ),
        },
      },
      start: {},
      end: {},
    },
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: system.color.surface.transparent,
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
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, 'currentColor'),
        },
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.surface.inverse,

          [buttonStencil.vars.label]: system.color.fg.contrast.default,
          [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, 'currentColor'),
          ...focusRing({
            width: 2,
            separation: 2,
            innerColor: system.color.border.contrast.default,
            outerColor: system.color.focus.inverse,
          }),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.darken({
            color: system.color.surface.transparent,
            fallback: system.color.bg.transparent.stronger,
            mixinColor: system.color.surface.overlay.mixin,
            mixinValue: system.opacity.surface.pressed,
          }),
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
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: system.size.lg,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.padding.xs,
        paddingInlineEnd: system.padding.sm,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.padding.sm,
        paddingInlineEnd: system.padding.xs,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.size.md,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.padding.xs,
        paddingInlineEnd: system.padding.sm,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.padding.sm,
        paddingInlineEnd: system.padding.xs,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.size.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.padding.xs,
        paddingInlineEnd: system.padding.sm,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.padding.sm,
        paddingInlineEnd: system.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.size.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.padding.xxs,
        paddingInlineEnd: system.padding.xs,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.padding.xs,
        paddingInlineEnd: system.padding.xxs,
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
      'data-dsr-off': dataDSROff,
      ...elemProps
    }: TertiaryButtonProps,
    ref,
    Element
  ) => {
    const baseIconPosition = iconPosition
      ? iconPosition
      : icon
        ? children
          ? 'start'
          : 'only'
        : undefined;
    const tertiaryStencil = dataDSROff ? v14TertiaryButtonStencil : tertiaryButtonStencil;

    return (
      <Button
        as={Element}
        ref={ref}
        icon={icon}
        size={size}
        iconPosition={iconPosition}
        grow={grow}
        data-dsr-off={dataDSROff}
        cs={[
          tertiaryStencil({
            grow,
            iconPosition: baseIconPosition,
            size,
            variant,
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
