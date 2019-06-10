import * as React from 'react';

export interface SelectOptionProps {
  value?: string;
  label?: string;
  disabled?: boolean;
}

export default class SelectOption extends React.Component<SelectOptionProps> {
  public render() {
    const {value, label, disabled, ...otherProps} = this.props;

    return (
      <option value={value} label={label} disabled={disabled} {...otherProps}>
        {label}
      </option>
    );
  }
}
