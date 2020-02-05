import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {borderRadius, colors, commonColors, type} from '@workday/canvas-kit-react-core';

export interface SelectOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value?: string;
  label?: string;
  disabled: boolean;
}

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    padding: '6px 8px',
    '&:first-child': {
      borderTop: `1px solid ${colors.soap400}`,
    },
    '&:last-child': {
      borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
    },
    '&:hover': {
      backgroundColor: commonColors.hoverBackground,
    },
  },
  ({disabled}) =>
    disabled && {
      color: colors.licorice100,
    }
);

export default class SelectOption extends React.Component<SelectOptionProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {value, label, disabled, ...elemProps} = this.props;

    return (
      <Option value={value} label={label} disabled={disabled} {...elemProps}>
        {label}
      </Option>
    );
  }
}
