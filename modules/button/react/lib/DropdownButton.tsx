import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle, getButtonSize} from './ButtonBase';
import styled from 'react-emotion';
import {BaseButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {ButtonSize, BetaButtonType} from './types';

const DropdownButtonCon = styled('button')<BaseButtonProps>(
  dropdownButtonStyles.styles,
  ({buttonType}) => getButtonStyle(dropdownButtonStyles, buttonType),
  ({buttonSize}) => getButtonSize(dropdownButtonStyles, buttonSize)
);

export default class DropdownButton extends React.Component<BaseButtonProps> {
  public static Type = BetaButtonType;
  public static Size = ButtonSize;

  static defaultProps = {
    buttonType: BetaButtonType.Primary,
    buttonSize: ButtonSize.Large,
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
