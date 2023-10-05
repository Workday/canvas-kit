import * as React from 'react';

import {buttonVars, ButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, cssVar} from '@workday/canvas-kit-react/common';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface PrimaryButtonProps extends Omit<ButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const primaryStyles = cs({
  [buttonVars.default.background]: cssVar(brand.primary.base),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.label]: cssVar(brand.primary.accent),
  gap: cssVar(system.space.x2),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(brand.primary.dark),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(brand.primary.base),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: cssVar(brand.primary.accent),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(brand.primary.darkest),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: cssVar(brand.primary.accent),
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(brand.primary.accent),
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: cssVar(brand.primary.base),
    [buttonVars.disabled.border]: 'transparent',
    [buttonVars.disabled.label]: cssVar(brand.primary.accent),
    [buttonVars.disabled.opacity]: '0.4',
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: cssVar(brand.primary.accent),
    },
  },
});

export const primaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    inverse: cs({
      [buttonVars.default.background]: cssVar(base.frenchVanilla100),
      [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
      [buttonVars.default.label]: cssVar(base.blackPepper400),
      '&:hover, &.hover': {
        [buttonVars.hover.background]: cssVar(base.soap300),
        [buttonVars.hover.label]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper400),
        [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.label]: cssVar(base.blackPepper400),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(base.blackPepper400),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(base.blackPepper400),
      },
      '&:active, &.active': {
        [buttonVars.active.background]: cssVar(base.soap400),
        [buttonVars.active.label]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        [buttonVars.disabled.background]: cssVar(base.frenchVanilla100),
        [buttonVars.disabled.label]: cssVar(base.blackPepper400),
        '& span .wd-icon-fill': {
          [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
        },
      },
    }),
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {
      children,
      icon,
      iconPosition = children ? undefined : 'only',
      variant,
      size,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        cs={[primaryStyles, primaryButtonModifiers({iconPosition: iconPosition, variant: variant})]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
