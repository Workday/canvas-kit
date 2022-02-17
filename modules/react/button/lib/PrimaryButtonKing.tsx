import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  mouseFocusBehavior,
  styled,
  focusRing,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {borderRadius, space, spaceNumbers, type, colors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {ButtonColors, ButtonSizes, IconPositionsNew} from './types';
import {buttonLabelDataClassName} from './parts/ButtonLabelData';
import {ButtonContainerNew} from './parts/ButtonContainerNew';
import {Button} from './Button';

const getPrimaryButtonColorsNew = (variant: 'inverse' | undefined, theme: EmotionCanvasTheme) => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case undefined:
    default:
      return {
        default: {
          background: themePrimary.main,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        hover: {
          background: themePrimary.dark,
        },
        active: {
          background: themePrimary.darkest,
        },
        focus: {
          background: themePrimary.main,
        },
        disabled: {
          background: themePrimary.main,
        },
      };

    case 'inverse':
      return {
        default: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        active: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        focus: {
          background: colors.frenchVanilla100,
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
          focusRing: focusRing(
            {
              separation: 1,
              innerColor: colors.blackPepper500,
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        // Identical to inverse 'default' styles. ButtonContainer will set opacity to 40%
        disabled: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
      };
  }
};

export interface PrimaryButtonKingProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the PrimaryButton.
   * @default undefined
   */
  variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The data label of the Button.
   * Note: not displayed at `small` size
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   * @default 'start'
   */
  iconPosition?: IconPositionsNew;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

// Button sizes where data labels are enabled
const dataLabelSizes = ['medium', 'large'];

// const StyledPrimaryButton = styled(Button)<StyledType & PrimaryButtonKingProps>(
//   {
//     ...type.levels.subtext.large,
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     boxSizing: 'border-box',
//     boxShadow: 'none',
//     outline: 'none',
//     fontWeight: type.properties.fontWeights.bold,
//     lineHeight: 'normal',
//     whiteSpace: 'nowrap',
//     WebkitFontSmoothing: 'antialiased',
//     MozOsxFontSmoothing: 'grayscale',
//     borderRadius: borderRadius.circle,
//     position: 'relative',
//     verticalAlign: 'middle',
//     overflow: 'hidden',
//     border: '1px solid transparent',
//     background: 'red',
//     transition:
//       'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
//     '&:disabled, &:disabled:active': {
//       cursor: 'default',
//       boxShadow: 'none',
//       opacity: 0.4,
//     },

//     '&:hover:active': {transitionDuration: '40ms'},

//     '& > *:first-of-type': {
//       marginLeft: '0',
//     },

//     '& > *:last-of-type': {
//       marginRight: 0,
//     },
//   },
//   ({size}) => {
//     switch (size) {
//       case 'large':
//         return {
//           ...type.levels.body.small,
//           fontWeight: type.properties.fontWeights.bold,
//           height: '48px',
//           '& > * ': {
//             margin: `0 ${spaceNumbers.xxs / 2}px`,
//           },
//         };
//       case 'medium':
//       default:
//         return {
//           height: space.xl,
//           '& > * ': {
//             margin: `0 ${spaceNumbers.xxs / 2}px`,
//           },
//         };
//       case 'small':
//         return {
//           height: space.l,
//           '& > * ': {
//             margin: `0 ${spaceNumbers.xxxs / 2}px`,
//           },
//         };
//       case 'extraSmall':
//         return {
//           ...type.levels.subtext.medium,
//           fontWeight: type.properties.fontWeights.bold,
//           height: space.m,
//           '& > * ': {
//             margin: `0 ${spaceNumbers.xxxs / 2}px`,
//           },
//         };
//     }
//   },
//   ({grow}) => grow && {width: '100%', maxWidth: '100%'},
//   ({variant, theme}) => {
//     if (!getPrimaryButtonColorsNew(variant, theme)) {
//       return;
//     }

//     const colors: ButtonColors = getPrimaryButtonColorsNew(variant, theme);
//     const baseStyles = {
//       backgroundColor: colors.default.background,
//       borderColor: colors.default.border,
//       color: colors.default.label,
//       ...(colors.default.icon && {
//         '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2, .wd-icon-background': {
//           transition: 'fill 120ms ease-in',
//         },
//         ...getIconColorSelectorsNew(theme, colors.default.icon, false),
//       }),
//       ...(colors.default.labelData && {
//         ['.' + buttonLabelDataClassName]: {
//           color: colors.default.labelData,
//         },
//       }),
//     };

//     const hoverStyles = {
//       '&:hover': {
//         backgroundColor: colors.hover.background,
//         borderColor: colors.hover.border,
//         color: colors.hover.label,
//         ...(colors.hover.labelData && {
//           ['.' + buttonLabelDataClassName]: {
//             transition: 'color 120ms ease-in',
//             color: colors.hover.labelData,
//           },
//         }),
//         ...(colors.hover.icon && getIconColorSelectorsNew(theme, colors.hover.icon, false)),
//       },
//     };

//     const activeStyles = {
//       '&:active, &:focus:active, &:hover:active': {
//         backgroundColor: colors.active.background,
//         borderColor: colors.active.border,
//         color: colors.active.label,
//         ...(colors.active.labelData && {
//           ['.' + buttonLabelDataClassName]: {
//             color: colors.active.labelData,
//           },
//         }),
//         ...(colors.active.icon && getIconColorSelectorsNew(theme, colors.active.icon, false)),
//       },
//     };

//     return {
//       ...baseStyles,
//       '&:focus': {
//         backgroundColor: colors.focus.background,
//         borderColor: colors.focus.border,
//         color: colors.focus.label,
//         ...(colors.focus.focusRing || focusRing({separation: 2}, theme)),
//         ...(colors.focus.labelData && {
//           ['.' + buttonLabelDataClassName]: {
//             color: colors.focus.labelData,
//           },
//         }),
//         ...(colors.focus.icon && getIconColorSelectorsNew(theme, colors.focus.icon, false)),
//       },

//       ...activeStyles,
//       ...hoverStyles,
//       '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
//         backgroundColor: colors.disabled.background,
//         borderColor: colors.disabled.border,
//         color: colors.disabled.label,
//         ...(colors.disabled.icon && getIconColorSelectorsNew(theme, colors.disabled.icon, false)),
//         ...(colors.disabled.labelData && {
//           ['.' + buttonLabelDataClassName]: {
//             color: colors.disabled.labelData,
//           },
//         }),
//       },
//       ...mouseFocusBehavior({
//         '&:focus': {
//           ...baseStyles,
//           outline: 'none',
//           boxShadow: 'none',
//           animation: 'none',
//           ...hoverStyles,
//           ...activeStyles,
//         },
//       }),
//     };
//   }
// );

const getMinWidthStyles = (children: React.ReactNode, size: ButtonSizes) => {
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

const getPaddingStyles = (children: React.ReactNode, size: ButtonSizes) => {
  switch (size) {
    case 'large':
      return children ? `0 ${space.l}` : 0;

    case 'medium':
      return children ? `0 ${space.m}` : 0;
    case 'small':
      return children ? `0 ${space.s}` : 0;
    case 'extraSmall':
      return children ? `0 ${space.xs}` : 0;
    default:
      return children ? `0 ${space.m}` : 0;
  }
};

export const PrimaryButtonKing = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      iconPosition = 'start',
      variant,
      dataLabel,
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: PrimaryButtonKingProps,
    ref,
    Element
  ) => {
    const balancingMargin = size === 'large' ? '8px' : '4px';

    return (
      <ButtonContainerNew
        ref={ref}
        as={Element}
        size={size}
        colors={getPrimaryButtonColorsNew(variant, theme)}
        padding={getPaddingStyles(children, size)}
        minWidth={getMinWidthStyles(children, size)}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineStart={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
        {children && <Button.Label>{children}</Button.Label>}
        {dataLabel && dataLabelSizes.includes(size) && (
          <Button.LabelData>{dataLabel}</Button.LabelData>
        )}
        {icon && iconPosition === 'end' && (
          <Button.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            marginInlineEnd={children ? `-${balancingMargin} !important` : undefined}
          />
        )}
      </ButtonContainerNew>
    );
  },
});
