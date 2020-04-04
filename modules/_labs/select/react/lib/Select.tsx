import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {CSSObject} from '@emotion/core';
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
import {SelectMenu, menuFadeDuration} from './SelectMenu';
import {default as SelectOption} from './SelectOption';
import uuid from 'uuid/v4';

export interface Option {
  // This allows us to accept any keys in the Option
  [key: string]: any;

  // Known, optional keys
  disabled?: boolean;
  id?: string;
  label?: string;

  // Known, required keys
  value: string;
}

interface NormalizedOption extends Option {
  // Optional keys in Option are required in NormalizedOption
  disabled: boolean;
  id: string;
  label: string;
}

export interface RenderOptionFunction {
  (option: Option): React.ReactNode;
}

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * The type of error associated with the Select (if applicable).
   */
  error?: ErrorType;
  // TODO: Improve the options prop description
  /**
   * The options of the Select.
   */
  options: (Option | string)[];
  // TODO: Improve the renderOption prop description
  /**
   * The function called to render the content of each option.
   */
  renderOption?: RenderOptionFunction;
  /**
   * The value of the Select.
   */
  value?: string;
}

export interface SelectState {
  focusedOptionIndex: number;
  isMenuHidden: boolean;
  isMenuHiding: boolean;
  label: string;
  selectedOptionIndex: number;
}

const focusButtonCSS = (): CSSObject => ({
  borderColor: inputColors.focusBorder,
  boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
  outline: 'none',
});

const SelectButton = styled('button')<
  Pick<SelectProps, 'error' | 'grow'> & Pick<SelectState, 'isMenuHidden'>
