import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, cssVar} from '@workday/canvas-kit-react/common';
import {base, brand, system} from '@workday/canvas-tokens-web';

/**
 * Extends all the style properties from Box to our buttons as well as props from BaseButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface SecondaryButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const secondaryStyles = cs({
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: cssVar(base.blackPepper400),
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.color]: cssVar(base.blackPepper400),
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(base.blackPepper400),
  },
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(base.blackPepper400),
    [buttonVars.hover.border]: cssVar(base.blackPepper400),
    [buttonVars.hover.color]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: cssVar(base.blackPepper400),
    [buttonVars.focus.color]: cssVar(base.blackPepper400),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(base.blackPepper400),
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(base.blackPepper500),
    [buttonVars.active.border]: cssVar(base.blackPepper500),
    [buttonVars.active.color]: cssVar(brand.primary.accent),
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: cssVar(brand.primary.accent),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: cssVar(base.blackPepper400),
    [buttonVars.disabled.color]: cssVar(base.blackPepper400),
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: cssVar(base.blackPepper400),
    },
  },
});

export const SecondaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-button-icon-start',
    end: 'canvas-button-icon-end',
    only: 'canvas-button-icon-only',
  },
  variant: {
    inverse: cs({
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: cssVar(base.frenchVanilla100),
      [buttonVars.default.color]: cssVar(base.frenchVanilla100),
      '&:hover, &.hover': {
        [buttonVars.hover.background]: cssVar(base.soap300),
        [buttonVars.hover.border]: cssVar(base.soap300),
        [buttonVars.hover.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.border]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.boxShadowInner]: cssVar(base.blackPepper500),
        [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:active, &.active': {
        [buttonVars.active.background]: cssVar(base.soap400),
        [buttonVars.active.border]: cssVar(base.soap400),
        [buttonVars.active.color]: cssVar(base.blackPepper500),
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
        [buttonVars.disabled.color]: cssVar(base.frenchVanilla100),
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
      colors,
      icon,
      iconPosition = children ? undefined : 'only',
      shouldMirrorIcon,
      size,
      variant,
      ...elemProps
    }: SecondaryButtonProps,
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
          secondaryStyles,
          SecondaryButtonModifiers({
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
