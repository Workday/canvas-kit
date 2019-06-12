import * as React from 'react';

// We're using a separate class instead of using the regular
// option elements because it gives us more flexibility to
// change the visual of the dropdown later on

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