>(
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
    textAlign: 'left',
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // IE11 bugfix: add padding so text is displayed properly
    margin: 0, // Fix Safari
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:focus:not([disabled])': {
      ...focusButtonCSS(),
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
  ({error, isMenuHidden}) => {
    if (error === undefined) {
      // If there isn't an error, only show hover styles if the
      // menu is hidden (otherwise, if the menu is visible, style
      // the button as if it had focus)
      return isMenuHidden
        ? {
            '&:hover:not([disabled]):not(:focus)': {
              borderColor: inputColors.hoverBorder,
            },
          }
        : {
            ...focusButtonCSS(),
          };
    } else {
      return {
        ...errorRing(error),
      };
    }
  },
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

const SelectInput = styled('input')({
  display: 'none',
});

const SelectWrapper = styled('div')<Pick<SelectProps, 'grow' | 'disabled'>>(
  {
    position: 'relative',
  },
  ({grow}) => ({
    display: grow ? 'block' : 'inline-block',
  }),
  ({disabled}) => ({
    '&:hover .menu-icon path': {
      fill: disabled ? undefined : 'colors.licorice500',
    },
  })
);

export default class Select extends React.Component<SelectProps, SelectState> {
  private buttonRef = React.createRef<HTMLButtonElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private menuRef = React.createRef<HTMLUListElement>();
  private focusedOptionRef = React.createRef<HTMLLIElement>();

  private removeMenuTimer: ReturnType<typeof setTimeout>;

  // For type-ahead functionality
  private keysSoFar = '';
  private clearKeysSoFarTimeout = 500;
  private clearKeysSoFarTimer: ReturnType<typeof setTimeout>;

  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  private normalizedOptions: NormalizedOption[];

  state: Readonly<SelectState> = {
    focusedOptionIndex: 0,
    isMenuHidden: true,
    isMenuHiding: false,
    label: '',
    selectedOptionIndex: 0,
  };

  // Store normalized options since the options prop can take on multiple
  // forms: an array of strings or an array of objects (sometimes with
  // arbitrary keys)
  private setNormalizedOptions = (): void => {
    this.normalizedOptions = this.props.options.map(option => {
      let disabled, id, label, value;

      if (typeof option === 'string') {
        disabled = false;
        id = uuid();
        value = option;
        label = option;
      } else {
        disabled = !!option.disabled;
        id = option.id || uuid();
        value = option.value;
        label = option.label || option.value;
      }

      return {disabled, id, label, value};
    });
  };

  private getIndexByValue = (value: string): number => {
    for (let i = 0; i < this.normalizedOptions.length; i++) {
      if (this.normalizedOptions[i].value === value) {
        return i;
      }
    }

    return -1;
  };

  private getIndexByStartString = (
    startIndex: number,
    startString: string,
    endIndex: number = this.normalizedOptions.length,
    ignoreDisabled: boolean = true
  ): number => {
    for (let i = startIndex; i < endIndex; i++) {
      const label = this.normalizedOptions[i].label.toLowerCase();
      if (label.indexOf(startString.toLowerCase()) === 0) {
        if (!ignoreDisabled || (ignoreDisabled && !this.normalizedOptions[i].disabled)) {
          return i;
        }
      }
    }

    return -1;
  };

  private toggleMenu = (show: boolean): void => {
    // Immediately wipe out removeMenuTimer if we're toggling the menu
    // (if, for example, we're toggling the menu on while it's hiding)
    if (this.removeMenuTimer) {
      clearTimeout(this.removeMenuTimer);
    }

    if (show) {
      this.setState(
        {
          focusedOptionIndex: this.state.selectedOptionIndex,
          isMenuHidden: false,
          isMenuHiding: false,
        },
        () => {
          // Shift focus to the menu
          if (this.menuRef.current) {
            this.menuRef.current.focus();
          }
        }
      );
    } else {
      this.setState({isMenuHiding: true});

      this.removeMenuTimer = setTimeout(() => {
        this.setState(
          {
            isMenuHidden: true,
            isMenuHiding: false,
          },
          () => {
            // Shift focus back to the button
            if (this.buttonRef.current) {
              this.buttonRef.current.focus();
            }
          }
        );
      }, menuFadeDuration);
    }
  };

  // Menu may not be interacted with while it is hiding
  private isMenuInteractive = (): boolean => {
    return !this.state.isMenuHiding;
  };

  // Code inspired by: https://stackoverflow.com/a/46012210
  // In order for Select to be usable as a controlled component, we
  // need to programatically change the value of the SelectInput
  // in such a way that triggers its change event
  private updateInput = (value: string): void => {
    if (this.inputRef && this.inputRef.current) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(this.inputRef.current),
        'value'
      );
      if (nativeInputValue && nativeInputValue.set) {
        nativeInputValue.set.call(this.inputRef.current, value);
      }

      let event: Event;
      if (typeof Event === 'function') {
        // Modern browsers
        event = new Event('input', {bubbles: true});
      } else {
        // IE 11
        event = document.createEvent('Event');
        event.initEvent('input', true);
      }

      this.inputRef.current.dispatchEvent(event);
    }
  };

  // TODO: Move code for scrollIntoViewIfNeeded to a centralized place.
  // TODO: This code also has minor issues (sometimes it scrolls
  // unnecessarily, the centerIfNeeded doesn't always center)
  // Lifted from https://gist.github.com/hsablonniere/2581101
  // This scrolling behavior is preferable even to the WebKit-proprietary
  // scrollIntoViewIfNeeded method.
  private scrollIntoViewIfNeeded = (elem: HTMLElement, centerIfNeeded = true): void => {
    const parent: HTMLElement | null = elem.parentElement;

    if (elem && parent) {
      const parentComputedStyle = window.getComputedStyle(parent, null),
        parentBorderTopWidth = parseInt(
          parentComputedStyle.getPropertyValue('border-top-width'),
          10
        ),
        parentBorderLeftWidth = parseInt(
          parentComputedStyle.getPropertyValue('border-left-width'),
          10
        ),
        overTop = elem.offsetTop - parent.offsetTop < parent.scrollTop,
        overBottom =
          elem.offsetTop - parent.offsetTop + elem.clientHeight - parentBorderTopWidth >
          parent.scrollTop + parent.clientHeight,
        overLeft = elem.offsetLeft - parent.offsetLeft < parent.scrollLeft,
        overRight =
          elem.offsetLeft - parent.offsetLeft + elem.clientWidth - parentBorderLeftWidth >
          parent.scrollLeft + parent.clientWidth,
        alignWithTop = overTop && !overBottom;

      if ((overTop || overBottom) && centerIfNeeded) {
        parent.scrollTop =
          elem.offsetTop -
          parent.offsetTop -
          parent.clientHeight / 2 -
          parentBorderTopWidth +
          elem.clientHeight / 2;
      }

      if ((overLeft || overRight) && centerIfNeeded) {
        parent.scrollLeft =
          elem.offsetLeft -
          parent.offsetLeft -
          parent.clientWidth / 2 -
          parentBorderLeftWidth +
          elem.clientWidth / 2;
      }

      if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
        elem.scrollIntoView(alignWithTop);
      }
    }
  };

  private scrollFocusedOptionIntoView = (center: boolean) => {
    const focusedOption = this.focusedOptionRef.current;
    if (focusedOption) {
      this.scrollIntoViewIfNeeded(focusedOption, center);
    }
  };

  private handleKeyboardTypeAhead = (key: string, numOptions: number) => {
    // Abort immediately if the menu is not interactive
    if (!this.isMenuInteractive()) {
      return;
    }

    this.keysSoFar += key;
    this.startClearKeysSoFarTimer();

    // Set the starting point of the search to the next option after
    // the currently focused option
    let start = this.state.focusedOptionIndex + 1;
    let matchIndex;

    // If the starting point is beyond the list of options, reset it
    // to the beginning of the list
    start = start === numOptions ? 0 : start;

    // First, look for a match from start to end
    matchIndex = this.getIndexByStartString(start, this.keysSoFar);

    // If a match isn't found between start and end, wrap the search
    // around and search again from the beginning (0) to start
    if (matchIndex === -1) {
      matchIndex = this.getIndexByStartString(0, this.keysSoFar, start);
    }

    // A match was found...
    if (matchIndex > -1) {
      // If the menu is hidden, immediately select the matched option
      if (this.state.isMenuHidden) {
        this.setState({
          focusedOptionIndex: matchIndex,
          label: this.normalizedOptions[matchIndex].label,
          selectedOptionIndex: matchIndex,
        });
        this.updateInput(this.normalizedOptions[matchIndex].value);

        // Otherwise (the menu is visible), simply focus the matched option
      } else {
        this.setState({focusedOptionIndex: matchIndex});
      }
    }
  };

  private startClearKeysSoFarTimer = () => {
    if (this.clearKeysSoFarTimer) {
      clearTimeout(this.clearKeysSoFarTimer);
    }
    this.clearKeysSoFarTimer = setTimeout(() => {
      this.keysSoFar = '';
    }, this.clearKeysSoFarTimeout);
  };

  constructor(props: SelectProps) {
    super(props);
    this.setNormalizedOptions();
  }

  componentDidMount() {
    const {value} = this.props;

    // If value exists, set state to that value...
    if (value) {
      const childIndex = this.getIndexByValue(value);

      if (childIndex !== -1) {
        this.setState({
          label: this.normalizedOptions[childIndex].label,
          selectedOptionIndex: childIndex,
        });
        return;
      }
    }

    // ... otherwise, set state to the first option
    this.setState({
      label: this.normalizedOptions[0].label,
    });
  }

  componentDidUpdate(prevProps: SelectProps, prevState: SelectState) {
    const {children} = this.props;
    const {isMenuHidden, focusedOptionIndex} = this.state;

    if (children !== prevProps.children) {
      this.setNormalizedOptions();
    }

    // If the menu was just displayed, scroll the focused option into
    // center view
    if (!isMenuHidden && prevState.isMenuHidden) {
      this.scrollFocusedOptionIntoView(true);

      // Otherwise, if the menu is displayed AND the focused option changed
      // since the last render, scroll the focused option into view, but
      // do NOT center it
    } else if (!isMenuHidden && focusedOptionIndex !== prevState.focusedOptionIndex) {
      this.scrollFocusedOptionIntoView(false);
    }
  }

  componentWillUnmount() {
    // Clear timers
    if (this.removeMenuTimer) {
      clearTimeout(this.removeMenuTimer);
    }
    if (this.clearKeysSoFarTimer) {
      clearTimeout(this.clearKeysSoFarTimer);
    }
  }

  handleSelectClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Cancel default handling of the event to ensure we maintain
    // control of focus
    event.preventDefault();

    this.toggleMenu(this.state.isMenuHidden);
  };

  handleSelectMouseDown = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Cancel default handling of the event to ensure we maintain
    // control of focus
    event.preventDefault();
  };

  handleOptionSelection = (index: number): void => {
    // Abort immediately if:
    // * The menu is not interactive
    // * A disabled option was clicked (we ignore these clicks)
    if (!this.isMenuInteractive() || this.normalizedOptions[index].disabled) {
      return;
    }

    this.setState({
      focusedOptionIndex: index,
      label: this.normalizedOptions[index].label,
      selectedOptionIndex: index,
    });

    this.toggleMenu(false);
    this.updateInput(this.normalizedOptions[index].value);
  };

  handleMenuBlur = (event: React.FocusEvent): void => {
    this.toggleMenu(false);
  };

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    const {options} = this.props;
    const numOptions = options.length;

    const {focusedOptionIndex, isMenuHidden, isMenuHiding} = this.state;

    let isShortcut = false;
    let nextFocusedIndex = 0;

    // Check for type-ahead first
    if (event.key.length === 1 && event.key.match(/\S/)) {
      isShortcut = true;
      this.handleKeyboardTypeAhead(event.key, numOptions);
    } else {
      switch (event.key) {
        case 'ArrowUp':
        case 'Up': // IE/Edge specific value
        case 'ArrowDown':
        case 'Down': // IE/Edge specific value
          isShortcut = true;
          if (isMenuHidden || isMenuHiding) {
            this.toggleMenu(true);
          } else {
            const direction = event.key === 'ArrowUp' || event.key === 'Up' ? -1 : 1;
            let nextIndex = focusedOptionIndex + direction;
            while (
              nextIndex < numOptions &&
              nextIndex >= 0 &&
              this.normalizedOptions[nextIndex].disabled
            ) {
              nextIndex += direction;
            }
            nextFocusedIndex =
              nextIndex < 0 ? 0 : nextIndex >= numOptions ? numOptions - 1 : nextIndex;
            this.setState({focusedOptionIndex: nextFocusedIndex});
          }
          break;

        case 'Home':
        case 'End':
          isShortcut = true;
          nextFocusedIndex = event.key === 'Home' ? 0 : numOptions - 1;
          this.setState({focusedOptionIndex: nextFocusedIndex});
          break;

        case 'Spacebar':
        case ' ':
          isShortcut = true;
          // If the user is in the middle of typing a string, treat
          // space key as type-ahead rather than option selection
          if (this.keysSoFar !== '') {
            this.handleKeyboardTypeAhead(' ', numOptions);
          } else if (isMenuHidden || isMenuHiding) {
            this.toggleMenu(true);
          } else {
            this.handleOptionSelection(focusedOptionIndex);
          }
          break;

        case 'Enter':
          isShortcut = true;
          if (isMenuHidden || isMenuHiding) {
            this.toggleMenu(true);
          } else {
            this.handleOptionSelection(focusedOptionIndex);
          }
          break;

        default:
      }
    }

    if (isShortcut) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  renderOptions = (options: (Option | string)[], renderOption: RenderOptionFunction) => {
    return options.map((option, index) => {
      const optionProps = {
        'aria-selected': this.state.selectedOptionIndex === index ? true : undefined,
        disabled: this.normalizedOptions[index].disabled,
        error: this.props.error,
        focused: this.state.focusedOptionIndex === index,
        id: this.normalizedOptions[index].id,
        key: this.normalizedOptions[index].id,
        onMouseDown: (event: React.MouseEvent) => {
          event.preventDefault();
          this.handleOptionSelection(index);
        },
        optionRef: this.state.focusedOptionIndex === index ? this.focusedOptionRef : undefined,
        suppressed: !this.isMenuInteractive(),
        value: this.normalizedOptions[index].value,
      };

      // Merge user-provided option with normalized option
      const normalizedOption = {
        ...(typeof option === 'string' ? {} : option),
        ...this.normalizedOptions[index],
      };

      return <SelectOption {...optionProps}>{renderOption(normalizedOption)}</SelectOption>;
    });
  };

  renderOption: RenderOptionFunction = option => {
    return <div>{option.label}</div>;
  };

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      'aria-labelledby': ariaLabelledBy,
      children,
      disabled,
      error,
      grow,
      name,
      onChange,
      options,
      value,
      ...elemProps
    } = this.props;

    // Use default renderOption if renderOption prop isn't provided
    const renderOption = this.props.renderOption || this.renderOption;

    const {focusedOptionIndex, isMenuHidden, isMenuHiding, label} = this.state;

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectButton
          aria-expanded={!isMenuHidden ? 'true' : undefined}
          aria-haspopup="listbox"
          disabled={disabled}
          error={error}
          grow={grow}
          isMenuHidden={isMenuHidden}
          onClick={this.handleSelectClick}
          onKeyDown={this.handleKeyboardShortcuts}
          onMouseDown={this.handleSelectMouseDown}
          ref={this.buttonRef}
          {...elemProps}
        >
          {label}
        </SelectButton>
        <SelectInput
          name={name}
          onChange={onChange}
          ref={this.inputRef}
          type="text"
          value={value || this.normalizedOptions[0].value}
        />
        {!isMenuHidden && (
          <SelectMenu
            aria-activedescendant={this.normalizedOptions[focusedOptionIndex].id}
            aria-labelledby={ariaLabelledBy}
            error={error}
            isHiding={isMenuHiding}
            menuRef={this.menuRef}
            onBlur={this.handleMenuBlur}
            onKeyDown={this.handleKeyboardShortcuts}
          >
            {this.renderOptions(options, renderOption)}
          </SelectMenu>
        )}
        <SelectMenuIcon
          className="menu-icon"
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
        />
      </SelectWrapper>
    );
  }
}
