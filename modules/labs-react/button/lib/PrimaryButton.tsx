import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, cssVar} from '@workday/canvas-kit-react/common';
import {base, brand, system} from '@workday/canvas-tokens-web';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface PrimaryButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const primaryStyles = cs({
  [buttonVars.default.background]: cssVar(brand.primary.base),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.color]: cssVar(brand.primary.accent),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(brand.primary.dark),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.color]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(brand.primary.base),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.color]: cssVar(brand.primary.accent),
    [buttonVars.focus.boxShadowInner]: cssVar(brand.primary.accent),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.primary.base),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(brand.primary.darkest),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.color]: cssVar(brand.primary.accent),
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
    [buttonVars.disabled.color]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: cssVar(brand.primary.accent),
    },
  },
});

export const PrimaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    inverse: cs({
      [buttonVars.default.background]: cssVar(system.color.bg.default),
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
      [buttonVars.default.color]: cssVar(base.blackPepper400),
      '&:hover, &.hover': {
        [buttonVars.hover.background]: cssVar(system.color.bg.hover),
        [buttonVars.hover.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.border]: cssVar(base.blackPepper400),
        [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper400),
        [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.color]: cssVar(base.blackPepper400),
        boxShadow: `${cssVar(buttonVars.focus.boxShadowInner)} 0px 0px 0px 1px, ${cssVar(
          buttonVars.focus.boxShadowOuter
        )} 0px 0px 0px 3px`,
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(base.blackPepper400),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(base.blackPepper400),
      },
      '&:active, &.active': {
        [buttonVars.active.background]: cssVar(system.color.bg.active),
        [buttonVars.active.border]: 'transparent',
        [buttonVars.active.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        [buttonVars.disabled.background]: cssVar(base.frenchVanilla100),
        [buttonVars.disabled.color]: cssVar(base.blackPepper400),
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
      iconPosition,
      shouldMirrorIcon,
      size,
      variant,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        type="button"
        size={size}
        cs={[
          primaryStyles,
          PrimaryButtonModifiers({
            iconPosition: iconPosition,
            variant: variant,
          }),
        ]}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}

        {icon && iconPosition === 'only' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </BaseButton>
    );
  },
});
