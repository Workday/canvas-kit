import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {keyframes} from '@emotion/core';
import {
  borderRadius,
  colors,
  commonColors,
  // spacing,
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
  justSelected?: boolean;
}

const blinkAnimation = keyframes`
  0%, 49% {
    background-color: ${commonColors.focusBackground};
    color: ${typeColors.inverse};
  }
  50%, 100% {
    background-color: transparent;
    color: inherit;
  }
`;

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    cursor: 'default',
    padding: '6px 8px',
    '&:first-child': {
      borderTop: `1px solid ${colors.soap400}`,
    },
    '&:last-child': {
      borderRadius: `0 0 ${borderRadius.s} ${borderRadius.s}`,
    },
  },
  ({disabled, focused}) => {
    if (!disabled && !focused) {
      return {
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
        },
      };
    }
    if (disabled) {
      return {
        color: colors.licorice100,
      };
    }
    if (focused) {
      return {
        backgroundColor: commonColors.focusBackground,
        color: typeColors.inverse,
      };
    }
  },
  ({selected}) =>
    selected &&
    {
      // '&:before': {
      //   content: '"✓"',
      //   marginRight: spacing.xxxs,
      // },
    },
  ({justSelected}) =>
    justSelected && {
      animation: `${blinkAnimation} 0.15s infinite`,
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
