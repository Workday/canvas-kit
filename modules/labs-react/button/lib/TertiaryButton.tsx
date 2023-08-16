import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, getTheme} from '@workday/canvas-kit-react/common';

import {borderRadius, space, spaceNumbers, colors} from '@workday/canvas-kit-react/tokens';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface TertiaryButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {
  /**
   * Variant has an option for `inverse` which will inverse the styling
   */
  variant?: 'inverse';
}

const theme = getTheme();

const TertiaryStyles = cs({
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: borderRadius.m,
  [buttonVars.default.color]: theme.canvas.palette.primary.main,
  paddingInline: space.xxs,
  textDecoration: 'underline',
  '&:hover, &.hover': {
    [buttonVars.hover.background]: colors.soap200,
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.color]: theme.canvas.palette.primary.dark,
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: theme.canvas.palette.primary.dark,
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.hover.icon]: colors.blackPepper500,
      },
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.boxShadowInner]: theme.canvas.palette.primary.main,
    [buttonVars.focus.boxShadowOuter]: 'transparent',
    [buttonVars.focus.color]: theme.canvas.palette.primary.main,
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: theme.canvas.palette.primary.main,
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.focus.icon]: colors.blackPepper400,
      },
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: colors.soap300,
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.color]: theme.canvas.palette.primary.dark,
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: theme.canvas.palette.primary.main,
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.active.icon]: colors.blackPepper500,
      },
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: theme.canvas.palette.primary.main,
  },
  '&.canvas-tertiary-button-icon-only': {
    '& span .wd-icon-fill': {
      [buttonVars.default.icon]: colors.blackPepper400,
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: colors.frenchVanilla100,
    [buttonVars.disabled.color]: theme.canvas.palette.primary.main,
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: theme.canvas.palette.primary.main,
    },
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
      [buttonVars.default.background]: 'transparent',
      [buttonVars.default.border]: 'transparent',
      [buttonVars.default.borderRadius]: borderRadius.m,
      [buttonVars.default.color]: colors.frenchVanilla100,
      textDecoration: 'underline',
      '&:hover, &.hover': {
        [buttonVars.hover.background]: colors.frenchVanilla100,
        [buttonVars.hover.border]: 'transparent',
        [buttonVars.hover.color]: colors.blackPepper400,
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: colors.blackPepper400,
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: colors.frenchVanilla100,
        [buttonVars.focus.border]: 'transparent',
        [buttonVars.focus.boxShadowInner]: 'currentColor',
        [buttonVars.focus.boxShadowOuter]: colors.frenchVanilla100,
        [buttonVars.focus.color]: colors.blackPepper400,
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: colors.blackPepper400,
        },
      },
      '&:active, &.active': {
        [buttonVars.active.background]: colors.soap200,
        [buttonVars.active.border]: 'transparent',
        [buttonVars.active.color]: colors.blackPepper400,
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: colors.blackPepper400,
        },
        '&.canvas-tertiary-button-icon-only': {
          '& span .wd-icon-fill': {
            [buttonVars.active.icon]: colors.blackPepper500,
          },
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: colors.frenchVanilla100,
      },
      '&.canvas-tertiary-button-icon-only': {
        '& span .wd-icon-fill': {
          [buttonVars.default.icon]: colors.frenchVanilla100,
        },
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
