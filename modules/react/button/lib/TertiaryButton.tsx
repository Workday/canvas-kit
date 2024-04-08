import * as React from 'react';

import {baseButtonStencil} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system, brand} from '@workday/canvas-tokens-web';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '../../layout';

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
  extends: baseButtonStencil,
  // Base Styles
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    textDecoration: 'underline',
    border: 0,
    [baseButtonStencil.vars.background]: 'transparent',
    [baseButtonStencil.vars.border]: 'transparent',
    [baseButtonStencil.vars.borderRadius]: system.shape.x1,
    [baseButtonStencil.vars.label]: brand.primary.base,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    // Focus Styles
    '&:focus-visible, &.focus': {
      [baseButtonStencil.vars.background]: 'transparent',
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.primary.base,
      [baseButtonStencil.vars.boxShadowInner]: brand.common.focusOutline,
      [baseButtonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.fg.inverse,
        outerColor: brand.common.focusOutline,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [baseButtonStencil.vars.background]: system.color.bg.alt.default,
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    // Active Styles
    '&:active, &.active': {
      [baseButtonStencil.vars.background]: system.color.bg.alt.strong,
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: system.color.fg.stronger,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [baseButtonStencil.vars.background]: 'transparent',
      [baseButtonStencil.vars.border]: 'transparent',
      [baseButtonStencil.vars.label]: brand.primary.base,
      [baseButtonStencil.vars.opacity]: system.opacity.disabled,
    },
  },
  modifiers: {
    isThemeable: {
      true: {
        [systemIconStencil.vars.color]: brand.primary.base,
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: brand.primary.base,
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: brand.primary.dark,
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: brand.primary.darkest,
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: brand.primary.base,
        },
      },
    },
    variant: {
      // Inverse Styles
      inverse: {
        [baseButtonStencil.vars.background]: 'transparent',
        [baseButtonStencil.vars.border]: 'transparent',
        [baseButtonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
        // Focus Styles
        '&:focus-visible, &.focus': {
          [baseButtonStencil.vars.background]: system.color.bg.default,
          [baseButtonStencil.vars.border]: 'transparent',
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: system.color.fg.strong,
          ...focusRing({
            inset: 'inner',
            width: 2,
            separation: 2,
            innerColor: system.color.fg.strong,
            outerColor: system.color.fg.inverse,
          }),
        },
        // Hover Styles
        '&:hover, &.hover': {
          [baseButtonStencil.vars.background]: system.color.bg.default,
          [baseButtonStencil.vars.border]: 'transparent',
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Active Styles
        '&:active, &.active': {
          [baseButtonStencil.vars.background]: system.color.bg.alt.soft,
          [baseButtonStencil.vars.border]: 'transparent',
          [baseButtonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [baseButtonStencil.vars.background]: 'transparent',
          [baseButtonStencil.vars.border]: system.color.border.inverse,
          [baseButtonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
    // IconPosition Styles
    iconPosition: {
      only: {padding: 0, borderRadius: system.shape.round},
      start: {},
      end: {},
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: `calc(${system.space.x4} * 3)`,
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
      size = 'medium',
      isThemeable,
      variant,
      iconPosition,
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
        iconPosition={iconPosition}
        size={size}
        {...mergeStyles(
          elemProps,
          tertiaryButtonStencil({
            isThemeable: (isThemeable || baseIconPosition !== 'only') as any,
            variant,
            size,
            iconPosition: baseIconPosition,
          })
        )}
      >
        {children}
      </Button>
    );
  },
});
