import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon} from './ButtonBase';
import {getButtonStyle, getButtonSize} from './utils';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {BaseButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {ButtonSize, ButtonVariant} from './types';

const DropdownButtonCon = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<BaseButtonProps>(
  dropdownButtonStyles.styles,
  ({variant}) => getButtonStyle(dropdownButtonStyles, variant),
  ({size}) => getButtonSize(dropdownButtonStyles, size)
);

export default class DropdownButton extends React.Component<BaseButtonProps> {
  public static Variant = ButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
  };

  public render() {
    const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = this.props;

    return (
      <DropdownButtonCon variant={variant} size={size} ref={buttonRef} {...elemProps}>
        <ButtonBaseLabel variant={variant} size={size}>
          {children}
        </ButtonBaseLabel>
        <ButtonLabelIcon size={size} icon={caretDownIcon} dropdown={true} />
      </DropdownButtonCon>
    );
  }
}
