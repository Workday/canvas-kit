import * as React from 'react';

// We're using a separate class instead of using the regular
// option elements because it gives us more flexibility to
// change the visual of the dropdown later on

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  /**
   * The value of the SelectOption
   */
  value?: string;
  /**
   * The label of the SelectOption
   */
  label?: string;
  /**
   * Whether or not the SelectOption is disabled
   */
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
