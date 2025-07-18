import {buttonStencil} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system, brand, base} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

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
  isThemeable?: boolean;
}

const tertiaryButtonStencil = createStencil({
  extends: buttonStencil,
  // Base Styles
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    borderWidth: px2rem(2),
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.background]: system.color.bg.transparent,
    [buttonStencil.vars.label]: brand.primary.base,
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.transparent,
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
      [buttonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [buttonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: 'currentColor',
      textDecoration: 'underline',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.transparent,
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
      },
      start: {},
      end: {},
    },
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: 'currentColor',
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
          [buttonStencil.vars.boxShadowInner]: system.color.border.primary.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse,
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.soft,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: calc.multiply(system.space.x4, 3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x10,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x8,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x6,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x1,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x1,
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
      isThemeable,
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
    const baseIconPosition = iconPosition
      ? iconPosition
      : icon
      ? children
        ? 'start'
        : 'only'
      : undefined;

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
            iconPosition: baseIconPosition,
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
