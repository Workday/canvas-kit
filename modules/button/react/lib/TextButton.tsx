import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon} from './ButtonBase';
import {getButtonStyle} from './utils';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonSize, IconPosition, TextButtonVariant} from './types';
import {BaseButtonProps} from './Button';
import {textButtonStyles} from './ButtonStyles';

export interface TextButtonProps extends BaseButtonProps<TextButtonVariant> {
  iconPosition?: IconPosition;
}

const TextButtonCon = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<TextButtonProps>(
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
    const {
      buttonRef,
      onClick,
      children,
      iconPosition,
      size,
      variant,
      icon,
      ...elemProps
    } = this.props;

    return (
      <TextButtonCon onClick={onClick} ref={buttonRef} size={size} variant={variant} {...elemProps}>
        {icon && iconPosition === IconPosition.Left && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
        )}
        <ButtonBaseLabel size={size} variant={variant}>
          {children}
        </ButtonBaseLabel>
        {icon && iconPosition === IconPosition.Right && (
          <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
        )}
      </TextButtonCon>
    );
  }
}
