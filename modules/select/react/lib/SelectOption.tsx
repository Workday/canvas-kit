import * as React from 'react';

// We're using a separate class instead of using the regular
// option elements because it gives us more flexibility to
// change the visual of the dropdown later on

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value?: string;
  label?: string;
  disabled: boolean;
}

export default class SelectOption extends React.Component<SelectOptionProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {value, label, disabled, ...elemProps} = this.props;

    return (
      <option value={value} label={label} disabled={disabled} {...elemProps}>
        {label}
      </option>
    );
  }
}
