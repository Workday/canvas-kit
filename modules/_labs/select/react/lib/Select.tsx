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
  label: string;
  showingMenu: boolean;
}

const SelectInput = styled('input')<SelectProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    cursor: 'default',
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: spacing.xl,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // IE11 bugfix: add padding so text is displayed properly
    margin: 0, // Fix Safari
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

const SelectDropdown = styled('ul')({
  backgroundColor: colors.frenchVanilla100,
  border: `2px solid ${inputColors.focusBorder}`,
  borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
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
  private inputRef = React.createRef<HTMLInputElement>();

  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  state: Readonly<SelectState> = {
    label: '',
    showingMenu: false,
  };

  componentDidMount() {
    const {children, value} = this.props;
    const childrenArray = React.Children.toArray(children);

    // if value exists, set state to that value...
    if (value) {
      const matchingChild = childrenArray.filter(child => child.props.value === value);

      if (matchingChild.length) {
        const {label: childLabel, value: childValue} = matchingChild[0].props;
        this.setState({
          label: childLabel,
        });
        return;
      }
    }

    // ... otherwise, set state to the first option
    const firstOption = childrenArray[0];
    // console.log('setting firstOption label:', firstOption.props.label);
    this.setState({
      label: firstOption.props.label,
    });
  }

  handleSelectClick = (event: React.MouseEvent<HTMLSelectElement>): void => {
    this.setState({showingMenu: !this.state.showingMenu});
  };

  handleSelectBlur = (event: React.FocusEvent): void => {
    this.setState({showingMenu: false});
  };

  handleOptionClick = (optionProps: SelectOptionProps): void => {
    this.setState({label: optionProps.label});
    this.setState({showingMenu: false});

    if (this.inputRef && this.inputRef.current) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(this.inputRef.current),
        'value'
      );
      if (nativeInputValue && nativeInputValue.set) {
        nativeInputValue.set.call(this.inputRef.current, optionProps.value);
      }

      let event: Event;
      if (typeof Event === 'function') {
        // modern browsers
        event = new Event('input', {bubbles: true});
      } else {
        // IE 11
        event = document.createEvent('Event');
        event.initEvent('input', true);
      }

      this.inputRef.current.dispatchEvent(event);
    }
  };

  renderChildren = (child: React.ReactElement<SelectOptionProps>): React.ReactNode => {
    return React.cloneElement(child, {
      onMouseDown: (event: React.MouseEvent) => {
        event.preventDefault();
        this.handleOptionClick(child.props);
      },
    });
  };

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    // IMPORTANT: Destructure value here so it doesn't override
    // value below (which is set to label) with the ...elemProps
    // spread
    const {error, disabled, grow, children, onChange, value, ...elemProps} = this.props;

    const {label} = this.state;
    // console.log('in Select render with label', label);

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectInput
          disabled={disabled}
          grow={grow}
          error={error}
          value={label}
          onBlur={this.handleSelectBlur}
          onChange={onChange}
          onClick={this.handleSelectClick}
          readOnly
          ref={this.inputRef}
          showingMenu={this.state.showingMenu}
          type="text"
          {...elemProps}
        />
        {this.state.showingMenu && (
          <SelectDropdown>{React.Children.map(children, this.renderChildren)}</SelectDropdown>
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
