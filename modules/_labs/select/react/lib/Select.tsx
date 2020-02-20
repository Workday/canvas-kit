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
import {SelectOptionProps} from './SelectOption';

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactElement<SelectOptionProps>[];
  disabled?: boolean;
  error?: ErrorType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

interface SelectMenuProps {
  isDismissing: boolean;
}

export interface SelectState {
  focusedItemIndex: number | null;
  isMenuDismissing: boolean;
  justSelectedItemIndex: number | null;
  label: string;
  selectedItemIndex: number;
  showingMenu: boolean;
}

export const dismissMenuDelay = 200;
const dismissMenuDuration = 200;

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
    // prevent selection of text when tabbing to input
    '&::selection': {
      background: 'transparent',
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

const SelectMenuIcon = styled(SystemIcon)({
  position: 'absolute',
  top: spacing.xxxs,
  right: spacing.xxxs,
  padding: spacing.xxxs,
  pointerEvents: 'none',
  '& path': {
    transition: '100ms fill',
  },
});

const SelectMenu = styled('ul')<SelectMenuProps>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `2px solid ${inputColors.focusBorder}`,
    borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
    borderTop: 0,
    boxSizing: 'border-box',
    listStyle: 'none',
    margin: 0,
    minWidth: 280,
    opacity: 1,
    padding: 0,
    position: 'absolute',
    top: `${spacingNumbers.xl - parseInt(borderRadius.m, 10)}px`,
    transition: `${dismissMenuDuration / 1000}s opacity`,
    zIndex: 1,
  },
  ({isDismissing}) =>
    isDismissing && {
      opacity: 0,
    }
);

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
  private persistMenuTimer: ReturnType<typeof setTimeout>;
  private removeMenuTimer: ReturnType<typeof setTimeout>;

  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  state: Readonly<SelectState> = {
    focusedItemIndex: null,
    isMenuDismissing: false,
    justSelectedItemIndex: null,
    label: '',
    selectedItemIndex: 0,
    showingMenu: false,
  };

  private indexByValue = (value: string): number => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    return childrenArray.findIndex(child => child.props.value === value);
  };

  private toggleMenu = (show: boolean): void => {
    if (show) {
      this.setState({
        focusedItemIndex: this.state.selectedItemIndex,
        showingMenu: true,
      });
    } else {
      this.setState({
        focusedItemIndex: null,
        showingMenu: false,
      });
    }
  };

  // menu may not be interacted with while it is dismissing, or
  // when it is briefly persisted right after an option has been
  // selected
  private isMenuInteractive = (): boolean => {
    return !this.state.isMenuDismissing && this.state.justSelectedItemIndex === null;
  };

  componentDidMount() {
    const {children, value} = this.props;

    const childrenArray = React.Children.toArray(children) as React.ReactElement<
      SelectOptionProps
    >[];

    // if value exists, set state to that value...
    if (value) {
      const childIndex = this.indexByValue(value);

      if (childIndex !== -1) {
        this.setState({
          label: childrenArray[childIndex].props.label,
          selectedItemIndex: childIndex,
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

  componentWillUnmount() {
    // clear timers
    if (this.persistMenuTimer) {
      clearTimeout(this.persistMenuTimer);
    }
    if (this.removeMenuTimer) {
      clearTimeout(this.removeMenuTimer);
    }
  }

  handleSelectClick = (event: React.MouseEvent<HTMLInputElement>): void => {
    this.toggleMenu(!this.state.showingMenu);
  };

  handleSelectBlur = (event: React.FocusEvent): void => {
    this.toggleMenu(false);
  };

  handleOptionClick = (optionProps: SelectOptionProps): void => {
    // abort immediately if:
    // * the menu is a non-interactive state
    // * a disabled option was clicked (we ignore these clicks)
    if (!this.isMenuInteractive() || optionProps.disabled) {
      return;
    }

    // time 0
    // offer visual feedback briefly before beginning the
    // menu dismissal animation;
    const index = this.indexByValue(optionProps.value);
    this.setState({
      focusedItemIndex: null,
      justSelectedItemIndex: index,
      selectedItemIndex: index,
    });

    // time dismissMenuDelay
    // begin the menu dismissal animation
    this.persistMenuTimer = setTimeout(() => {
      this.setState({
        isMenuDismissing: true,
      });
    }, dismissMenuDelay);

    // time dismissMenuDelay + dismissMenuDuration
    // complete the menu dismissal animation, update the select
    // label, reset justSelected state, and hide the menu
    this.removeMenuTimer = setTimeout(() => {
      this.setState({
        isMenuDismissing: false,
        justSelectedItemIndex: null,
        label: optionProps.label,
      });
      this.toggleMenu(false);
    }, dismissMenuDelay + dismissMenuDuration);

    // code inspired by: https://stackoverflow.com/a/46012210
    // we want to programatically change the value of the
    // SelectInput in such a way that triggers its change event
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

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    // console.log(event.key);

    const children = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const itemCount = children.length;
    let isShortcut = false;
    let nextFocusedIndex = 0;

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        if (!this.state.showingMenu) {
          this.toggleMenu(true);
        } else if (this.state.focusedItemIndex !== null) {
          const direction = event.key === 'ArrowUp' ? -1 : 1;
          isShortcut = true;
          let nextIndex = this.state.focusedItemIndex + direction;
          while (nextIndex < itemCount && nextIndex >= 0 && children[nextIndex].props.disabled) {
            nextIndex += direction;
          }
          nextFocusedIndex = nextIndex < 0 ? 0 : nextIndex >= itemCount ? itemCount - 1 : nextIndex;
          this.setState({focusedItemIndex: nextFocusedIndex});
        }
        break;

      case 'Spacebar':
      case ' ':
      case 'Enter':
        if (this.state.focusedItemIndex !== null) {
          const child = children[this.state.focusedItemIndex] as React.ReactElement<
            SelectOptionProps
          >;
          this.handleOptionClick(child.props);
          isShortcut = true;
        }
        break;

      default:
    }

    if (isShortcut) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  renderChildren = (
    child: React.ReactElement<SelectOptionProps>,
    index: number
  ): React.ReactNode => {
    return React.cloneElement(child, {
      focused: this.state.focusedItemIndex === index,
      justSelected: this.state.justSelectedItemIndex === index,
      onMouseDown: (event: React.MouseEvent) => {
        event.preventDefault();
        this.handleOptionClick(child.props);
      },
      selected: this.state.selectedItemIndex === index,
      suppressed: !this.isMenuInteractive(),
    });
  };

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    // IMPORTANT: Destructure value here so it doesn't override
    // value below (which is set to label) with the ...elemProps
    // spread
    const {error, disabled, grow, children, onChange, value, ...elemProps} = this.props;

    const {label, isMenuDismissing} = this.state;
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
          onKeyDown={this.handleKeyboardShortcuts}
          readOnly
          ref={this.inputRef}
          type="text"
          {...elemProps}
        />
        {this.state.showingMenu && (
          <SelectMenu isDismissing={isMenuDismissing}>
            {React.Children.map(children, this.renderChildren)}
          </SelectMenu>
        )}
        <SelectMenuIcon
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
        />
      </SelectWrapper>
    );
  }
}
