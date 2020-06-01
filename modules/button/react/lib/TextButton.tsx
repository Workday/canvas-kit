import * as React from 'react';
import {type} from '@workday/canvas-kit-labs-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {
  TextButtonVariant,
  ButtonIconPosition,
  ButtonColors,
  ButtonOrAnchorComponent,
} from './types';
import {ButtonContainer, ButtonLabelIcon, ButtonLabel} from './parts';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Themeable {
  /**
   * The variant of the TextButton.
   * @default TextButtonVariant.Default
   */
  variant?: TextButtonVariant;
  /**
   * The size of the TextButton.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The position of the TextButton icon. Accepts `Left` or `Right`.
   * @default ButtonIconPosition.Left
   */
  iconPosition?: ButtonIconPosition;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the TextButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The capitialization of the text in the button.
   */
  allCaps?: boolean;
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const getTextButtonColors = (
  variant: TextButtonVariant,
  theme: EmotionCanvasTheme
): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case TextButtonVariant.Default:
    default:
      return {
        default: {
          icon: themePrimary.main,
          label: themePrimary.main,
        },
        hover: {
          background: colors.soap200,
          icon: themePrimary.dark,
          label: themePrimary.dark,
        },
        active: {
          background: colors.soap300,
          icon: themePrimary.dark,
          label: themePrimary.dark,
        },
        focus: {
          icon: themePrimary.dark,
          label: themePrimary.dark,
          focusRing: focusRing({}, theme),
        },
        disabled: {
          background: 'transparent',
          icon: themePrimary.light,
          label: themePrimary.light,
        },
      };
    case TextButtonVariant.Inverse:
      return {
        default: {
          background: 'transparent',
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
        },
        active: {
          background: colors.soap200,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
        },
        focus: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        disabled: {
          background: 'transparent',
          icon: 'rgba(255, 255, 255, 0.5)',
          label: 'rgba(255, 255, 255, 0.5)',
        },
      };
  }
};

const containerStyles = {
  borderRadius: borderRadius.m,
  border: '0',
  padding: `0 ${spacing.xxs}`,
  minWidth: 'auto',
  '.wdc-text-button-label': {
    borderBottom: '2px solid transparent',
    paddingTop: '2px',
    transition: 'border-color 0.3s',
  },
  '&:hover:not([disabled]) .wdc-text-button-label': {
    borderBottomColor: 'currentColor',
  },
};

const TextButton: ButtonOrAnchorComponent<TextButtonProps, typeof TextButtonVariant> & {
  IconPosition: typeof ButtonIconPosition;
} = ({
  theme = useTheme(),
  variant = TextButtonVariant.Default,
  size = 'medium',
  iconPosition = ButtonIconPosition.Left,
  buttonRef,
  children,
  icon,
  allCaps,
  ...elemProps
}: TextButtonProps) => {
  // Note: We don't use ButtonLabel because the label styles differ from other button types
  const allContainerStyles = allCaps
    ? {
        ...containerStyles,
        ...type.variant.caps,
        ...type.variant.button,
        fontSize: size === 'medium' ? type.body.fontSize : undefined,
        letterSpacing: '.5px',
      }
    : {
        ...containerStyles,
        fontSize: size === 'medium' ? type.body.fontSize : undefined,
      };

  return (
    <ButtonContainer
      colors={getTextButtonColors(variant, theme)}
      ref={buttonRef}
      size={size}
      extraStyles={allContainerStyles}
      {...elemProps}
    >
      {icon && iconPosition === ButtonIconPosition.Left && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
      <ButtonLabel className="wdc-text-button-label">{children}</ButtonLabel>
      {icon && iconPosition === ButtonIconPosition.Right && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
    </ButtonContainer>
  );
};

TextButton.IconPosition = ButtonIconPosition;
TextButton.Variant = TextButtonVariant;
TextButton.Size = {
  Small: 'small',
  Medium: 'medium',
} as const;

export default TextButton;
