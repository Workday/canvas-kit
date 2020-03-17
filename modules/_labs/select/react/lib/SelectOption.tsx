import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {keyframes} from '@emotion/core';
import {colors, commonColors, type, typeColors} from '@workday/canvas-kit-react-core';
import {selectionPersistMenuDuration} from './Select';

export interface SelectOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  disabled: boolean;
  error?: ErrorType;
  focused?: boolean;
  id?: string;
  justSelected?: boolean;
  label?: string;
  optionRef?: React.Ref<HTMLLIElement>;
  selected?: boolean;
  suppressed?: boolean;
  value?: string;
}

const flashAnimation = keyframes`
  0%, 33% {
    background-color: ${commonColors.focusBackground};
    color: ${typeColors.inverse};
  }
  34%, 65% {
    background-color: ${colors.blueberry100};
    color: inherit;
  }
  66%, 100% {
    background-color: ${commonColors.focusBackground};
    color: ${typeColors.inverse};
  }
`;

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    cursor: 'default',
    // In case label is empty/undefined for some reason
    minHeight: type.body.lineHeight,
  },
  ({disabled, focused, selected, suppressed}) => {
    if (disabled) {
      return {
        color: colors.licorice100,
      };
    } else if (selected) {
      return {
        backgroundColor: colors.blueberry100,
      };
    } else if (focused) {
      return {
        backgroundColor: commonColors.focusBackground,
        color: typeColors.inverse,
      };
    } else if (!suppressed) {
      return {
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
        },
      };
    } else {
      return;
    }
  },
  ({error}) => ({
    padding: `6px ${error === ErrorType.Alert ? 7 : 8}px`,
  }),
  ({justSelected}) =>
    justSelected && {
      animation: `${flashAnimation} ${selectionPersistMenuDuration / 1000}s 1`,
      // Retain the styles set by the last keyframe
      animationFillMode: 'forwards',
    }
);

export default class SelectOption extends React.Component<SelectOptionProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {id, label, optionRef, selected, value, ...elemProps} = this.props;

    return (
      <Option
        aria-selected={selected === true ? 'true' : undefined}
        data-value={value}
        id={id}
        ref={optionRef}
        role="option"
        selected={selected}
        {...elemProps}
      >
        {label}
      </Option>
    );
  }
}
