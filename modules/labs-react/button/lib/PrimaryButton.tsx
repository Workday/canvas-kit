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

export type PrimaryButtonVariant = 'primary' | 'inverse';

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

const PrimaryStyles = cs({
  [buttonVars.default.background]: cssVar(tokenTheme.primaryColor),
  [buttonVars.default.border]: cssVar(tokenTheme.primaryColor),
  [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
  [buttonVars.default.color]: cssVar(tokenTheme.primaryColorContrast),
  '&:hover': {
    [buttonVars.hover.background]: cssVar(newTheme.colors.primary.button.background.hover),
    [buttonVars.hover.border]: cssVar(newTheme.colors.primary.button.border.hover),
    [buttonVars.hover.color]: cssVar(newTheme.colors.primary.button.color.hover),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(newTheme.colors.primary.icon.base),
    },
  },
  '&:active': {
    [buttonVars.active.background]: cssVar(newTheme.colors.primary.button.background.active),
    [buttonVars.active.border]: cssVar(newTheme.colors.primary.button.border.active),
    [buttonVars.active.color]: cssVar(newTheme.colors.primary.button.color.active),
  },
  '&:focus-visible': {
    [buttonVars.focus.background]: cssVar(newTheme.colors.primary.button.background.focus),
    [buttonVars.focus.border]: cssVar(newTheme.colors.primary.button.border.focus),
    [buttonVars.focus.color]: cssVar(newTheme.colors.primary.button.color.focus),
    [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.primaryColorContrast),
    [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColor),
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(newTheme.colors.primary.icon.focus),
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(newTheme.colors.primary.icon.base),
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
      [buttonVars.default.background]: cssVar(
        newTheme.colors.primaryInverse.button.background.base
      ),
      [buttonVars.default.border]: cssVar(newTheme.colors.primaryInverse.button.border.base),
      [buttonVars.default.borderRadius]: cssVar(newTheme.theme.borderRadius.circle),
      [buttonVars.default.color]: cssVar(newTheme.colors.primaryInverse.button.color.base),
      '&:hover': {
        [buttonVars.hover.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.hover
        ),
        [buttonVars.hover.color]: cssVar(newTheme.colors.primaryInverse.button.color.hover),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.primaryInverse.icon.hover),
        },
      },
      '&:active': {
        [buttonVars.active.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.active
        ),
        [buttonVars.active.border]: cssVar(newTheme.colors.primaryInverse.button.border.active),
        [buttonVars.active.color]: cssVar(newTheme.colors.primaryInverse.button.color.active),
      },
      '&:focus-visible': {
        [buttonVars.focus.background]: cssVar(
          newTheme.colors.primaryInverse.button.background.focus
        ),
        [buttonVars.focus.border]: cssVar(newTheme.colors.primaryInverse.button.border.focus),
        [buttonVars.focus.boxShadowInner]: cssVar(tokenTheme.darkContrast),
        [buttonVars.focus.boxShadowOuter]: cssVar(tokenTheme.primaryColorContrast),
        [buttonVars.focus.color]: cssVar(newTheme.colors.primaryInverse.button.color.focus),
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(newTheme.colors.primaryInverse.icon.focus),
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(newTheme.colors.primaryInverse.icon.base),
      },
    }),
  },
});

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
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

// export const PrimaryButtonOption = createComponent(Button)({
//   displayName: 'PrimaryButtonOption',
//   Component: ({children, icon, iconPosition, ...elemprops}: PrimaryButtonProps, ref, Element) => {
//     return (
//       <Button
//         as={Element}
//         ref={ref}
//         type="button"
//         icon={icon}
//         iconPosition={iconPosition}
//         {...elemprops}
//       >
//         {children}
//       </Button>
//     );
//   },
// });
