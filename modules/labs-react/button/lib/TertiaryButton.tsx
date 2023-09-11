import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, createModifiers, cssVar} from '@workday/canvas-kit-react/common';
import {system, brand, base} from '@workday/canvas-tokens-web';
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

const tertiaryStyles = cs({
  [buttonVars.default.background]: 'transparent',
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.medium),
  [buttonVars.default.color]: cssVar(brand.primary.base),
  paddingInline: space.xxs,
  minWidth: 'auto',
  textDecoration: 'underline',
  border: 0,
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(base.soap200),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.color]: cssVar(brand.primary.dark),
    '& span .wd-icon-fill': {
      [buttonVars.hover.icon]: cssVar(brand.primary.dark),
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.hover.icon]: cssVar(base.blackPepper500),
      },
    },
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: 'transparent',
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.boxShadowInner]: cssVar(brand.primary.base),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.primary.base),
    [buttonVars.focus.color]: cssVar(brand.primary.base),
    boxShadow: `${cssVar(buttonVars.focus.boxShadowInner)} 0px 0px 0px 0px, ${cssVar(
      buttonVars.focus.boxShadowOuter
    )} 0px 0px 0px 2px`,
    '& span .wd-icon-fill': {
      [buttonVars.focus.icon]: cssVar(brand.primary.base),
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.focus.icon]: cssVar(base.blackPepper500),
      },
    },
  },
  '&:active, &.active': {
    [buttonVars.active.background]: colors.soap300,
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.color]: cssVar(brand.primary.dark),
    '& span .wd-icon-fill': {
      [buttonVars.active.icon]: cssVar(brand.primary.base),
    },
    '&.canvas-tertiary-button-icon-only': {
      '& span .wd-icon-fill': {
        [buttonVars.active.icon]: cssVar(base.blackPepper500),
      },
    },
  },
  '& span .wd-icon-fill': {
    [buttonVars.default.icon]: cssVar(brand.primary.base),
  },
  '&.canvas-tertiary-button-icon-only': {
    '& span .wd-icon-fill': {
      [buttonVars.default.icon]: cssVar(base.blackPepper500),
    },
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: 'transparent',
    [buttonVars.disabled.border]: cssVar(base.frenchVanilla100),
    [buttonVars.disabled.color]: cssVar(brand.primary.base),
    '& span .wd-icon-fill': {
      [buttonVars.disabled.icon]: cssVar(brand.primary.base),
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
      [buttonVars.default.color]: cssVar(base.frenchVanilla100),
      textDecoration: 'underline',
      '&:hover, &.hover': {
        [buttonVars.hover.background]: cssVar(base.frenchVanilla100),
        [buttonVars.hover.border]: 'transparent',
        [buttonVars.hover.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.hover.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:focus-visible, &.focus': {
        [buttonVars.focus.background]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.border]: 'transparent',
        [buttonVars.focus.boxShadowInner]: 'currentColor',
        [buttonVars.focus.boxShadowOuter]: cssVar(base.frenchVanilla100),
        [buttonVars.focus.color]: cssVar(base.blackPepper500),
        boxShadow: `inset 0px 0px 0px 2px currentColor, ${cssVar(
          buttonVars.focus.boxShadowOuter
        )} 0px 0px 0px 2px`,
        '& span .wd-icon-fill': {
          [buttonVars.focus.icon]: cssVar(base.blackPepper500),
        },
      },
      '&:active, &.active': {
        [buttonVars.active.background]: cssVar(base.soap200),
        [buttonVars.active.border]: 'transparent',
        [buttonVars.active.color]: cssVar(base.blackPepper500),
        '& span .wd-icon-fill': {
          [buttonVars.active.icon]: cssVar(base.blackPepper500),
        },
        '&.canvas-tertiary-button-icon-only': {
          '& span .wd-icon-fill': {
            [buttonVars.active.icon]: cssVar(base.blackPepper500),
          },
        },
      },
      '& span .wd-icon-fill': {
        [buttonVars.default.icon]: cssVar(base.frenchVanilla100),
      },
      '&.canvas-tertiary-button-icon-only': {
        '& span .wd-icon-fill': {
          [buttonVars.default.icon]: cssVar(base.frenchVanilla100),
        },
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
          tertiaryStyles,
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
