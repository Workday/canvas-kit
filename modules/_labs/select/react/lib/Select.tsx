import * as React from 'react';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {menuAnimationDuration} from './SelectMenu';
import SelectBase, {CoreSelectBaseProps, Option, NormalizedOption} from './SelectBase';
import {MenuVisibility} from './types';
import {getCorrectedIndexByValue} from './utils';
import uuid from 'uuid/v4';

export interface SelectProps extends CoreSelectBaseProps {
  /**
   * The options of the Select. `options` may be an array of objects or an array of strings.
   *
   * If `options` is an array of objects, each object must adhere to the `Option` interface:
   *
   * * `data: object` (optional)
   * * `disabled: boolean` (optional)
   * * `id: string` (optional, a random `id` will be assigned to the object if one isn't provided)
   * * `label: string` (optional, analagous to the text content of an `<option>`)
   * * `value: string` (required, analagous to the `value` attribute of an `<option>`)
   *
   * If `label` is omitted, the `value` will be used to render the option.
   *
   * The `data` object is carried over to the `option` passed into the `renderOption` function where it may then be used to customize how each option is rendered.
   */
  options: (Option | string)[];
}

interface SelectState {
  focusedOptionIndex: number;
  menuVisibility: MenuVisibility;
}

class Select extends React.Component<SelectProps, SelectState> {
  static ErrorType = ErrorType;

  state: Readonly<SelectState> = {
    focusedOptionIndex: 0,
    menuVisibility: 'closed',
  };

  private buttonRef = React.createRef<HTMLButtonElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private menuRef = React.createRef<HTMLUListElement>();

  private menuAnimationTimer: ReturnType<typeof setTimeout>;

  // For type-ahead functionality
  private keysSoFar = '';
  private clearKeysSoFarTimeout = 500;
  private clearKeysSoFarTimer: ReturnType<typeof setTimeout>;

  // Cached values
  private normalizedOptions: NormalizedOption[] = [];

  private areOptionsDefined = (): boolean => {
    const {options} = this.props;

    if (!options || options.length === 0) {
      return false;
    }

    return true;
  };

