import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';
import {ButtonLabelData} from './parts/ButtonLabelData';

import {
  createComponent,
  GrowthBehavior,
  mouseFocusBehavior,
  focusRing,
  styled,
  EmotionCanvasTheme,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {borderRadius, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes, IconPositions, TertiaryButtonSizes} from './types';

import {CSSObject} from '@emotion/styled';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface ButtonContainerProps extends BoxProps, GrowthBehavior {
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The ref to the button that the styled component renders.
   */
  ref?: React.Ref<HTMLButtonElement>;
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in ToolbarIconButton
   */
  fillIcon?: boolean;
}

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

const ButtonContainer = styled(Box.as('button'))<StyledType & ButtonContainerProps>(
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
  }
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
  let padding = '0';
  const isChildrenAndIcon = children && icon;
  const startIconPoistion = iconPosition === 'start';
  switch (size) {
    case 'large': {
      if (isChildrenAndIcon) {
        if (startIconPoistion) {
          return (padding = `0 ${space.l} 0 28px`);
        } else {
          return (padding = `0 28px 0 ${space.l}`);
        }
      } else if (children) {
        return (padding = `0 ${space.l}`);
      } else {
        return (padding = '0');
      }
    }
    case 'medium': {
      if (isChildrenAndIcon) {
        if (startIconPoistion) {
          return (padding = `0 ${space.m} 0 20px`);
        } else {
          return (padding = `0 20px 0 ${space.m}`);
        }
      } else if (children) {
        return (padding = `0 ${space.m}`);
      } else {
        return (padding = '0');
      }
    }

    case 'small': {
      if (isChildrenAndIcon) {
        if (startIconPoistion) {
          return (padding = `0 ${space.s} 0 ${space.xs}`);
        } else {
          return (padding = `0 ${space.xs} 0 ${space.s}`);
        }
      } else if (children) {
        return (padding = `0 ${space.s}`);
      } else {
        return (padding = '0');
      }
    }

    case 'extraSmall': {
      if (isChildrenAndIcon) {
        if (startIconPoistion) {
          return (padding = `0 ${space.xs} 0 ${space.xxs}`);
        } else {
          return (padding = `0 ${space.xxs} 0 ${space.xs}`);
        }
      } else if (children) {
        return (padding = `0 ${space.xs}`);
      } else {
        return (padding = '0');
      }
    }
    default: {
      if (isChildrenAndIcon) {
        if (startIconPoistion) {
          return (padding = `0 ${space.m} 0 20px`);
        } else {
          return (padding = `0 20px 0 ${space.m}`);
        }
      } else if (children) {
        return (padding = `0 ${space.m}`);
      } else {
        return (padding = '0');
      }
    }
  }
};

// export const getPaddingStyles = (
//   children: React.ReactNode,
//   size: ButtonSizes | TertiaryButtonSizes,
//   icon: CanvasSystemIcon | undefined,
//   iconPosition: IconPositions | undefined
// ) => {
//   // In order to calculate the correct padding, we need to know its children
//   // and what side the icon is on and if there's an icon provided

//   // If there are children AND an icon
//   // 1. We check what side the icon is in
//   // 2. Adjust padding to visually center the icon and text
//   // If there is children (most likely just text)
//   // 1. We keep the padding the same on both side
//   // If there are no children (this is an icon button)
//   // 1. We set the padding to 0 to center the icon in the button
//   switch (size) {
//     case 'large':
//       return children && icon
//         ? iconPosition === 'start'
//           ? `0 ${space.l} 0 28px`
//           : `0 28px 0 ${space.l}`
//         : children
//         ? `0 ${space.l}`
//         : 0;

//     case 'medium':
//       return children && icon
//         ? iconPosition === 'start'
//           ? `0 ${space.m} 0 20px`
//           : `0 20px 0 ${space.m}`
//         : children
//         ? `0 ${space.m}`
//         : 0;
//     case 'small':
//       return children && icon
//         ? iconPosition === 'start'
//           ? `0 ${space.s} 0 ${space.xs}`
//           : `0 ${space.xs} 0 ${space.s}`
//         : children
//         ? `0 ${space.s}`
//         : 0;
//     case 'extraSmall':
//       return children && icon
//         ? iconPosition === 'start'
//           ? `0 ${space.xs} 0 ${space.xxs}`
//           : `0 ${space.xxs} 0 ${space.xs}`
//         : children
//         ? `0 ${space.xs}`
//         : 0;
//     default:
//       return children && icon
//         ? iconPosition === 'start'
//           ? `0 ${space.m} 0 20px`
//           : `0 20px 0 ${space.m}`
//         : children
//         ? `0 ${space.m}`
//         : 0;
//   }
// };

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
    LabelData: ButtonLabelData,
  },
});
