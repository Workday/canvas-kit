import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {
  borderRadius,
  colors,
  commonColors,
  spacing,
  type,
  typeColors,
} from '@workday/canvas-kit-react-core';
// import { SystemIcon } from '@workday/canvas-kit-react-icon';
// import { checkSmallIcon } from '@workday/canvas-system-icons-web';

export interface SelectOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value: string;
  label: string;
  disabled: boolean;
  focused?: boolean;
  selected?: boolean;
}

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    padding: '6px 8px',
    '&:first-child': {
      borderTop: `1px solid ${colors.soap400}`,
    },
    '&:last-child': {
      borderRadius: `0 0 ${borderRadius.s} ${borderRadius.s}`,
    },
  },
  ({disabled}) =>
    disabled && {
      color: colors.licorice100,
    },
  ({focused}) => {
    if (focused) {
      return {
        backgroundColor: commonColors.focusBackground,
        color: typeColors.inverse,
      };
    } else {
      return {
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
        },
      };
    }
  },
  ({selected}) =>
    selected && {
      '&:before': {
        content: '"✓"',
        marginRight: spacing.xxxs,
      },
    }
);

export default class SelectOption extends React.Component<SelectOptionProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {value, label, disabled, ...elemProps} = this.props;

    return (
      <Option tabIndex={-1} value={value} label={label} disabled={disabled} {...elemProps}>
        {/* <SystemIcon icon={checkSmallIcon} /> */}
        {label}
      </Option>
    );
  }
}
