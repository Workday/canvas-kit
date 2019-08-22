import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonSize, IconPosition, TextButtonVariant} from './types';
import {BaseButtonProps} from './Button';
import {textButtonStyles} from './ButtonStyles';

export interface TextButtonProps extends BaseButtonProps<TextButtonVariant> {
  iconPosition?: IconPosition;
}

const TextButtonCon = styled('button')<TextButtonProps>(
  textButtonStyles.styles,
  ({variant}) => getButtonStyle(textButtonStyles, variant),
  ({size}) => {
    const {sizes} = textButtonStyles.variants!;

    switch (size) {
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
  public static Variant = TextButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    iconPosition: IconPosition.Left,
    variant: TextButtonVariant.Default,
    size: ButtonSize.Large,
  };

  public render() {
    const {buttonRef, onClick, children, iconPosition, size, variant, ...elemProps} = this.props;

    return (
      <TextButtonCon
        onClick={onClick}
        innerRef={buttonRef}
        size={size}
        variant={variant}
        {...elemProps}
      >
        {elemProps.icon && iconPosition === IconPosition.Left && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} {...elemProps} />
        )}
        <ButtonBaseLabel size={size} variant={variant} {...elemProps}>
          {children}
        </ButtonBaseLabel>
        {elemProps.icon && iconPosition === IconPosition.Right && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} {...elemProps} />
        )}
      </TextButtonCon>
    );
  }
}
