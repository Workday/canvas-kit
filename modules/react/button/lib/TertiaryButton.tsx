import * as React from 'react';

import {buttonVars, getIconPosition} from './BaseButton';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStyles, createModifiers} from '@workday/canvas-kit-styling';
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
  paddingInline: system.space.x2,
  minWidth: 'auto',
  textDecoration: 'underline',
  border: 0,
  // Default Styles
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: system.shape.x1,
  [buttonVars.default.label]: brand.primary.base,
  [buttonVars.default.icon]: base.blackPepper400,
  // Hover Styles
  [buttonVars.hover.background]: base.soap300,
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: brand.primary.dark,
  [buttonVars.hover.icon]: base.blackPepper400,
  // Focus Styles
  [buttonVars.focus.background]: 'transparent',
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: brand.primary.base,
  [buttonVars.focus.icon]: base.blackPepper400,
  [buttonVars.focus.boxShadowInner]: brand.common.focusOutline,
  [buttonVars.focus.boxShadowOuter]: brand.common.focusOutline,
  // Active Styles
  [buttonVars.active.background]: base.soap400,
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: brand.primary.darkest,
  [buttonVars.active.icon]: base.blackPepper500,
  // Disabled Styles
  [buttonVars.disabled.background]: 'transparent',
  [buttonVars.disabled.border]: 'transparent',
  [buttonVars.disabled.label]: brand.primary.base,
  [buttonVars.disabled.icon]: base.blackPepper400,
  [buttonVars.disabled.opacity]: '0.4',

  '&:focus-visible, &.focus': {
    ...focusRing({
      width: 2,
      separation: 0,
      innerColor: base.frenchVanilla100,
      outerColor: brand.common.focusOutline,
    }),
  },
});

export const tertiaryButtonModifiers = createModifiers({
  isThemeable: {
    true: createStyles({
      [buttonVars.default.icon]: brand.primary.base,
      [buttonVars.hover.icon]: brand.primary.dark,
      [buttonVars.focus.icon]: brand.primary.base,
      [buttonVars.active.icon]: brand.primary.darkest,
      [buttonVars.disabled.icon]: brand.primary.base,
    }),
  },
  variant: {
    inverse: createStyles({
      // Default Styles
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.label]: base.frenchVanilla100,
      [buttonVars.default.icon]: base.frenchVanilla100,
      // Hover Styles
      [buttonVars.hover.background]: base.frenchVanilla100,
      [buttonVars.hover.border]: 'transparent',
      [buttonVars.hover.label]: base.blackPepper400,
      [buttonVars.hover.icon]: base.blackPepper400,
      // Focus Styles
      [buttonVars.focus.background]: base.frenchVanilla100,
      [buttonVars.focus.border]: 'transparent',
      [buttonVars.focus.label]: base.blackPepper400,
      [buttonVars.focus.icon]: base.blackPepper400,
      // Active Styles
      [buttonVars.active.background]: base.soap200,
      [buttonVars.active.border]: 'transparent',
      [buttonVars.active.label]: base.blackPepper400,
      [buttonVars.active.icon]: base.blackPepper400,
      // Disabled Styles
      [buttonVars.disabled.background]: 'transparent',
      [buttonVars.disabled.border]: base.frenchVanilla100,
      [buttonVars.disabled.label]: base.frenchVanilla100,
      [buttonVars.disabled.icon]: base.frenchVanilla100,

      '&:focus-visible, &.focus': {
        ...focusRing({
          inset: 'inner',
          width: 2,
          separation: 2,
          innerColor: base.blackPepper400,
          outerColor: base.frenchVanilla100,
        }),
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
