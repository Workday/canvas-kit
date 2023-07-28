import * as React from 'react';

import {BaseButton, buttonVars} from './BaseButton';
import {
  createComponent,
  cs,
  createModifiers,
  newTheme,
  cssVar,
  tokenTheme,
} from '@workday/canvas-kit-react/common';
import {ButtonContainerProps} from './Button';

import {borderRadius, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

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
}

const TertiaryStyles = cs({
  [buttonVars.default.background]: cssVar(newTheme.colors.tertiary.button.background.base),
  [buttonVars.default.border]: cssVar(newTheme.colors.tertiary.button.border.base),
  [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.m),
  [buttonVars.default.color]: cssVar(newTheme.colors.tertiary.button.color.base),
  paddingInline: space.xxs,
  textDecoration: 'underline',
  '&:hover': {
    [buttonVars.hover.background]: cssVar(newTheme.colors.tertiary.button.background.hover),
    [buttonVars.hover.border]: cssVar(newTheme.colors.tertiary.button.border.hover),
    [buttonVars.hover.color]: cssVar(newTheme.colors.tertiary.button.color.hover),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(newTheme.colors.tertiary.icon.hover),
    },
  },
  '&:active': {
    [buttonVars.active.background]: cssVar(newTheme.colors.tertiary.button.background.active),
    [buttonVars.active.border]: cssVar(newTheme.colors.tertiary.button.border.active),
    [buttonVars.active.color]: cssVar(newTheme.colors.tertiary.button.color.active),
  },
  '&:focus-visible': {
    [buttonVars.focus.background]: cssVar(newTheme.colors.tertiary.button.background.focus),
    [buttonVars.focus.border]: cssVar(newTheme.colors.tertiary.button.border.focus),
    [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.tertiaryColorContrast),
    [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColor),
    [buttonVars.focus.color]: cssVar(newTheme.colors.tertiary.button.color.focus),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(newTheme.colors.tertiary.icon.focus),
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(newTheme.colors.tertiary.icon.base),
  },
});

export const TertiaryButtonModifiers = createModifiers({
  iconPosition: {
    start: 'canvas-tertiary-button-icon-start',
    end: 'canvas-tertiary-button-icon-end',
    only: 'canvas-tertiary-button-icon-only',
  },
  variant: {
    inverse: cs({
      [buttonVars.default.background]: cssVar(
        newTheme.colors.tertiaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.m),
      [buttonVars.default.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.base),
      textDecoration: 'underline',
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.hover
        ),
        [buttonVars.hover.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.hover),
        [buttonVars.hover.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.tertiaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.tertiaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.tertiaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.tertiaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.tertiaryInverse.icon.base),
      },
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
});

export const TertiaryButton = createComponent('button')({
  displayName: 'TertiaryButton',
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
    }: TertiaryButtonProps,
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
          TertiaryStyles,
          TertiaryButtonModifiers({
            iconPosition: iconPosition,
            variant: variant,
            size: size,
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
