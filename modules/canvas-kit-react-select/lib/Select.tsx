import * as React from 'react';
import styled from 'react-emotion';
import {CSSObject} from 'create-emotion';
import {GrowthBehavior, ErrorType, GenericStyle} from '@workday/canvas-kit-react-common';
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

export interface TextInputGenericStyle extends GenericStyle {
  variants: {
    states: {
      error: CSSObject;
      alert: CSSObject;
    };
  };
}

function getErrorStyle(error: ErrorType): CSSObject {
  let errorBorderColor;

  if (error === ErrorType.Error) {
    errorBorderColor = inputColors.error.border;
  } else {
    errorBorderColor = inputColors.warning.border;
  }

  return {
    borderColor: errorBorderColor,
    transition: '100ms box-shadow',
    boxShadow: `inset 0 0 0 1px ${errorBorderColor}`,
    '&:hover': {
      borderColor: errorBorderColor,
    },
    '&:focus:not([disabled])': {
      borderColor: errorBorderColor,
      boxShadow: `inset 0 0 0 1px ${errorBorderColor},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${inputColors.focusBorder}`,
    },
  };
}

export const SelectStyles: TextInputGenericStyle = {
  classname: 'text-input',
  styles: {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    height: 40,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
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
  variants: {
    states: {
      error: getErrorStyle(ErrorType.Error),
      alert: getErrorStyle(ErrorType.Alert),
    },
  },
};

const SelectContainer = styled('select')<SelectProps>(
  SelectStyles.styles,
  ({error}) => {
    if (error === ErrorType.Error) {
      return SelectStyles.variants.states.error;
    } else if (error === ErrorType.Alert) {
      return SelectStyles.variants.states.alert;
    } else {
      return {};
    }
  },
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

const SelectWrapper = styled('div')<SelectProps>(({grow, disabled}) => ({
  display: grow ? 'block' : 'inline-block',
  position: 'relative',
  '& span': {
    backgroundColor: disabled ? colors.soap100 : colors.frenchVanilla100,
  },
  '&:hover path': {
    fill: disabled ? undefined : colors.licorice500,
  },
}));

export default class Select extends React.Component<SelectProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {error, disabled, grow, children, value, onChange} = this.props;

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectContainer
          disabled={disabled}
          grow={grow}
          error={error}
          value={value}
          onChange={onChange}
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
