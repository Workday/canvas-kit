import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle, getButtonSize} from './ButtonBase';
import styled from 'react-emotion';
import {BaseButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {ButtonSizes, BetaButtonTypes} from './types';

const DropdownButtonCon = styled('button')<BaseButtonProps>(
  dropdownButtonStyles.styles,
  ({buttonType}) => getButtonStyle(dropdownButtonStyles, buttonType),
  ({buttonSize}) => getButtonSize(dropdownButtonStyles, buttonSize)
);

export default class DropdownButton extends React.Component<BaseButtonProps> {
  public static Types = BetaButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    buttonType: BetaButtonTypes.Primary,
    buttonSize: ButtonSizes.Large,
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
