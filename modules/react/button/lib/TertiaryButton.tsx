import * as React from 'react';

import {buttonVars, getIconPosition} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStyles, createModifiers, createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system, brand} from '@workday/canvas-tokens-web';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {Button, ButtonProps} from './Button';
import {systemIconStencil} from '../../icon';

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

const tertiaryButton = createStencil({
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    textDecoration: 'underline',
    border: 0,
    [buttonVars.default.background]: 'transparent',
    [buttonVars.default.border]: 'transparent',
    [buttonVars.default.borderRadius]: system.shape.x1,
    [buttonVars.default.label]: brand.primary.base,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    '&:focus-visible, &.focus': {
      [buttonVars.focus.background]: 'transparent',
      [buttonVars.focus.border]: 'transparent',
      [buttonVars.focus.label]: brand.primary.base,
      [buttonVars.focus.boxShadowInner]: brand.common.focusOutline,
      [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.fg.strong,
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.fg.inverse,
        outerColor: brand.common.focusOutline,
      }),
    },
    '&:hover, &.hover': {
      [buttonVars.hover.background]: system.color.bg.alt.default,
      [buttonVars.hover.border]: 'transparent',
      [buttonVars.hover.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    '&:active, &.active': {
      [buttonVars.active.background]: system.color.bg.alt.strong,
      [buttonVars.active.border]: 'transparent',
      [buttonVars.active.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: system.color.fg.stronger,
    },
    '&:disabled, &.disabled': {
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: 'transparent',
      [buttonVars.disabled.label]: brand.primary.base,
      [buttonVars.disabled.opacity]: '0.4',
    },
  },
});

export const tertiaryButtonModifiers = createModifiers({
  isThemeable: {
    true: createStyles({
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
    }),
  },
  variant: {
    inverse: createStyles({
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: system.color.bg.default,
        [buttonVars.focus.border]: 'transparent',
        [buttonVars.focus.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
        ...focusRing({
          inset: 'inner',
          width: 2,
          separation: 2,
          innerColor: system.color.fg.strong,
          outerColor: system.color.fg.inverse,
        }),
      },
      '&:hover, &.hover': {
        [buttonVars.hover.background]: system.color.bg.default,
        [buttonVars.hover.border]: 'transparent',
        [buttonVars.hover.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
      },
      '&:active, &.active': {
        [buttonVars.active.background]: system.color.bg.alt.soft,
        [buttonVars.active.border]: 'transparent',
        [buttonVars.active.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: system.color.fg.strong,
      },
      '&:disabled, &.disabled': {
        // Disabled Styles
        [buttonVars.disabled.background]: 'transparent',
        [buttonVars.disabled.border]: system.color.border.inverse,
        [buttonVars.disabled.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
      },
    }),
  },
  iconPosition: {
    largeOnly: createStyles({
      borderRadius: borderRadius.circle,
      padding: '0',
      minWidth: `calc(${system.space.x4} * 3)`,
    }),
    largeStart: createStyles({
      paddingInlineStart: space.xxs,
      paddingInlineEnd: space.xs,
    }),
    largeEnd: createStyles({paddingInlineStart: space.xs, paddingInlineEnd: space.xxs}),
    mediumOnly: createStyles({padding: '0', minWidth: space.xl, borderRadius: borderRadius.circle}),
    mediumStart: createStyles({paddingInlineStart: space.xxs, paddingInlineEnd: space.xs}),
    mediumEnd: createStyles({paddingInlineStart: space.xs, paddingInlineEnd: space.xxs}),
    smallOnly: createStyles({padding: '0', minWidth: space.l, borderRadius: borderRadius.circle}),
    smallStart: createStyles({paddingInlineStart: space.xxs, paddingInlineEnd: space.xs}),
    smallEnd: createStyles({paddingInlineStart: space.xs, paddingInlineEnd: space.xxs}),
    extraSmallOnly: createStyles({
      padding: '0',
      minWidth: space.m,
      borderRadius: borderRadius.circle,
    }),
    extraSmallStart: createStyles({paddingInlineStart: space.xxxs, paddingInlineEnd: space.xxs}),
    extraSmallEnd: createStyles({paddingInlineStart: space.xxs, paddingInlineEnd: space.xxxs}),
  },
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
        {...mergeStyles(elemProps, [
          tertiaryButton(),
          tertiaryButtonModifiers({
            isThemeable: (isThemeable || baseIconPosition !== 'only') as any,
            variant: variant,
            iconPosition: getIconPosition(size, baseIconPosition),
          }),
        ])}
      >
        {children}
      </Button>
    );
  },
});
