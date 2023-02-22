import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';

import {
  createComponent,
  GrowthBehavior,
  mouseFocusBehavior,
  focusRing,
  styled,
  EmotionCanvasTheme,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {BoxProps, boxStyleFn} from '@workday/canvas-kit-react/layout';
import {borderRadius, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions, TertiaryButtonSizes} from './types';

import {CSSObject} from '@emotion/styled';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface ButtonContainerProps extends BoxProps, GrowthBehavior {
  /**
   * Override default colors of a button. The default will depend on the button type
   * @default {undefined}
   */
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in ToolbarIconButton
   */
  fillIcon?: boolean;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

function getIconColorSelectors(
  {
    canvas: {
      palette: {primary: themePrimary},
    },
  }: EmotionCanvasTheme,
  color: string,
  fill?: boolean
): CSSObject {
  return {
    '&:focus span, &:hover span, & span': {
      '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
        fill: color,
      },
      '.wd-icon-background': {
        fill: fill ? color : undefined,
      },
      '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
        fill: fill
          ? color === themePrimary.contrast
            ? themePrimary.main
            : themePrimary.contrast
          : color,
      },
    },
  };
}

const ButtonContainer = styled('button')<StyledType & ButtonContainerProps>(
  {
    ...type.levels.subtext.large,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    boxShadow: 'none',
    outline: 'none',
    fontWeight: type.properties.fontWeights.bold,
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    borderRadius: borderRadius.circle,
    position: 'relative',
    verticalAlign: 'middle',
    overflow: 'hidden',
    border: '1px solid transparent',
    background: 'transparent',
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:disabled, &:disabled:active': {
      cursor: 'default',
      boxShadow: 'none',
      opacity: 0.4,
    },

    '&:hover:active': {transitionDuration: '40ms'},

    '& > *:first-of-type': {
      marginLeft: '0',
    },

    '& > *:last-of-type': {
      marginRight: 0,
    },
  },
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          ...type.levels.body.small,
          fontWeight: type.properties.fontWeights.bold,
          height: '48px',
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'medium':
      default:
        return {
          height: space.xl,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'small':
        return {
          height: space.l,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
      case 'extraSmall':
        return {
          ...type.levels.subtext.medium,
          fontWeight: type.properties.fontWeights.bold,
          height: space.m,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
    }
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
  ({colors, fillIcon, theme}) => {
    if (!colors) {
      return;
    }

    const baseStyles = {
      backgroundColor: colors.default.background,
      borderColor: colors.default.border,
      color: colors.default.label,
      ...(colors.default.icon && {
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2, .wd-icon-background': {
          transition: 'fill 120ms ease-in',
        },
        ...getIconColorSelectors(theme, colors.default.icon, fillIcon),
      }),
    };

    const hoverStyles = {
      '&:hover': {
        backgroundColor: colors.hover.background,
        borderColor: colors.hover.border,
        color: colors.hover.label,
        ...(colors.hover.icon && getIconColorSelectors(theme, colors.hover.icon, fillIcon)),
      },
    };

    const activeStyles = {
      '&:active, &:focus:active, &:hover:active': {
        backgroundColor: colors.active.background,
        borderColor: colors.active.border,
        color: colors.active.label,
        ...(colors.active.icon && getIconColorSelectors(theme, colors.active.icon, fillIcon)),
      },
    };

    return {
      ...baseStyles,
      '&:focus': {
        backgroundColor: colors.focus.background,
        borderColor: colors.focus.border,
        color: colors.focus.label,
        ...(colors.focus.focusRing || focusRing({separation: 2}, theme)),
        ...(colors.focus.icon && getIconColorSelectors(theme, colors.focus.icon, fillIcon)),
      },

      ...activeStyles,
      ...hoverStyles,
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        opacity: colors.disabled.opacity,
        ...(colors.disabled.icon && getIconColorSelectors(theme, colors.disabled.icon, fillIcon)),
      },
      ...mouseFocusBehavior({
        '&:focus': {
          ...baseStyles,
          outline: 'none',
          boxShadow: 'none',
          animation: 'none',
          ...hoverStyles,
          ...activeStyles,
        },
      }),
    };
  },
  boxStyleFn
);

export const getMinWidthStyles = (
  children: React.ReactNode,
  size: ButtonSizes | TertiaryButtonSizes
) => {
  switch (size) {
    case 'large':
      return children ? '112px' : '48px';
    case 'medium':
      return children ? '96px' : space.xl;
    case 'small':
      return children ? space.xxxl : space.l;
    case 'extraSmall':
      return children ? 'auto' : space.m;
    default:
      return children ? '96px' : space.xl;
  }
};

export const getPaddingStyles = (
  children: React.ReactNode,
  size: ButtonSizes | TertiaryButtonSizes,
  icon: CanvasSystemIcon | undefined,
  iconPosition: IconPositions | undefined
) => {
  // In order to calculate the correct padding, we need to know its children
  // and what side the icon is on and if there's an icon provided
  if (!children) {
    // icon buttons do not have any padding
    return 0;
  }
  // If there are children AND an icon
  // 1. We check what side the icon is in
  // 2. Adjust padding to visually center the icon and text
  // If there is children (most likely just text)
  // 1. We keep the padding the same on both side
  switch (size) {
    case 'large':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.l} 0 ${space.m}`
          : `0 ${space.m} 0 ${space.l}`
        : `0 ${space.l}`;

    case 'medium':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.m} 0 20px`
          : `0 20px 0 ${space.m}`
        : `0 ${space.m}`;

    case 'small':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.s} 0 ${space.xs}`
          : `0 ${space.xs} 0 ${space.s}`
        : `0 ${space.s}`;

    case 'extraSmall':
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.xs} 0 ${space.xxs}`
          : `0 ${space.xxs} 0 ${space.xs}`
        : `0 ${space.xs}`;

    default:
      return icon
        ? iconPosition === 'start'
          ? `0 ${space.m} 0 20px`
          : `0 20px 0 ${space.m}`
        : `0 ${space.m}`;
  }
};

export const BaseButton = createComponent('button')({
  displayName: 'Button',
  Component: ({children, ...elemProps}: ButtonContainerProps, ref, Element) => {
    return (
      <ButtonContainer as={Element} ref={ref} {...elemProps}>
        {children}
      </ButtonContainer>
    );
  },
  subComponents: {
    Icon: ButtonLabelIcon,
    Label: ButtonLabel,
  },
});
