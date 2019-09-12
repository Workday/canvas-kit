import * as React from 'react';
import {GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import {inputColors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import InputIconContainer from './InputIconContainer';
import Input from '../../../input/react/index';

export interface TextInputProps
  extends GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: ErrorType;
  hasIcon?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
}

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  render() {
    // TODO: Standardize on prop spread location (see #150)
    const {grow, inputRef, error, ...inputProps} = this.props;

    let icon: React.ReactElement<SystemIcon> | undefined;
    switch (error) {
      case ErrorType.Alert:
        icon = (
          <SystemIcon
            icon={exclamationTriangleIcon}
            color={inputColors.warning.icon}
            colorHover={inputColors.warning.icon}
          />
        );
        break;
      case ErrorType.Error:
        icon = (
          <SystemIcon
            icon={exclamationCircleIcon}
            color={inputColors.error.icon}
            colorHover={inputColors.error.icon}
          />
        );
        break;
      default:
    }

    return (
      <InputIconContainer icon={icon} grow={grow}>
        <Input {...inputProps} {...this.props} />
      </InputIconContainer>
    );
  }
}
