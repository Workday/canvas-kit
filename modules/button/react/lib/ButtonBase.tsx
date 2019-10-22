import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  ButtonSize,
  DeprecatedButtonVariant,
  IconPosition,
  AllButtonVariants,
  TextButtonVariant,
  ButtonVariant,
  IconButtonVariant,
} from './types';
import {ButtonProps, BaseButtonProps} from './Button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

export const ButtonBaseCon = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonProps>(
  /* istanbul ignore next line for coverage */
  ({variant, size}) => {
    if (variant === undefined) {
      return {};
    }

    const baseButton = getBaseButton(variant);
    const buttonStyles = getButtonStyle(baseButton, variant);
    const sizeStyles = size !== undefined ? getButtonSize(baseButton, size) : {};

    return {
      ...baseButton.styles,
      ...buttonStyles,
      ...sizeStyles,
    };
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'}
);

export const ButtonBaseLabel = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonProps<AllButtonVariants>>(
  ButtonStyles.labelBaseStyles.styles,
  ({size}) => {
    const {sizes} = ButtonStyles.labelBaseStyles.variants!;

    switch (size) {
      case ButtonSize.Large:
      default:
        return sizes.large;
      case ButtonSize.Small:
        return sizes.small;
      case ButtonSize.Medium:
        return sizes.medium;
    }
  },
  ({variant}) => {
    const {types} = ButtonStyles.labelBaseStyles.variants!;

    switch (variant) {
      case TextButtonVariant.Default:
      case TextButtonVariant.Inverse:
        return types.text;
      case TextButtonVariant.AllCaps:
      case TextButtonVariant.InverseAllCaps:
        return types.textAllCaps;
      case DeprecatedButtonVariant.Primary:
        return types.deprecatedPrimary;
      case DeprecatedButtonVariant.Secondary:
        return types.deprecatedSecondary;
      case DeprecatedButtonVariant.Delete:
        return types.deprecatedDelete;
      default:
        return {};
    }
  }
);

export const ButtonLabelData = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonProps>(ButtonStyles.labelDataBaseStyles.styles, ({size}) => {
  const {sizes} = ButtonStyles.labelDataBaseStyles.variants!;
  switch (size) {
    case ButtonSize.Large:
    default:
      return sizes.large;
    case ButtonSize.Medium:
      return sizes.medium;
  }
});

const ButtonLabelIconStyled = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelIconProps>(
  ButtonStyles.labelIconBaseStyles.styles,
  ({size, dropdown}) => {
    if (dropdown) {
      switch (size) {
        case ButtonSize.Large:
        default:
          return {padding: '0 8px 0 0'};
        case ButtonSize.Medium:
          return {padding: '0 4px 0 0'};
      }
    }

    const {sizes} = ButtonStyles.labelIconBaseStyles.variants!;

    switch (size) {
      case ButtonSize.Large:
      default:
        return sizes.large;
      case ButtonSize.Medium:
        return sizes.medium;
    }
  },
  ({iconPosition}) => {
    if (iconPosition === undefined) {
      return {};
    }

    const {types} = ButtonStyles.labelIconBaseStyles.variants!;

    switch (iconPosition) {
      case IconPosition.Left:
      default:
        return types.iconPositionLeft;
      case IconPosition.Right:
        return types.iconPositionRight;
    }
  }
);

export interface ButtonLabelIconProps extends BaseButtonProps<AllButtonVariants> {
  iconPosition?: IconPosition;
  dropdown?: boolean;
}

export class ButtonLabelIcon extends React.Component<ButtonLabelIconProps> {
  public render() {
    const {icon, size, dropdown, iconPosition, ...elemProps} = this.props;
    /* istanbul ignore next line for coverage */
    if (icon === undefined) {
      return {};
    }

    let iconSize = 24;

    if (size === ButtonSize.Small) {
      iconSize = 20;
    }

    return (
      <ButtonLabelIconStyled
        iconPosition={iconPosition}
        dropdown={dropdown}
        size={size}
        {...elemProps}
      >
        <SystemIcon size={iconSize} icon={icon} />
      </ButtonLabelIconStyled>
    );
  }
}

export function getButtonSize(baseButton: ButtonStyles.ButtonGenericStyle, size?: ButtonSize) {
  const {sizes} = baseButton.variants!;

  switch (size) {
    case ButtonSize.Large:
      return sizes.large;
    case ButtonSize.Medium:
    default:
      return sizes.medium;
    case ButtonSize.Small:
      return sizes.small;
  }
}

export function getButtonStyle(
  baseButton: ButtonStyles.ButtonGenericStyle,
  variant?: AllButtonVariants
) {
  const {types} = baseButton.variants!;

  switch (variant) {
    case DeprecatedButtonVariant.Primary:
      return types[DeprecatedButtonVariant.Primary];
    case DeprecatedButtonVariant.Secondary:
      return types[DeprecatedButtonVariant.Secondary];
    case DeprecatedButtonVariant.Delete:
      return types[DeprecatedButtonVariant.Delete];
    case ButtonVariant.Highlight:
      return types[ButtonVariant.Highlight];
    case ButtonVariant.OutlinePrimary:
      return types[ButtonVariant.OutlinePrimary];
    case ButtonVariant.OutlineSecondary:
      return types[ButtonVariant.OutlineSecondary];
    case ButtonVariant.OutlineInverse:
      return types[ButtonVariant.OutlineInverse];
    case ButtonVariant.Primary:
      return types[ButtonVariant.Primary];
    case ButtonVariant.Secondary:
    default:
      return types[ButtonVariant.Secondary];
    case ButtonVariant.Delete:
      return types[ButtonVariant.Delete];
    case TextButtonVariant.Default:
      return types[TextButtonVariant.Default];
    case TextButtonVariant.Inverse:
      return types[TextButtonVariant.Inverse];
    case TextButtonVariant.AllCaps:
      return types[TextButtonVariant.AllCaps];
    case TextButtonVariant.InverseAllCaps:
      return types[TextButtonVariant.InverseAllCaps];
    case IconButtonVariant.Square:
      return types[IconButtonVariant.Square];
    case IconButtonVariant.SquareFilled:
      return types[IconButtonVariant.SquareFilled];
    case IconButtonVariant.Plain:
      return types[IconButtonVariant.Plain];
    case IconButtonVariant.Circle:
      return types[IconButtonVariant.Circle];
    case IconButtonVariant.CircleFilled:
      return types[IconButtonVariant.CircleFilled];
    case IconButtonVariant.Inverse:
      return types[IconButtonVariant.Inverse];
    case IconButtonVariant.InverseFilled:
      return types[IconButtonVariant.InverseFilled];
  }
}

function getBaseButton(buttonType: DeprecatedButtonVariant | ButtonVariant) {
  switch (buttonType) {
    case DeprecatedButtonVariant.Primary:
    case DeprecatedButtonVariant.Secondary:
    case DeprecatedButtonVariant.Delete:
      return ButtonStyles.deprecatedButtonStyles;
    case ButtonVariant.Primary:
    case ButtonVariant.Secondary:
    case ButtonVariant.Delete:
    case ButtonVariant.Highlight:
    case ButtonVariant.OutlinePrimary:
    case ButtonVariant.OutlineSecondary:
    case ButtonVariant.OutlineInverse:
    default:
      return ButtonStyles.canvasButtonStyles;
  }
}
