import * as React from 'react';

// We're using a separate class instead of using the regular
// option elements because it gives us more flexibility to
// change the visual of the dropdown later on

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  /**
   * The value of the SelectOption.
   */
  value?: string;
  /**
   * The text of the SelectOption label.
   */
  label?: string;
  /**
   * If true, set the SelectOption to the disabled state.
   * @default false
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
