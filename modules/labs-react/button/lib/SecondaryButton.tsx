import * as React from 'react';

import {BaseButton, buttonVars} from './BaseButton';
import {ButtonContainerProps} from './Button';
import {
  createComponent,
  cs,
  createModifiers,
  newTheme,
  cssVar,
  tokenTheme,
} from '@workday/canvas-kit-react/common';

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

const SecondaryStyles = cs({
  [buttonVars.default.background]: cssVar(newTheme.colors.secondary.button.background.base),
  [buttonVars.default.border]: cssVar(newTheme.colors.secondary.button.border.base),
  [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
  [buttonVars.default.color]: cssVar(newTheme.colors.secondary.button.color.base),
  '&:hover': {
    [buttonVars.hover.background]: cssVar(newTheme.colors.secondary.button.background.hover),
    [buttonVars.hover.border]: cssVar(newTheme.colors.secondary.button.border.hover),
    [buttonVars.hover.color]: cssVar(newTheme.colors.secondary.button.color.hover),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(newTheme.colors.secondary.icon.hover),
    },
  },
  '&:active': {
    [buttonVars.active.background]: cssVar(newTheme.colors.secondary.button.background.active),
    [buttonVars.active.border]: cssVar(newTheme.colors.secondary.button.border.active),
    [buttonVars.active.color]: cssVar(newTheme.colors.secondary.button.color.active),
  },
  '&:focus-visible': {
    [buttonVars.focus.background]: cssVar(newTheme.colors.secondary.button.background.focus),
    [buttonVars.focus.border]: cssVar(newTheme.colors.secondary.button.border.focus),
    [buttonVars.focus.color]: cssVar(newTheme.colors.secondary.button.color.focus),
    [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.secondaryColorContrast),
    [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColor),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(newTheme.colors.secondary.icon.focus),
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(newTheme.colors.secondary.icon.base),
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
      [buttonVars.default.background]: cssVar(
        newTheme.colors.secondaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.secondaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(newTheme.colors.secondaryInverse.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.hover
        ),
        [buttonVars.hover.color]: cssVar(newTheme.colors.secondaryInverse.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.secondaryInverse.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.secondaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.secondaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.secondaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.secondaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.secondaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.secondaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.secondaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.secondaryInverse.icon.base),
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
