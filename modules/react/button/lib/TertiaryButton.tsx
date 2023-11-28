import * as React from 'react';

import {buttonVars, getIconPosition} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar, createModifiers} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system, brand, base} from '@workday/canvas-tokens-web';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
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
  isThemeable?: boolean;
}

const tertiaryStyles = createStyles({
  paddingInline: cssVar(system.space.x2, '0.5rem'),
  minWidth: 'auto',
  textDecoration: 'underline',
  border: 0,
  // Default Styles
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.x1, '0.25rem'),
  [buttonVars.default.label]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
  [buttonVars.default.icon]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
  // Hover Styles
  [buttonVars.hover.background]: cssVar(base.soap200, 'rgba(241, 242, 243, 1)'),
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: cssVar(brand.primary.dark, 'rgba(0,92,184,1)'),
  [buttonVars.hover.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
  [buttonVars.focus.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
  [buttonVars.focus.boxShadowInner]: cssVar(brand.common.focusOutline, 'rgba(8,117,226,1)'),
  [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline, 'rgba(8,117,226,1)'),
  // Active Styles
  [buttonVars.active.background]: cssVar(base.soap300, 'rgba(232,235,237,1)'),
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: cssVar(brand.primary.dark, 'rgba(0,92,184,1)'),
  [buttonVars.active.icon]: cssVar(base.blackPepper500, 'rgba(31,31,31,1)'),
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: cssVar(base.frenchVanilla100, '#fff'),
  [buttonVars.disabled.label]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
  [buttonVars.disabled.icon]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
  [buttonVars.disabled.opacity]: '0.4',

  '&:focus-visible, &.focus': {
    ...focusRing({
      width: 2,
      separation: 0,
      innerColor: cssVar(base.frenchVanilla100, cssVar(buttonVars.focus.boxShadowInner)),
      outerColor: cssVar(brand.common.focusOutline, cssVar(buttonVars.focus.boxShadowOuter)),
    }),
  },
});

export const tertiaryButtonModifiers = createModifiers({
  isThemeable: {
    true: createStyles({
      [buttonVars.default.icon]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
      [buttonVars.hover.icon]: cssVar(brand.primary.dark, 'rgba(0,92,184,1)'),
      [buttonVars.focus.icon]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
      [buttonVars.active.icon]: cssVar(brand.primary.dark, 'rgba(0,92,184,1)'),
      [buttonVars.disabled.icon]: cssVar(brand.primary.base, 'rgba(8,117,226,1)'),
    }),
  },
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.label]: cssVar(base.frenchVanilla100, '#fff'),
      [buttonVars.default.icon]: cssVar(base.frenchVanilla100, '#fff'),
      // Hover Styles
      [buttonVars.hover.background]: cssVar(base.frenchVanilla100, '#fff'),
      [buttonVars.hover.border]: 'transparent',
      [buttonVars.hover.label]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      [buttonVars.hover.icon]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      // Focus Styles
      [buttonVars.focus.background]: cssVar(base.frenchVanilla100, '#fff'),
      [buttonVars.focus.border]: 'transparent',
      [buttonVars.focus.label]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      [buttonVars.focus.icon]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      // Active Styles
      [buttonVars.active.background]: cssVar(base.soap200, 'rgba(241, 242, 243, 1)'),
      [buttonVars.active.border]: 'transparent',
      [buttonVars.active.label]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      [buttonVars.active.icon]: cssVar(base.blackPepper400, 'rgba(51, 51, 51, 1)'),
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: cssVar(base.frenchVanilla100, '#fff'),
      [buttonVars.disabled.label]: cssVar(base.frenchVanilla100, '#fff'),
      [buttonVars.disabled.icon]: cssVar(base.frenchVanilla100, '#fff'),

      '&:focus-visible, &.focus': {
        ...focusRing({
          inset: 'inner',
          width: 2,
          separation: 2,
          innerColor: cssVar(base.blackPepper400, cssVar(buttonVars.focus.boxShadowInner)),
          outerColor: cssVar(base.frenchVanilla100, cssVar(buttonVars.focus.boxShadowOuter)),
        }),
      },
    }),
  },
  iconPosition: {
    largeOnly: createStyles({
      borderRadius: borderRadius.circle,
      padding: '0',
      minWidth: `calc(${cssVar(system.space.x4, '1rem')} * 3)`,
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
