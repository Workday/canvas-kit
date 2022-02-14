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
import {ButtonLabel, ButtonLabelData} from './parts';
import isPropValid from '@emotion/is-prop-valid';
import {CSSObject} from '@emotion/styled';
import {ButtonColors, ButtonSizes, IconPositionsNew} from './types';
import {buttonLabelDataClassName} from './parts/ButtonLabelData';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {Button, ButtonProps} from './Button';

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
   * If no value is provided, it defaults to `left`.
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
// All disabled buttons are set to 40% opacity.
// This will eventually live in the ButtonContainer styles, but for now we're scoping it to Primary, Secondary, and Tertiary buttons.
const disabledButtonOpacity = {
  '&:disabled, &:disabled:active': {
    opacity: 0.4,
  },
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
    console.warn(children);

    return (
      <ButtonContainerNew
        ref={ref}
        as={Element}
        colors={getPrimaryButtonColorsNew(variant, theme)}
        size={size}
        extraStyles={disabledButtonOpacity}
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <ButtonLabelIconNew
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        <ButtonLabel>{children}</ButtonLabel>
        {dataLabel && dataLabelSizes.includes(size) && (
          <ButtonLabelData>{dataLabel}</ButtonLabelData>
        )}
        {icon && iconPosition === 'end' && (
          <ButtonLabelIconNew
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </ButtonContainerNew>
    );
  },
});

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

interface ButtonContainerPropsNew extends ButtonProps, GrowthBehavior {
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
   * Corresponds to `toggled` in IconButton
   */
  fillIcon?: boolean;
  /**
   * Any extra styles necessary for a given parent component.
   * This avoids using the inline `style` attribute when the shape needs to be customized (e.g. for IconButton)
   */
  extraStyles?: CSSObject;
}

function getIconColorSelectorsNew(
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

const ButtonContainerNew = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonContainerPropsNew>(
  {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.bold,
    lineHeight: 'normal',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    borderRadius: borderRadius.circle,
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    verticalAlign: 'middle',
    border: '1px solid transparent',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',

    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',

    // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:hover:active': {transitionDuration: '40ms'},

    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},

    '& > *:first-of-type': {
      marginLeft: 0,
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
          minWidth: '112px',
          height: '48px',
          padding: `0 ${space.l}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'medium':
      default:
        return {
          minWidth: '96px',
          height: space.xl,
          padding: `0 ${space.m}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'small':
        return {
          minWidth: '80px',
          height: space.l,
          padding: `0 ${space.s}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
      case 'extraSmall':
        return {
          ...type.levels.subtext.medium,
          fontWeight: type.properties.fontWeights.bold,
          height: space.m,
          padding: `0 ${space.xs}`,
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
        ...getIconColorSelectorsNew(theme, colors.default.icon, fillIcon),
      }),
      ...(colors.default.labelData && {
        ['.' + buttonLabelDataClassName]: {
          color: colors.default.labelData,
        },
      }),
    };

    const hoverStyles = {
      '&:hover': {
        backgroundColor: colors.hover.background,
        borderColor: colors.hover.border,
        color: colors.hover.label,
        ...(colors.hover.labelData && {
          ['.' + buttonLabelDataClassName]: {
            transition: 'color 120ms ease-in',
            color: colors.hover.labelData,
          },
        }),
        ...(colors.hover.icon && getIconColorSelectorsNew(theme, colors.hover.icon, fillIcon)),
      },
    };

    const activeStyles = {
      '&:active, &:focus:active, &:hover:active': {
        backgroundColor: colors.active.background,
        borderColor: colors.active.border,
        color: colors.active.label,
        ...(colors.active.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.active.labelData,
          },
        }),
        ...(colors.active.icon && getIconColorSelectorsNew(theme, colors.active.icon, fillIcon)),
      },
    };

    return {
      ...baseStyles,
      '&:focus': {
        backgroundColor: colors.focus.background,
        borderColor: colors.focus.border,
        color: colors.focus.label,
        ...(colors.focus.focusRing || focusRing({separation: 2}, theme)),
        ...(colors.focus.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.focus.labelData,
          },
        }),
        ...(colors.focus.icon && getIconColorSelectorsNew(theme, colors.focus.icon, fillIcon)),
      },

      ...activeStyles,
      ...hoverStyles,
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        ...(colors.disabled.icon &&
          getIconColorSelectorsNew(theme, colors.disabled.icon, fillIcon)),
        ...(colors.disabled.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.disabled.labelData,
          },
        }),
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
  ({extraStyles}) => extraStyles
);

interface ButtonLabelIconPropsNew {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'start'
   */
  iconPosition?: IconPositionsNew;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
}

const iconSizes: Record<ButtonSizes, number> = {
  extraSmall: 18,
  small: 20,
  medium: 20,
  large: 24,
};

const StyledButtonLabelIcon = styled(Box)<StyledType & ButtonLabelIconPropsNew>({
  display: 'inline-block',
});

const ButtonLabelIconNew = ({
  icon,
  size,
  iconPosition,
  shouldMirrorIcon = false,
  ...elemProps
}: ButtonLabelIconPropsNew) => {
  if (icon === undefined) {
    return null;
  }

  const iconSize = size ? iconSizes[size] : undefined;
  const balancingMargin = size === 'large' ? '8px' : '4px';
  return (
    <StyledButtonLabelIcon
      as="span"
      iconPosition={iconPosition}
      size={size}
      width={size ? iconSizes[size] : iconSizes.medium}
      height={size ? iconSizes[size] : iconSizes.medium}
      marginLeft={iconPosition === 'end' ? undefined : `-${balancingMargin} !important`}
      marginRight={iconPosition === 'end' ? `-${balancingMargin} !important` : undefined}
      {...elemProps}
    >
      <SystemIcon size={iconSize} icon={icon} shouldMirror={shouldMirrorIcon} />
    </StyledButtonLabelIcon>
  );
};