  // Store normalized options since the options prop can take on multiple
  // forms: an array of strings or an array of objects (sometimes with
  // arbitrary keys)
  private setNormalizedOptions = (): void => {
    const {options} = this.props;

    // Abort if options weren't defined
    if (!this.areOptionsDefined()) {
      return;
    }

    this.normalizedOptions = options.map(option => {
      let data = {};
      let disabled, id, label, value;

      if (typeof option === 'string') {
        disabled = false;
        id = uuid();
        value = option;
        label = option;
      } else {
        data = option.data || data;
        disabled = !!option.disabled;
        id = option.id || uuid();
        value = option.value;
        label = option.label || option.value;
      }

      return {
        data,
        disabled,
        id,
        label,
        value,
      };
    });
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

  // This helper focuses the next enabled option given a startIndex and a
  // direction. If startIndex refers to an enabled option, we focus that option
  // immediately. Otherwise, we advance `direction` number of spaces in the options
  // array and check again if that index refers to an enabled option.
  //
  // This is useful for manipulating focus using the keyboard where pressing the
  // Up/Down key means "focus the first enabled option above/below the currently
  // focused option", or pressing the Home/End key means "focus the first/last
  // enabled option on the menu."
  private focusNextEnabledOption = (startIndex: number, direction: number) => {
    // Ensure direction is non-zero
    if (direction === 0) {
      return;
    }

    const numOptions = this.normalizedOptions.length;

    let currentIndex = startIndex;

    // Check if currentIndex refers to an enabled option. If not, keep moving
    // the index in the prescribed direction until we find an enabled option.
    while (
      currentIndex >= 0 &&
      currentIndex < numOptions &&
      this.normalizedOptions[currentIndex].disabled
    ) {
      currentIndex += direction;
    }
    // Update the focused index only if currentIndex is inbounds and
    // refers to an enabled option
    if (
      currentIndex >= 0 &&
      currentIndex < numOptions &&
      !this.normalizedOptions[currentIndex].disabled
    ) {
      this.setState({focusedOptionIndex: currentIndex});
    }
  };

  private updateStateFromValue = () => {
    this.setState({
      focusedOptionIndex: getCorrectedIndexByValue(this.normalizedOptions, this.props.value),
    });
  };

  private focusButton = () => {
    if (this.buttonRef.current) {
      this.buttonRef.current.focus();
    }
  };

  private setMenuAnimationTimeout = (callback: () => void) => {
    if (this.menuAnimationTimer) {
      clearTimeout(this.menuAnimationTimer);
    }
    this.menuAnimationTimer = setTimeout(callback, menuAnimationDuration);
  };

  private openMenu = () => {
    this.setState({menuVisibility: 'opening'});
    this.setMenuAnimationTimeout(() => {
      this.setState({menuVisibility: 'opened'});
    });
  };

  private closeMenu = () => {
    this.setState({menuVisibility: 'closing'});
    this.setMenuAnimationTimeout(() => {
      this.setState({
        // Reset the focused option to the currently selected option in case
        // the user focused a different option but chose not to select it. The
        // next time the menu opens, focus should begin on the selected option.
        focusedOptionIndex: getCorrectedIndexByValue(this.normalizedOptions, this.props.value),
        menuVisibility: 'closed',
      });
    });
  };

  private toggleMenu = (open: boolean): void => {
    const {menuVisibility} = this.state;

    if (open) {
      switch (menuVisibility) {
        // We're opening a menu which is currently closed: set the menu state
        // to open before kicking off openMenu. This allows us to transition
        // from 0 opacity in the open state to the targeted 1.0 opacity in
        // the opening state.
        case 'closed':
          this.setState({menuVisibility: 'open'}, this.openMenu);
          break;
        // We're opening a menu which is in the process of closing. Since the
        // menu isn't closed, there's no need to set the open state: kick off
        // openMenu immediately.
        case 'close':
        case 'closing':
          this.openMenu();
          break;
        // Otherwise, we're opening a menu is already opened or in the process of
        // opening; no need to do anything further.
        default:
          break;
      }
    } else {
      switch (menuVisibility) {
        // We're closing a menu which is currently opened: set the menu state to
        // close before kicking off closeMenu.
        case 'opened':
          this.setState({menuVisibility: 'close'}, this.closeMenu);
          break;
        // We're closing a menu which is in the process of opening. Since the
        // menu isn't opened, there's no need to set the close state: kick off
        // closeMenu immediately.
        case 'open':
        case 'opening':
          this.closeMenu();
          break;
        // Otherwise, we're closing a menu which is already closed or in the process
        // of closing; no need to do anything further.
        default:
          break;
      }
    }
  };

  // Code inspired by: https://stackoverflow.com/a/46012210
  // In order for Select to be usable as a controlled component, we
  // need to programatically change the value of the SelectInput
  // in such a way that triggers its change event
  private fireChangeEvent = (value: string): void => {
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
        event = new Event('change', {bubbles: true});
      } else {
        // IE 11
        event = document.createEvent('Event');
        event.initEvent('change', true, true);
      }

      this.inputRef.current.dispatchEvent(event);
    }
  };

  private handleKeyboardTypeAhead = (key: string, numOptions: number) => {
    // Abort immediately if the menu is the process of closing
    if (this.state.menuVisibility === 'closing') {
      return;
    }

    // Set the starting point of the search to one of two locations
    // based on the search string so far (keysSoFar):
    //
    // 1. If the search string is empty, start the search from the
    // next option AFTER the currently focused option. For example,
    // if the Select is currently focused on "San Francisco", typing
    // "s" again advances focus to the next option that begins with "s".
    //
    // 2. If the search string is populated, start the search from the
    // CURRENTLY focused option. For example, if the Select is currently
    // focused on "San Francisco", typing "san j" retains focus on
    // "San Francisco" as you type "san " (because "san " still matches
    // "San Francisco") and then advances focus to "San Jose" after you
    // type the "j" at the end.
    let start =
      this.keysSoFar.length === 0
        ? this.state.focusedOptionIndex + 1
        : this.state.focusedOptionIndex;

    // If the starting point is beyond the list of options, reset it
    // to the beginning of the list
    start = start === numOptions ? 0 : start;

    this.keysSoFar += key;
    this.startClearKeysSoFarTimer();

    // First, look for a match from start to end
    let matchIndex;
    matchIndex = this.getIndexByStartString(start, this.keysSoFar);

    // If a match isn't found between start and end, wrap the search
    // around and search again from the beginning (0) to start
    if (matchIndex === -1) {
      matchIndex = this.getIndexByStartString(0, this.keysSoFar, start);
    }

    // A match was found...
    if (matchIndex > -1) {
      if (this.state.menuVisibility === 'closed') {
        // If the menu is closed, fire the change event
        this.fireChangeEvent(this.normalizedOptions[matchIndex].value);
      } else {
        // Otherwise the menu is visible (or at least partially visible);
        // focus the matched option
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
    this.updateStateFromValue();
  }

  componentDidUpdate(prevProps: SelectProps) {
    const {options, value} = this.props;

    if (options !== prevProps.options) {
      this.setNormalizedOptions();
      this.updateStateFromValue();
    }

    if (value !== prevProps.value) {
      this.updateStateFromValue();
    }
  }

  componentWillUnmount() {
    // Clear timers
    if (this.menuAnimationTimer) {
      clearTimeout(this.menuAnimationTimer);
    }
    if (this.clearKeysSoFarTimer) {
      clearTimeout(this.clearKeysSoFarTimer);
    }
  }

  handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Cancel default handling of the event to ensure we maintain control
    // of focus (i.e., so focus is immediately transferred to the menu when
    // opening the menu, rather than briefly being applied to the button
    // and creating a momentary flash of a focus ring around the button).
    // This has implications for our click handler (see handleClick below).
    event.preventDefault();
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {menuVisibility} = this.state;

    switch (menuVisibility) {
      // If we click the button while the menu is in the process of closing,
      // we want to toggle the menu back on. However, we also need to focus
      // the menu since it won't be focused using Popper's onFirstUpdate
      // callback (because the menu already exists). If we don't focus the
      // menu, clicking outside the menu to dismiss it on blur won't work.
      case 'close':
      case 'closing':
        if (this.menuRef.current) {
          this.menuRef.current.focus();
        }
        this.toggleMenu(true);
        break;
      case 'closed':
        this.toggleMenu(true);
        break;
      // Otherwise, the menu is opened or in the process of opening. Focus
      // the button and toggle the menu off. Note that since we're calling
      // event.preventDefault in our mouseDown handler for the button, we
      // must manage focus on the button ourselves (the browser will no
      // longer automatically apply focus to the button when clicking on it).
      default:
        this.focusButton();
        this.toggleMenu(false);
        break;
    }
  };

  handleOptionSelection = (index: number): void => {
    // Abort if a disabled option was clicked (we ignore these clicks)
    if (this.normalizedOptions[index].disabled) {
      return;
    }

    // Toggle menu off, shift focus back to the button, and fire change event
    this.toggleMenu(false);
    this.focusButton();
    this.fireChangeEvent(this.normalizedOptions[index].value);
  };

  handleMenuBlur = (event: React.FocusEvent): void => {
    this.toggleMenu(false);
  };

  handleMenuCloseOnKeyPress = (): void => {
    // Toggle menu off and shift focus back to the button
    this.toggleMenu(false);
    this.focusButton();
  };

  handleKeyDown = (event: React.KeyboardEvent): void => {
    const {options} = this.props;
    const numOptions = options.length;

    const {focusedOptionIndex, menuVisibility} = this.state;

    let isShortcut = false;

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
          if (menuVisibility === 'closed' || menuVisibility === 'closing') {
            this.toggleMenu(true);
          } else {
            const direction = event.key === 'ArrowUp' || event.key === 'Up' ? -1 : 1;
            const startIndex = focusedOptionIndex + direction;
            this.focusNextEnabledOption(startIndex, direction);
          }
          break;

        case 'Home':
        case 'End':
          isShortcut = true;
          const direction = event.key === 'Home' ? 1 : -1;
          const startIndex = event.key === 'Home' ? 0 : numOptions - 1;
          this.focusNextEnabledOption(startIndex, direction);
          break;

        case 'Tab':
          if (menuVisibility !== 'closed') {
            isShortcut = true;
            this.handleMenuCloseOnKeyPress();
          }
          break;

        case 'Spacebar':
        case ' ':
          isShortcut = true;
          // If the user is in the middle of typing a string, treat
          // space key as type-ahead rather than option selection
          if (this.keysSoFar !== '') {
            this.handleKeyboardTypeAhead(' ', numOptions);
          } else if (menuVisibility === 'closed' || menuVisibility === 'closing') {
            this.toggleMenu(true);
          } else {
            this.handleOptionSelection(focusedOptionIndex);
          }
          break;

        case 'Enter':
          isShortcut = true;
          if (menuVisibility === 'closed' || menuVisibility === 'closing') {
            // allow the click
            isShortcut = false;
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

  public render() {
    const {
      value,
      // Strip options from elemProps
      options,
      ...elemProps
    } = this.props;

    const {focusedOptionIndex, menuVisibility} = this.state;

    // Don't pass in event handlers if options weren't defined
    const eventHandlers = this.areOptionsDefined()
      ? {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          onMenuBlur: this.handleMenuBlur,
          onMenuCloseOnEscape: this.handleMenuCloseOnKeyPress,
          onMouseDown: this.handleMouseDown,
          onOptionSelection: this.handleOptionSelection,
        }
      : {};

    return (
      <SelectBase
        buttonRef={this.buttonRef}
        focusedOptionIndex={focusedOptionIndex}
        inputRef={this.inputRef}
        menuRef={this.menuRef}
        menuVisibility={menuVisibility}
        options={this.normalizedOptions}
        value={value}
        {...eventHandlers}
        {...elemProps}
      />
    );
  }
}

Select.ErrorType = ErrorType;

export default Select;
