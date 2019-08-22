import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {colors, inputColors, spacingNumbers, type, spacing} from '@workday/canvas-kit-react-core';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import SelectOption from './SelectOption';

export interface SelectProps extends GrowthBehavior, React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * React children must be of type SelectOption and have at least two.
   */
  children: React.ReactElement<SelectOption>[];
  disabled?: boolean;
  error?: ErrorType;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
}

const SelectContainer = styled('select')<SelectProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    height: spacing.xl,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // IE11 bugfix: add padding so text is displayed properly
    MozAppearance: 'none', // FF bugfix: hide arrow so it doesn't show under ours
    WebkitAppearance: 'none',
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:hover': {
      borderColor: inputColors.hoverBorder,
    },
    '&:focus:not([disabled])': {
      borderColor: inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: inputColors.disabled.background,
      borderColor: inputColors.disabled.border,
      color: inputColors.disabled.text,
      '&::placeholder': {
        color: inputColors.disabled.text,
      },
    },
  },
  ({error}) => ({
    ...errorRing(error),
  }),
  ({grow}) =>
    grow && {
      width: '100%',
    }
);

const SelectDropdownIcon = styled(SystemIcon)({
  position: 'absolute',
  top: spacing.xxxs,
  right: spacing.xxxs,
  padding: spacing.xxxs,
  pointerEvents: 'none',
  '& path': {
    transition: '100ms fill',
  },
});

const SelectWrapper = styled('div')<Pick<SelectProps, 'grow' | 'disabled'>>(
  {
    position: 'relative',
  },
  ({grow}) => ({
    display: grow ? 'block' : 'inline-block',
  }),
  ({disabled}) => ({
    '& span': {
      backgroundColor: disabled ? colors.soap100 : colors.frenchVanilla100,
    },
    '&:hover path': {
      fill: disabled ? undefined : colors.licorice500,
    },
  })
);

export default class Select extends React.Component<SelectProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {error, disabled, grow, children, value, onChange, ...elemProps} = this.props;

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectContainer
          disabled={disabled}
          grow={grow}
          error={error}
          value={value}
          onChange={onChange}
          {...elemProps}
        >
          {children}
        </SelectContainer>
        <SelectDropdownIcon
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
        />
      </SelectWrapper>
    );
  }
}
