import * as React from 'react';
import {
  GrowthBehavior,
  ErrorType,
  errorRing,
  styled,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {
  colors,
  borderRadius,
  inputColors,
  spaceNumbers,
  type,
  space,
} from '@workday/canvas-kit-react/tokens';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import SelectOption from './SelectOption';

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * The SelectOption children of the Select (must be at least two).
   */
  children: React.ReactElement<SelectOption> | React.ReactElement<SelectOption>[];
  /**
   * If true, set the Select to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type of error associated with the Select (if applicable).
   */
  error?: ErrorType;
  /**
   * The function called when the Select state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * The value of the Select.
   */
  value?: string;
}

const SelectContainer = styled('select')<SelectProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: space.xl,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spaceNumbers.xxs, // IE11 bugfix: add padding so text is displayed properly
    margin: 0, // Fix Safari
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
  top: space.xxxs,
  right: space.xxxs,
  padding: space.xxxs,
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

class Select extends React.Component<SelectProps> {
  static ErrorType = ErrorType;

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {disabled = false, error, grow, children, value, onChange, ...elemProps} = this.props;

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

Select.ErrorType = ErrorType;

export default Select;
