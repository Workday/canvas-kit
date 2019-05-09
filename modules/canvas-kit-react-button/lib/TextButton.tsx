import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonSizes, IconPositions, TextButtonTypes} from './types';
import {BaseButtonProps} from './Button';
import {textButtonStyles} from './ButtonStyles';

export interface TextButtonProps extends BaseButtonProps<TextButtonTypes> {
  iconPosition?: IconPositions;
}

const TextButtonCon = styled('button')<TextButtonProps>(
  textButtonStyles.styles,
  ({buttonType}) => getButtonStyle(textButtonStyles, buttonType),
  ({buttonSize}) => {
    const {sizes} = textButtonStyles.variants!;

    switch (buttonSize) {
      case ButtonSizes.Large:
      default:
        return sizes.large;
      case ButtonSizes.Medium:
      case ButtonSizes.Small:
        return sizes.small;
    }
  }
);

export default class TextButton extends React.Component<TextButtonProps> {
  public static IconPositions = IconPositions;
  public static Types = TextButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    iconPosition: IconPositions.Left,
    buttonType: TextButtonTypes.Default,
    buttonSize: ButtonSizes.Large,
  };

  public render() {
    const {children, ...elemProps} = this.props;

    return (
      <TextButtonCon {...this.props}>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Left && (
            <ButtonLabelIcon icon={elemProps.icon} {...this.props} />
          )}
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        {elemProps.icon &&
          elemProps.iconPosition === IconPositions.Right && (
            <ButtonLabelIcon icon={elemProps.icon} {...this.props} />
          )}
      </TextButtonCon>
    );
  }
}
