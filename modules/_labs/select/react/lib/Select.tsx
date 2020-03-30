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
import {SelectOptionProps} from './SelectOption';
import uuid from 'uuid/v4';

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * The SelectOption children of the Select.
   */
  children?: React.ReactElement<SelectOptionProps>[];
  /**
   * The type of error associated with the Select (if applicable).
   */
  error?: ErrorType;
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
    '&:hover': {
      borderColor: inputColors.hoverBorder,
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
  ({error}) => ({
    ...errorRing(error),
  }),
  ({error, isMenuHidden}) =>
    !isMenuHidden &&
    error === undefined && {
      // If the menu is active, style the button as if it had
      // focus (unless there's an error)
      ...focusButtonCSS(),
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
    '& span': {
      backgroundColor: disabled ? colors.soap100 : colors.frenchVanilla100,
    },
    '&:hover path': {
      fill: disabled ? undefined : colors.licorice500,
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

  private optionIds: string[];
  private optionLabels: string[];
  private optionValues: string[];

  state: Readonly<SelectState> = {
    focusedOptionIndex: 0,
    isMenuHidden: true,
    isMenuHiding: false,
    label: '',
    selectedOptionIndex: 0,
  };

  // Store option ids since we may need to generate them if they're
  // undefined
  private setOptionIds = (): void => {
    this.optionIds = React.Children.map(
      this.props.children,
      (child: React.ReactElement<SelectOptionProps>) => child.props.id || uuid()
    );
  };

  // Store option labels so we can search on them for type-ahead
  private setOptionLabels = (): void => {
    this.optionLabels = React.Children.map(
      this.props.children,
      (child: React.ReactElement<SelectOptionProps>) => child.props.label || ''
    );
  };

  // Store option values since we may need to populate them based on the
  // option label if the value is undefined
  private setOptionValues = (): void => {
    this.optionValues = React.Children.map(
      this.props.children,
      (child: React.ReactElement<SelectOptionProps>) => {
        const {label, value} = child.props;
        if (value !== undefined) {
          return value;
        } else {
          return label !== undefined ? label : '';
        }
      }
    );
  };

  // Store various option props (ids, labels, values) since the Select
  // may need to populate them and/or access them
  private setOptionLookups = (): void => {
    this.setOptionIds();
    this.setOptionLabels();
    this.setOptionValues();
  };

  private getIndexByValue = (value: string): number => {
    for (let i = 0; i < this.optionValues.length; i++) {
      if (this.optionValues[i] === value) {
        return i;
      }
    }

    return -1;
  };

  private getIndexByStartString = (
    startIndex: number,
    startString: string,
    endIndex: number = this.optionLabels.length,
    ignoreDisabled: boolean = true
  ): number => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];

    for (let i = startIndex; i < endIndex; i++) {
      const label = this.optionLabels[i].toLowerCase();
      if (label.indexOf(startString.toLowerCase()) === 0) {
        if (!ignoreDisabled || (ignoreDisabled && !childrenArray[i].props.disabled)) {
          return i;
        }
      }
    }

    return -1;
  };

  private toggleMenu = (show: boolean): void => {
    if (show) {
      this.setState(
        {
          focusedOptionIndex: this.state.selectedOptionIndex,
          isMenuHidden: false,
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
            isMenuHiding: false,
            isMenuHidden: true,
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
          label: this.optionLabels[matchIndex],
          selectedOptionIndex: matchIndex,
        });
        this.updateInput(this.optionValues[matchIndex]);

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
    this.setOptionLookups();
  }

  componentDidMount() {
    const {value} = this.props;

    // If value exists, set state to that value...
    if (value) {
      const childIndex = this.getIndexByValue(value);

      if (childIndex !== -1) {
        this.setState({
          label: this.optionLabels[childIndex],
          selectedOptionIndex: childIndex,
        });
        return;
      }
    }

    // ... otherwise, set state to the first option
    this.setState({
      label: this.optionLabels[0],
    });
  }

  componentDidUpdate(prevProps: SelectProps, prevState: SelectState) {
    const {children} = this.props;
    const {isMenuHidden, focusedOptionIndex} = this.state;

    if (children !== prevProps.children) {
      this.setOptionLookups();
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
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const optionProps = childrenArray[index].props;

    // Abort immediately if:
    // * The menu is a non-interactive state
    // * A disabled option was clicked (we ignore these clicks)
    if (!this.isMenuInteractive() || optionProps.disabled) {
      return;
    }

    this.setState({
      focusedOptionIndex: index,
      label: this.optionLabels[index],
      selectedOptionIndex: index,
    });

    this.toggleMenu(false);
    this.updateInput(this.optionValues[index]);
  };

  handleMenuBlur = (event: React.FocusEvent): void => {
    this.toggleMenu(false);
  };

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const numOptions = childrenArray.length;

    const {focusedOptionIndex, isMenuHidden} = this.state;

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
          if (isMenuHidden) {
            this.toggleMenu(true);
          } else {
            const direction = event.key === 'ArrowUp' || event.key === 'Up' ? -1 : 1;
            let nextIndex = focusedOptionIndex + direction;
            while (
              nextIndex < numOptions &&
              nextIndex >= 0 &&
              childrenArray[nextIndex].props.disabled
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
          } else if (isMenuHidden) {
            this.toggleMenu(true);
          } else {
            this.handleOptionSelection(focusedOptionIndex);
          }
          break;

        case 'Enter':
          isShortcut = true;
          if (isMenuHidden) {
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

  renderChildren = (
    child: React.ReactElement<SelectOptionProps>,
    index: number
  ): React.ReactNode => {
    return React.cloneElement(child, {
      error: this.props.error,
      focused: this.state.focusedOptionIndex === index,
      id: this.optionIds[index],
      onMouseDown: (event: React.MouseEvent) => {
        event.preventDefault();
        this.handleOptionSelection(index);
      },
      optionRef: this.state.focusedOptionIndex === index ? this.focusedOptionRef : undefined,
      selected: this.state.selectedOptionIndex === index,
      suppressed: !this.isMenuInteractive(),
      value: this.optionValues[index],
    });
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
      value,
      ...elemProps
    } = this.props;

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
          value={value || this.optionValues[0]}
        />
        {!isMenuHidden && (
          <SelectMenu
            aria-activedescendant={this.optionIds[focusedOptionIndex]}
            aria-labelledby={ariaLabelledBy}
            error={error}
            grow={grow}
            isHiding={isMenuHiding}
            menuRef={this.menuRef}
            onBlur={this.handleMenuBlur}
            onKeyDown={this.handleKeyboardShortcuts}
          >
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
