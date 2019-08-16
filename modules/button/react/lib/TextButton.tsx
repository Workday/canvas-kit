import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonSize, IconPosition, TextButtonType} from './types';
import {BaseButtonProps} from './Button';
import {textButtonStyles} from './ButtonStyles';

export interface TextButtonProps extends BaseButtonProps<TextButtonType> {
  iconPosition?: IconPosition;
}

const TextButtonCon = styled('button')<TextButtonProps>(
  textButtonStyles.styles,
  ({buttonType}) => getButtonStyle(textButtonStyles, buttonType),
  ({buttonSize}) => {
    const {sizes} = textButtonStyles.variants!;

    switch (buttonSize) {
      case ButtonSize.Large:
      default:
        return sizes.large;
      case ButtonSize.Medium:
      case ButtonSize.Small:
        return sizes.small;
    }
  }
);

export default class TextButton extends React.Component<TextButtonProps> {
  public static IconPosition = IconPosition;
  public static Type = TextButtonType;
  public static Size = ButtonSize;

  static defaultProps = {
    iconPosition: IconPosition.Left,
    buttonType: TextButtonType.Default,
    buttonSize: ButtonSize.Large,
  };

  public render() {
    const {buttonRef, onClick, children, ...elemProps} = this.props;

    return (
      <TextButtonCon onClick={onClick} innerRef={buttonRef} {...elemProps}>
        {elemProps.icon && elemProps.iconPosition === IconPosition.Left && (
          <ButtonLabelIcon {...elemProps} />
        )}
        <ButtonBaseLabel {...elemProps}>{children}</ButtonBaseLabel>
        {elemProps.icon && elemProps.iconPosition === IconPosition.Right && (
          <ButtonLabelIcon {...elemProps} />
        )}
      </TextButtonCon>
    );
  }
}
