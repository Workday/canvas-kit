import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {
  createComponent,
  cs,
  createModifiers,
  getTheme,
  cssVar,
  newTheme,
} from '@workday/canvas-kit-react/common';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';

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

const theme = getTheme();

const SecondaryStyles = cs({
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: colors.blackPepper400,
  [buttonVars.default.borderRadius]: borderRadius.circle,
  [buttonVars.default.color]: colors.blackPepper400,
  '&:hover, &.hover': {
    [buttonVars.hover.background]: colors.blackPepper400,
    [buttonVars.hover.border]: colors.blackPepper400,
    [buttonVars.hover.color]: cssVar(newTheme.colors.neutral.contrast),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(newTheme.colors.neutral.contrast),
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: colors.blackPepper400,
    [buttonVars.focus.color]: colors.blackPepper400,
    [buttonVars.focus.boxShadowInner]: theme.canvas.palette.neutral.contrast,
    [buttonVars.focus.boxShadowOuter]: theme.canvas.palette.primary.main,
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: colors.blackPepper400,
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: colors.blackPepper500,
    [buttonVars.active.border]: colors.blackPepper500,
    [buttonVars.active.color]: cssVar(newTheme.colors.neutral.contrast),
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: cssVar(newTheme.colors.neutral.contrast),
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: colors.blackPepper400,
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: colors.blackPepper400,
    [buttonVars.disabled.color]: colors.blackPepper400,
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: colors.blackPepper400,
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
      [buttonVars.default.border]: colors.frenchVanilla100,
      [buttonVars.default.borderRadius]: borderRadius.circle,
      [buttonVars.default.color]: colors.frenchVanilla100,
      '&:hover, &.hover': {
        [buttonVars.hover.background]: colors.soap300,
        [buttonVars.hover.color]: colors.blackPepper500,
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: colors.blackPepper500,
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: colors.frenchVanilla100,
        [buttonVars.focus.border]: colors.frenchVanilla100,
        [buttonVars.focus.boxShadowInner]: 'currentColor',
        [buttonVars.focus.boxShadowOuter]: colors.frenchVanilla100,
        [buttonVars.focus.color]: colors.blackPepper500,
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: colors.blackPepper500,
        },
      },
      '&:active, &.active': {
        [buttonVars.active.background]: colors.soap400,
        [buttonVars.active.border]: colors.soap400,
        [buttonVars.active.color]: colors.blackPepper500,
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: colors.blackPepper500,
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: colors.frenchVanilla100,
      },
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        [buttonVars.disabled.background]: 'transparent',
        [buttonVars.disabled.border]: colors.frenchVanilla100,
        [buttonVars.disabled.color]: colors.frenchVanilla100,
        '& span .wd-icon-fill': {
          [buttonVars.disabled.icon]: colors.frenchVanilla100,
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
      iconPosition,
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
          SecondaryStyles,
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
