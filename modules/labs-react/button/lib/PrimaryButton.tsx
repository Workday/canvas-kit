import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, getTheme} from '@workday/canvas-kit-react/common';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';

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

const theme = getTheme();

const PrimaryStyles = cs({
  [buttonVars.default.background]: theme.canvas.palette.primary.main,
  [buttonVars.default.border]: theme.canvas.palette.primary.main,
  [buttonVars.default.borderRadius]: borderRadius.circle,
  [buttonVars.default.color]: theme.canvas.palette.primary.contrast,
  '&:hover, &.hover': {
    [buttonVars.hover.background]: theme.canvas.palette.primary.dark,
    [buttonVars.hover.border]: theme.canvas.palette.primary.dark,
    [buttonVars.hover.color]: theme.canvas.palette.primary.contrast,
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: theme.canvas.palette.primary.contrast,
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: theme.canvas.palette.primary.main,
    [buttonVars.focus.border]: theme.canvas.palette.primary.main,
    [buttonVars.focus.color]: theme.canvas.palette.primary.contrast,
    [buttonVars.focus.boxShadowInner]: theme.canvas.palette.primary.contrast,
    [buttonVars.focus.boxShadowOuter]: theme.canvas.palette.primary.main,
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: theme.canvas.palette.primary.contrast,
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: theme.canvas.palette.primary.darkest,
    [buttonVars.active.border]: theme.canvas.palette.primary.darkest,
    [buttonVars.active.color]: theme.canvas.palette.primary.contrast,
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: theme.canvas.palette.primary.contrast,
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: theme.canvas.palette.primary.contrast,
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: theme.canvas.palette.primary.main,
    [buttonVars.disabled.border]: theme.canvas.palette.primary.main,
    [buttonVars.disabled.color]: theme.canvas.palette.primary.contrast,
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: theme.canvas.palette.primary.contrast,
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
      [buttonVars.default.background]: theme.canvas.palette.primary.contrast,
      [buttonVars.default.border]: theme.canvas.palette.primary.contrast,
      [buttonVars.default.borderRadius]: borderRadius.circle,
      [buttonVars.default.color]: colors.blackPepper400,
      '&:hover, &.hover': {
        [buttonVars.hover.background]: colors.soap300,
        [buttonVars.hover.color]: colors.blackPepper500,
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: colors.blackPepper500,
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: theme.canvas.palette.primary.contrast,
        [buttonVars.focus.border]: colors.blackPepper400,
        [buttonVars.focus.boxShadowInner]: colors.blackPepper400,
        [buttonVars.focus.boxShadowOuter]: theme.canvas.palette.primary.contrast,
        [buttonVars.focus.color]: colors.blackPepper400,
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: colors.blackPepper400,
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: colors.blackPepper400,
      },
      '&:active, &.active': {
        [buttonVars.active.background]: colors.soap400,
        [buttonVars.active.border]: colors.soap400,
        [buttonVars.active.color]: colors.blackPepper500,
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: colors.blackPepper500,
        },
      },
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        [buttonVars.disabled.background]: colors.frenchVanilla100,
        [buttonVars.disabled.color]: colors.blackPepper400,
        '& span .wd-icon-fill': {
          [buttonVars.disabled.icon]: colors.blackPepper400,
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
          PrimaryStyles,
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
