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
export interface SecondaryButtonProps extends Omit<ButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const secondaryStyles = cs({
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: cssVar(base.blackPepper400),
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.label]: cssVar(base.blackPepper400),
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(base.blackPepper400),
  },
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(base.blackPepper400),
    [buttonVars.hover.border]: cssVar(base.blackPepper400),
    [buttonVars.hover.label]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: cssVar(base.blackPepper400),
    [buttonVars.focus.label]: cssVar(base.blackPepper400),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(base.blackPepper400),
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(base.blackPepper500),
    [buttonVars.active.border]: cssVar(base.blackPepper500),
    [buttonVars.active.label]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: cssVar(base.blackPepper400),
    [buttonVars.disabled.label]: cssVar(base.blackPepper400),
    [buttonVars.disabled.opacity]: '0.4',
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
    },
  },
});

export const secondaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    inverse: cs({
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: cssVar(base.frenchVanilla100),
      [buttonVars.default.label]: cssVar(base.frenchVanilla100),
      '&:hover, &.hover': {
        [buttonVars.hover.background]: cssVar(base.soap300),
        [buttonVars.hover.border]: cssVar(base.soap300),
        [buttonVars.hover.label]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.border]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper500),
        [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.label]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:active, &.active': {
        [buttonVars.active.background]: cssVar(base.soap400),
        [buttonVars.active.border]: cssVar(base.soap400),
        [buttonVars.active.label]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: cssVar(base.blackPepper500),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(base.frenchVanilla100),
      },
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        [buttonVars.disabled.background]: 'transparent',
        [buttonVars.disabled.border]: cssVar(base.frenchVanilla100),
        [buttonVars.disabled.label]: cssVar(base.frenchVanilla100),
        '& span .wd-icon-fill': {
          [buttonVars.disabled.icon]: cssVar(base.frenchVanilla100),
        },
      },
    }),
  },
});

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
  Component: (
    {
      children,
      icon,
      iconPosition = children ? undefined : 'only',
      variant,
      ...elemProps
    }: SecondaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <Button
        as={Element}
        ref={ref}
        icon={icon}
        iconPosition={iconPosition}
        cs={[
          secondaryStyles,
          secondaryButtonModifiers({iconPosition: iconPosition, variant: variant}),
        ]}
        {...elemProps}
      >
        {children}
      </Button>
    );
  },
});
