import * as React from 'react';

import {buttonVars, getIconPosition} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStyles, createModifiers} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system, brand, base} from '@workday/canvas-tokens-web';
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

const tertiaryStyles = createStyles({
  paddingInline: system.space.x2,
  minWidth: 'auto',
  textDecoration: 'underline',
  border: 0,
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: system.shape.x1,
  [buttonVars.default.label]: brand.primary.base,
  [systemIconStencil.vars.color]: base.blackPepper400,
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: brand.primary.base,
    [buttonVars.focus.boxShadowInner]: brand.common.focusOutline,
    [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
    [systemIconStencil.vars.color]: base.blackPepper400,
    ...focusRing({
      width: 2,
      separation: 0,
      innerColor: base.frenchVanilla100,
      outerColor: brand.common.focusOutline,
    }),
  },
  '&:hover, &.hover': {
    [buttonVars.hover.background]: base.soap300,
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: brand.primary.dark,
    [systemIconStencil.vars.color]: base.blackPepper400,
  },
  '&:active, &.active': {
    [buttonVars.active.background]: base.soap400,
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: brand.primary.darkest,
    [systemIconStencil.vars.color]: base.blackPepper500,
  },
  '&:disabled, &.disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: 'transparent',
    [buttonVars.disabled.label]: brand.primary.base,
    [buttonVars.disabled.opacity]: '0.4',
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
      [buttonVars.default.label]: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
      '&:focus-visible, &.focus': {
        [buttonVars.hover.background]: base.frenchVanilla100,
        [buttonVars.hover.border]: 'transparent',
        [buttonVars.hover.label]: base.blackPepper400,
        [systemIconStencil.vars.color]: base.blackPepper400,
        ...focusRing({
          inset: 'inner',
          width: 2,
          separation: 2,
          innerColor: base.blackPepper400,
          outerColor: base.frenchVanilla100,
        }),
      },
      '&:hover, &.hover': {
        [buttonVars.focus.background]: base.frenchVanilla100,
        [buttonVars.focus.border]: 'transparent',
        [buttonVars.focus.label]: base.blackPepper400,
        [systemIconStencil.vars.color]: base.blackPepper400,
      },
      '&:active, &.active': {
        [buttonVars.active.background]: base.soap200,
        [buttonVars.active.border]: 'transparent',
        [buttonVars.active.label]: base.blackPepper400,
        [systemIconStencil.vars.color]: base.blackPepper400,
      },

      '&:disabled, &.disabled': {
        // Disabled Styles
        [buttonVars.disabled.background]: 'transparent',
        [buttonVars.disabled.border]: base.frenchVanilla100,
        [buttonVars.disabled.label]: base.frenchVanilla100,
        [systemIconStencil.vars.color]: base.frenchVanilla100,
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
          tertiaryStyles,
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
