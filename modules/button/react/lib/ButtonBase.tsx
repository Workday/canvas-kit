import * as React from 'react';
import styled from 'react-emotion';
import {
  ButtonSize,
  ButtonType,
  IconPosition,
  AllButtonTypes,
  TextButtonType,
  BetaButtonType,
  IconButtonType,
} from './types';
import {ButtonProps, BaseButtonProps} from './Button';
import {TextButtonProps} from './TextButton';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

export const ButtonBaseCon = styled('button')<ButtonProps>(
  /* istanbul ignore next line for coverage */
  ({buttonType, size}) => {
    if (buttonType === undefined) {
      return {};
    }

    const baseButton = getBaseButton(buttonType);
    const buttonStyles = getButtonStyle(baseButton, buttonType);
    const sizeStyles = size !== undefined ? getButtonSize(baseButton, size) : {};

    return {
      ...baseButton.styles,
      ...buttonStyles,
      ...sizeStyles,
    };
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'}
);

export const ButtonBaseLabel = styled('span')<ButtonProps<AllButtonTypes>>(
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
  ({buttonType}) => {
    const {types} = ButtonStyles.labelBaseStyles.variants!;

    switch (buttonType) {
      case TextButtonType.Default:
      case TextButtonType.Inverse:
        return types.text;
      case TextButtonType.AllCaps:
      case TextButtonType.InverseAllCaps:
        return types.textAllCaps;
      case ButtonType.Primary:
        return types.primary;
      case ButtonType.Secondary:
        return types.secondary;
      case ButtonType.Delete:
        return types.delete;
      default:
        return {};
    }
  }
);

export const ButtonLabelData = styled('span')<ButtonProps>(
  ButtonStyles.labelDataBaseStyles.styles,
  ({size}) => {
    const {sizes} = ButtonStyles.labelDataBaseStyles.variants!;
    switch (size) {
      case ButtonSize.Large:
      default:
        return sizes.large;
      case ButtonSize.Medium:
        return sizes.medium;
    }
  }
);

const ButtonLabelIconStyled = styled('span')<
  ButtonLabelIconProps & Pick<TextButtonProps, 'iconPosition'>
>(
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

export interface ButtonLabelIconProps extends BaseButtonProps<AllButtonTypes> {
  dropdown?: boolean;
}

export class ButtonLabelIcon extends React.Component<ButtonLabelIconProps> {
  public render() {
    /* istanbul ignore next line for coverage */
    if (this.props.icon === undefined) {
      return {};
    }

    let iconSize = 24;

    if (this.props.size === ButtonSize.Small) {
      iconSize = 20;
    }

    return (
      <ButtonLabelIconStyled {...this.props}>
        <SystemIcon size={iconSize} icon={this.props.icon} />
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
  buttonType?: AllButtonTypes
) {
  const {types} = baseButton.variants!;

  switch (buttonType) {
    case ButtonType.Primary:
    default:
      return types[ButtonType.Primary];
    case ButtonType.Secondary:
      return types[ButtonType.Secondary];
    case ButtonType.Delete:
      return types[ButtonType.Delete];
    case BetaButtonType.Highlight:
      return types[BetaButtonType.Highlight];
    case BetaButtonType.OutlinePrimary:
      return types[BetaButtonType.OutlinePrimary];
    case BetaButtonType.OutlineSecondary:
      return types[BetaButtonType.OutlineSecondary];
    case BetaButtonType.OutlineInverse:
      return types[BetaButtonType.OutlineInverse];
    case BetaButtonType.Primary:
      return types[BetaButtonType.Primary];
    case BetaButtonType.Secondary:
      return types[BetaButtonType.Secondary];
    case BetaButtonType.Delete:
      return types[BetaButtonType.Delete];
    case TextButtonType.Default:
      return types[TextButtonType.Default];
    case TextButtonType.Inverse:
      return types[TextButtonType.Inverse];
    case TextButtonType.AllCaps:
      return types[TextButtonType.AllCaps];
    case TextButtonType.InverseAllCaps:
      return types[TextButtonType.InverseAllCaps];
    case IconButtonType.Square:
      return types[IconButtonType.Square];
    case IconButtonType.SquareFilled:
      return types[IconButtonType.SquareFilled];
    case IconButtonType.Plain:
      return types[IconButtonType.Plain];
    case IconButtonType.Circle:
      return types[IconButtonType.Circle];
    case IconButtonType.CircleFilled:
      return types[IconButtonType.CircleFilled];
    case IconButtonType.Inverse:
      return types[IconButtonType.Inverse];
    case IconButtonType.InverseFilled:
      return types[IconButtonType.InverseFilled];
  }
}

function getBaseButton(buttonType: ButtonType | BetaButtonType) {
  switch (buttonType) {
    case ButtonType.Primary:
    case ButtonType.Secondary:
    case ButtonType.Delete:
    default:
      return ButtonStyles.canvasButtonStyles;
    case BetaButtonType.Primary:
    case BetaButtonType.Secondary:
    case BetaButtonType.Delete:
    case BetaButtonType.Highlight:
    case BetaButtonType.OutlinePrimary:
    case BetaButtonType.OutlineSecondary:
    case BetaButtonType.OutlineInverse:
      return ButtonStyles.betaButtonStyles;
  }
}
