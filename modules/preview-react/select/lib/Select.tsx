import * as React from 'react';
import {
  ErrorType,
  StyledType,
  createComponent,
  useForkRef,
  generateUniqueId,
} from '@workday/canvas-kit-react/common';
import {menuAnimationDuration} from './SelectMenu';
import {SelectBase, CoreSelectBaseProps, Option, NormalizedOption} from './SelectBase';
import {MenuVisibility} from './types';
import {getCorrectedIndexByValue} from './utils';
/**
 * @deprecated ⚠️ `SelectProps` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export interface SelectProps extends CoreSelectBaseProps {
  /**
   * The options of the Select. `options` may be an array of objects, an array of strings,
   * or an array that contains both objects and strings.
   *
   * If `options` includes objects, each included object must adhere to the `Option` interface:
   *
   * * `data: object` (optional)
   * * `disabled: boolean` (optional)
   * * `id: string` (optional, a random `id` will be assigned to the object if one isn't provided)
   * * `label: string` (optional, analogous to the text content of an `<option>`)
   * * `value: string` (required, analogous to the `value` attribute of an `<option>`)
   *
   * If `label` is omitted, the `value` will be used to render the option.
   *
   * The `data` object is carried over to the `option` passed into the `renderOption` function where it may then be used to customize how each option is rendered.
   */
  options: (Option | string)[];
}

interface SelectContainerProps extends SelectProps, StyledType {
  /**
   * The ref passed from `createComponent` to be forwarded to the underlying button element.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

interface SelectContainerState {
  focusedOptionIndex: number;
  menuVisibility: MenuVisibility;
}

class SelectContainer extends React.Component<SelectContainerProps, SelectContainerState> {
  static ErrorType = ErrorType;

  state: Readonly<SelectContainerState> = {
    focusedOptionIndex: 0,
    menuVisibility: 'closed',
  };

  private forwardedButtonRef: React.Ref<HTMLButtonElement>;
  private localButtonRef = React.createRef<HTMLButtonElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private menuRef = React.createRef<HTMLUListElement>();

  private menuAnimationTimer!: ReturnType<typeof setTimeout>;

  // For type-ahead functionality
  private keysSoFar = '';
  private clearKeysSoFarTimeout = 500;
  private clearKeysSoFarTimer!: ReturnType<typeof setTimeout>;

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
  // forms. It can be an array of strings, an array of objects (sometimes with
  // arbitrary keys), or an array that contains both strings and objects
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
        id = generateUniqueId();
        value = option;
        label = option;
      } else {
        data = option.data || data;
        disabled = !!option.disabled;
        id = option.id || generateUniqueId();
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
    if (this.localButtonRef.current) {
      this.localButtonRef.current.focus();
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
  // need to programmatically change the value of the SelectInput
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

  constructor(props: SelectContainerProps) {
    super(props);
    this.setNormalizedOptions();

    // We need a local ref (RefObject) to the Select component's underlying
    // button to manage focus within the component and to serve as its Popper
    // Menu's anchorElement. If the buttonRef prop (to be forwarded to the
    // underlying button) passed in through createComponent was a ref object,
    // we could reuse it for our internal purposes. buttonRef may be a callback
    // ref, however, or it may not even be defined.
    //
    // To guarantee we have access to a ref object, we created one earlier when
    // declaring the localButtonRef instance variable. We then use useForkRef
    // to combine localButtonRef and buttonRef into a single callback ref
    // (forwardedButtonRef) which can be forwarded to the underlying button.
    // When the component mounts/unmounts, this callback will both:
    //
    // (1) Update the current value of localButtonRef, and;
    // (2) Either update the current value of buttonRef if it was a ref object,
    //     or call buttonRef with the underlying button element if it was a
    //     callback ref.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    this.forwardedButtonRef = useForkRef(props.buttonRef, this.localButtonRef);
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

  handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {menuVisibility} = this.state;

    switch (menuVisibility) {
      // If we click the button while the menu is in the process of closing,
      // we want to toggle the menu back on. However, we also need to focus
      // the menu since it won't be focused using Popper's onFirstUpdate
      // callback (because the menu already exists).
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
      // Otherwise, the menu is opened or in the process of opening; toggle
      // the menu off.
      default:
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

  handleMenuCloseOnKeyPress = (): void => {
    // Toggle menu off and shift focus back to the button
    this.handleClose();
    this.focusButton();
  };

  handleClose = (): void => {
    this.toggleMenu(false);
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
      // Call stopPropagation here to limit shortcut key handling to the Select
      // component. Otherwise, for example, using the typeahead feature of the
      // Select would end up triggering a number of undesired if actions if the
      // containing application supports its own keyboard shortcuts.
      event.stopPropagation();

      // Call preventDefault here to maintain control of what happens when
      // handling shortcut keys. For example, without this call, pressing the
      // down arrow key would scroll the menu down (since the menu has DOM
      // focus while its visible and scrolling is the default behavior of the
      // down arrow key). Instead, we want to provide our own custom behavior
      // of assistively focusing the next option.
      event.preventDefault();
    }
  };

  public render() {
    const {
      value,

      // Strip props we don't want to pass down from elemProps
      buttonRef,
      options,
      onKeyDown,
      onBlur,

      ...elemProps
    } = this.props;

    const {focusedOptionIndex, menuVisibility} = this.state;

    // Don't pass in event handlers if options weren't defined
    const eventHandlers = this.areOptionsDefined()
      ? {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          onClose: this.handleClose,
          onOptionSelection: this.handleOptionSelection,
        }
      : {};

    return (
      <SelectBase
        forwardedButtonRef={this.forwardedButtonRef}
        localButtonRef={this.localButtonRef}
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
/**
 * @deprecated ⚠️ `Select` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export const Select = createComponent('button')({
  displayName: 'Select',
  Component: (props: SelectProps, ref, Element) => (
    // Select is still a class component, so we render a renamed version of it
    // (SelectContainer) and pass it ref and Element
    <SelectContainer as={Element} buttonRef={ref} {...props} />
  ),
  subComponents: {
    ErrorType,
  },
});
