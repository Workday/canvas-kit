import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle, getButtonSize} from './ButtonBase';
import styled from 'react-emotion';
import {BaseButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {ButtonSize, BetaButtonVariant} from './types';

const DropdownButtonCon = styled('button')<BaseButtonProps>(
  dropdownButtonStyles.styles,
  ({variant}) => getButtonStyle(dropdownButtonStyles, variant),
  ({size}) => getButtonSize(dropdownButtonStyles, size)
);

export default class DropdownButton extends React.Component<BaseButtonProps> {
  public static Variant = BetaButtonVariant;
  public static Size = ButtonSize;

  static defaultProps = {
    variant: BetaButtonVariant.Primary,
    size: ButtonSize.Large,
  };

  public render() {
    const {children} = this.props;

    return (
      <DropdownButtonCon {...this.props}>
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        <ButtonLabelIcon icon={caretDownIcon} {...this.props} dropdown={true} />
      </DropdownButtonCon>
    );
  }
}
