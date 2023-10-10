import * as React from 'react';

import {buttonVars, ButtonContainerProps, focusRingVars} from './BaseButton';
import {createComponent, cs, createModifiers, cssVar} from '@workday/canvas-kit-react/common';
import {system, brand, base} from '@workday/canvas-tokens-web';
import {borderRadius, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {Button} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface TertiaryButtonProps extends Omit<ButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
  isThemeable?: boolean;
}

const tertiaryStyles = cs({
  paddingInline: cssVar(system.space.x2),
  minWidth: 'auto',
  textDecoration: 'underline',
  border: 0,
  // Default Styles
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.medium),
  [buttonVars.default.label]: cssVar(brand.primary.base),
  [buttonVars.default.icon]: cssVar(base.blackPepper400),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(base.soap200),
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: cssVar(brand.primary.dark),
  [buttonVars.hover.icon]: cssVar(base.blackPepper500),
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: cssVar(brand.primary.base),
  [buttonVars.focus.icon]: cssVar(base.blackPepper500),
  [buttonVars.focus.boxShadowInner]: cssVar(brand.common.focusOutline),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
  // Focus Ring Styles
  [focusRingVars.width]: '0px',
  // Active Styles
  [buttonVars.active.background]: cssVar(base.soap300),
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: cssVar(brand.primary.dark),
  [buttonVars.active.icon]: cssVar(base.blackPepper500),
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: cssVar(base.frenchVanilla100),
  [buttonVars.disabled.label]: cssVar(brand.primary.base),
  [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
  [buttonVars.disabled.opacity]: '0.4',
});

export const tertiaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-tertiary-button-icon-start',
    end: 'canvas-tertiary-button-icon-end',
    only: 'canvas-tertiary-button-icon-only',
  },
  variant: {
    inverse: cs({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.label]: cssVar(base.frenchVanilla100),
      [buttonVars.default.icon]: cssVar(base.frenchVanilla100),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.frenchVanilla100),
      [buttonVars.hover.border]: 'transparent',
      [buttonVars.hover.label]: cssVar(base.blackPepper400),
      [buttonVars.hover.icon]: cssVar(base.blackPepper400),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
      [buttonVars.focus.border]: 'transparent',
      [buttonVars.focus.label]: cssVar(base.blackPepper400),
      [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper400),
      [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
      [buttonVars.focus.icon]: cssVar(base.blackPepper400),
      // Focus Ring Styles
      [focusRingVars.width]: '2px',
      [focusRingVars.separation]: '0px',
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap200),
      [buttonVars.active.border]: 'transparent',
      [buttonVars.active.label]: cssVar(base.blackPepper400),
      [buttonVars.active.icon]: cssVar(base.blackPepper400),
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: cssVar(base.frenchVanilla100),
      [buttonVars.disabled.label]: cssVar(base.frenchVanilla100),
      [buttonVars.disabled.icon]: cssVar(base.frenchVanilla100),
    }),
  },
  size: {
    large: cs({
      '&.canvas-tertiary-button-icon-only': {
        borderRadius: borderRadius.circle,
        padding: '0',
        minWidth: `${spaceNumbers.xl + spaceNumbers.xxs}rem`,
      },
      '&.canvas-tertiary-button-icon-start': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-tertiary-button-icon-end': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xxs,
      },
    }),
    medium: cs({
      '&.canvas-tertiary-button-icon-only': {
        padding: '0',
        minWidth: space.xl,
        borderRadius: borderRadius.circle,
      },
      '&.canvas-tertiary-button-icon-start': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-tertiary-button-icon-end': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xxs,
      },
    }),
    small: cs({
      '&.canvas-tertiary-button-icon-only': {
        padding: '0',
        minWidth: space.l,
        borderRadius: borderRadius.circle,
      },
      '&.canvas-tertiary-button-icon-start': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xs,
      },
      '&.canvas-tertiary-button-icon-end': {
        paddingInlineStart: space.xs,
        paddingInlineEnd: space.xxs,
      },
    }),
    extraSmall: cs({
      '&.canvas-tertiary-button-icon-only': {
        padding: '0',
        minWidth: space.m,
        borderRadius: borderRadius.circle,
      },
      '&.canvas-tertiary-button-icon-start': {
        paddingInlineStart: space.xxxs,
        paddingInlineEnd: space.xxs,
      },
      '&.canvas-tertiary-button-icon-end': {
        paddingInlineStart: space.xxs,
        paddingInlineEnd: space.xxxs,
      },
    }),
  },
  isThemeable: {
    true: cs({
      [buttonVars.default.icon]: cssVar(brand.primary.base),
      [buttonVars.hover.icon]: cssVar(brand.primary.dark),
      [buttonVars.focus.icon]: cssVar(brand.primary.base),
      [buttonVars.active.icon]: cssVar(brand.primary.dark),
      [buttonVars.disabled.icon]: cssVar(brand.primary.base),
    }),
  },
});

export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
  Component: (
    {
      children,
      icon,
      colors,
      size = 'medium',
      iconPosition = children ? undefined : 'only',
      variant,
      focusRing = variant === 'inverse' ? 'inset' : 'both',
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
        iconPosition={iconPosition}
        size={size}
        focusRing={focusRing}
        cs={[
          tertiaryStyles,
          tertiaryButtonModifiers({
            iconPosition: iconPosition,
            variant: variant,
            size: size,
          }),
        ]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
