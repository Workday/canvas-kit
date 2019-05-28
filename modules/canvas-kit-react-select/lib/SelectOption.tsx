import * as React from 'react';
import styled from 'react-emotion';

export interface SelectOptionProps {
  value?: string;
  label?: string;
  disabled?: boolean;
}
const SelectOptionContainer = styled('option')<SelectOptionProps>({});

export default class SelectOption extends React.Component<SelectOptionProps> {
  public render() {
    const {value, label, disabled, ...otherProps} = this.props;

    return (
      <SelectOptionContainer value={value} label={label} disabled={disabled} {...otherProps}>
        {label}
      </SelectOptionContainer>
    );
  }
}
