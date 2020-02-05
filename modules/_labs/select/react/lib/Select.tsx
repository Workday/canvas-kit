import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {
  colors,
  borderRadius,
  inputColors,
  spacingNumbers,
  type,
  spacing,
} from '@workday/canvas-kit-react-core';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {default as SelectOption, SelectOptionProps} from './SelectOption';

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * React children must be of type SelectOption and have at least two.
   */
  children: React.ReactElement<SelectOption>[];
  disabled?: boolean;
  error?: ErrorType;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

export interface SelectState {
  value: string;
  showingMenu: boolean;
}

const SelectContainer = styled('select')<SelectProps & {showingMenu: boolean}>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    // borderBottom: 0,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    // borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
    boxSizing: 'border-box',
    height: spacing.xl,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // IE11 bugfix: add padding so text is displayed properly
    margin: 0, // Fix Safari
    MozAppearance: 'none', // FF bugfix: hide arrow so it doesn't show under ours
    WebkitAppearance: 'none',
    option: {
      display: 'none',
    },
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:hover': {
      borderColor: inputColors.hoverBorder,
    },
    '&:focus:not([disabled])': {
      borderColor: inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
      // borderWidth: `2px`,
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
  // ({showingMenu}) =>
  //   showingMenu && {
  //     borderBottom: 0,
  //     borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
  //   },
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

const SelectDropdown = styled('ul')({
  backgroundColor: colors.frenchVanilla100,
  border: `2px solid ${inputColors.focusBorder}`,
  borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
  // boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
  borderTop: 0,
  boxSizing: 'border-box',
  listStyle: 'none',
  margin: 0,
  minWidth: 280,
  padding: 0,
  position: 'absolute',
  top: `${spacingNumbers.xl - parseInt(borderRadius.m, 10)}px`,
  zIndex: 1,
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

export default class Select extends React.Component<SelectProps, SelectState> {
  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  state: Readonly<SelectState> = {
    value: '',
    showingMenu: false,
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({value: this.props.value});
    }
  }

  handleSelectClick = (event: React.MouseEvent<HTMLSelectElement>): void => {
    this.setState({showingMenu: !this.state.showingMenu});
  };

  handleSelectBlur = (event: React.FocusEvent): void => {
    this.setState({showingMenu: false});
  };

  handleOptionClick = (event: React.MouseEvent, optionProps: SelectOptionProps): void => {
    this.setState({value: optionProps.value});
    this.setState({showingMenu: false});
  };

  renderOptions = (child: React.ReactElement<SelectOptionProps>): React.ReactNode => {
    const {value, label, disabled} = child.props;

    return (
      <option value={value} disabled={disabled}>
        {label}
      </option>
    );
  };

  renderChildren = (child: React.ReactElement<SelectOptionProps>): React.ReactNode => {
    return React.cloneElement(child, {
      onMouseDown: (event: React.MouseEvent) => {
        event.preventDefault();
        this.handleOptionClick(event, child.props);
      },
    });
  };

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {error, disabled, grow, children, onChange, ...elemProps} = this.props;

    const {value} = this.state;

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectContainer
          disabled={disabled}
          grow={grow}
          error={error}
          value={value}
          onBlur={this.handleSelectBlur}
          onChange={onChange}
          onClick={this.handleSelectClick}
          showingMenu={this.state.showingMenu}
          {...elemProps}
        >
          {/* {children} */}
          {React.Children.map(children, this.renderOptions)}
        </SelectContainer>
        {this.state.showingMenu && (
          <SelectDropdown>
            {/* {children} */}
            {React.Children.map(children, this.renderChildren)}
            {/* <SelectOption value="option-a" label="Option A" />
            <SelectOption value="option-b" label="Option B" />
            <SelectOption value="option-c" label="Option C" />
            <SelectOption value="option-d" label="Option D" />
            <SelectOption value="option-e" label="Option E" />
            <SelectOption value="option-f" label="Option F" disabled={true} />
            <SelectOption value="option-g" label="Option G" /> */}
          </SelectDropdown>
        )}
        <SelectDropdownIcon
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
        />
      </SelectWrapper>
    );
  }
}
