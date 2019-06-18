import * as React from 'react';
import styled from 'react-emotion';
import {
  ButtonSizes,
  ButtonTypes,
  IconPositions,
  AllButtonTypes,
  TextButtonTypes,
  BetaButtonTypes,
  IconButtonTypes,
} from './types';
import {ButtonProps, BaseButtonProps} from './Button';
import {TextButtonProps} from './TextButton';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import * as ButtonStyles from './ButtonStyles';

export const ButtonBaseCon = styled('button')<ButtonProps>(
  /* istanbul ignore next line for coverage */
  ({buttonType, buttonSize}) => {
    if (buttonType === undefined) {
      return {};
    }

    const baseButton = getBaseButton(buttonType);
    const buttonStyles = getButtonStyle(baseButton, buttonType);
    const buttonSizeStyles = buttonSize !== undefined ? getButtonSize(baseButton, buttonSize) : {};

    return {
      ...baseButton.styles,
      ...buttonStyles,
      ...buttonSizeStyles,
    };
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'}
);

export const ButtonBaseLabel = styled('span')<ButtonProps<AllButtonTypes>>(
  ButtonStyles.labelBaseStyles.styles,
  ({buttonSize}) => {
    const {sizes} = ButtonStyles.labelBaseStyles.variants!;

    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Small:
        return sizes.small;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  },
  ({buttonType}) => {
    const {types} = ButtonStyles.labelBaseStyles.variants!;

    switch (buttonType) {
      case TextButtonTypes.Default:
      case TextButtonTypes.Inverse:
        return types.text;
      case TextButtonTypes.AllCaps:
      case TextButtonTypes.InverseAllCaps:
        return types.textAllCaps;
      case ButtonTypes.Primary:
        return types.primary;
      case ButtonTypes.Secondary:
        return types.secondary;
      case ButtonTypes.Delete:
        return types.delete;
      default:
        return {};
    }
  }
);

export const ButtonLabelData = styled('span')<ButtonProps>(
  ButtonStyles.labelDataBaseStyles.styles,
  ({buttonSize}) => {
    const {sizes} = ButtonStyles.labelDataBaseStyles.variants!;
    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  }
);

const ButtonLabelIconStyled = styled('span')<
  ButtonLabelIconProps & Pick<TextButtonProps, 'iconPosition'>
>(
  ButtonStyles.labelIconBaseStyles.styles,
  ({buttonSize, dropdown}) => {
    if (dropdown) {
      switch (buttonSize) {
        case ButtonSizes.Large:
        default:
          return {padding: '0 8px 0 0'};
        case ButtonSizes.Medium:
          return {padding: '0 4px 0 0'};
      }
    }

    const {sizes} = ButtonStyles.labelIconBaseStyles.variants!;

    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Medium:
        return sizes.medium;
    }
  },
  ({iconPosition}) => {
    if (iconPosition === undefined) {
      return {};
    }

    const {types} = ButtonStyles.labelIconBaseStyles.variants!;

    switch (iconPosition) {
      case IconPositions.Left:
      default:
        return types.iconPositionLeft;
      case IconPositions.Right:
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

    if (this.props.buttonSize === ButtonSizes.Small) {
      iconSize = 20;
    }

    return (
      <ButtonLabelIconStyled {...this.props}>
        <SystemIcon size={iconSize} icon={this.props.icon} />
      </ButtonLabelIconStyled>
    );
  }
}

export function getButtonSize(
  baseButton: ButtonStyles.ButtonGenericStyle,
  buttonSize?: ButtonSizes
) {
  const {sizes} = baseButton.variants!;

  switch (buttonSize) {
    case ButtonSizes.Large:
      return sizes.large;
    case ButtonSizes.Medium:
    default:
      return sizes.medium;
    case ButtonSizes.Small:
      return sizes.small;
  }
}

export function getButtonStyle(
  baseButton: ButtonStyles.ButtonGenericStyle,
  buttonType?: AllButtonTypes
) {
  const {types} = baseButton.variants!;

  switch (buttonType) {
    case ButtonTypes.Primary:
    default:
      return types[ButtonTypes.Primary];
    case ButtonTypes.Secondary:
      return types[ButtonTypes.Secondary];
    case ButtonTypes.Delete:
      return types[ButtonTypes.Delete];
    case BetaButtonTypes.Highlight:
      return types[BetaButtonTypes.Highlight];
    case BetaButtonTypes.OutlinePrimary:
      return types[BetaButtonTypes.OutlinePrimary];
    case BetaButtonTypes.OutlineSecondary:
      return types[BetaButtonTypes.OutlineSecondary];
    case BetaButtonTypes.OutlineInverse:
      return types[BetaButtonTypes.OutlineInverse];
    case BetaButtonTypes.Primary:
      return types[BetaButtonTypes.Primary];
    case BetaButtonTypes.Secondary:
      return types[BetaButtonTypes.Secondary];
    case BetaButtonTypes.Delete:
      return types[BetaButtonTypes.Delete];
    case TextButtonTypes.Default:
      return types[TextButtonTypes.Default];
    case TextButtonTypes.Inverse:
      return types[TextButtonTypes.Inverse];
    case TextButtonTypes.AllCaps:
      return types[TextButtonTypes.AllCaps];
    case TextButtonTypes.InverseAllCaps:
      return types[TextButtonTypes.InverseAllCaps];
    case IconButtonTypes.Square:
      return types[IconButtonTypes.Square];
    case IconButtonTypes.SquareFilled:
      return types[IconButtonTypes.SquareFilled];
    case IconButtonTypes.Plain:
      return types[IconButtonTypes.Plain];
    case IconButtonTypes.Circle:
      return types[IconButtonTypes.Circle];
    case IconButtonTypes.CircleFilled:
      return types[IconButtonTypes.CircleFilled];
    case IconButtonTypes.Inverse:
      return types[IconButtonTypes.Inverse];
    case IconButtonTypes.InverseFilled:
      return types[IconButtonTypes.InverseFilled];
  }
}

function getBaseButton(buttonType: ButtonTypes | BetaButtonTypes) {
  switch (buttonType) {
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
    case ButtonTypes.Delete:
    default:
      return ButtonStyles.canvasButtonStyles;
    case BetaButtonTypes.Primary:
    case BetaButtonTypes.Secondary:
    case BetaButtonTypes.Delete:
    case BetaButtonTypes.Highlight:
    case BetaButtonTypes.OutlinePrimary:
    case BetaButtonTypes.OutlineSecondary:
    case BetaButtonTypes.OutlineInverse:
      return ButtonStyles.betaButtonStyles;
  }
}
