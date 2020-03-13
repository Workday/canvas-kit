import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {
  GrowthBehavior,
  ErrorType,
  errorRing,
  getErrorColors,
} from '@workday/canvas-kit-react-common';
import {keyframes, CSSObject} from '@emotion/core';
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
import uuid from 'uuid/v4';

export interface SelectProps
  extends Themeable,
    GrowthBehavior,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  children?: React.ReactElement<SelectOptionProps>[];
  disabled?: boolean;
  error?: ErrorType;
  value?: string;
}

export interface SelectState {
  focusedOptionIndex: number;
  isMenuHidden: boolean;
  isMenuHiding: boolean;
  justSelectedOptionIndex: number | null;
  label: string;
  selectedOptionIndex: number;
}

// TODO: Reduce selection animation duration to 0 to disable
// animation, but consider removing animation code entirely
// if we don't need it.
export const selectionPersistMenuDuration = 0;
const toggleMenuAnimationDuration = 200;

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOutAnimation = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const menuBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let dividerBorderColor = borderColor;
  let dividerBorderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
    dividerBorderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = colors.cantaloupe600;
    dividerBorderColor = inputColors.warning.border;
    dividerBorderWidth = 2;
  }

  const dividerBorder = `${dividerBorderWidth}px solid ${dividerBorderColor}`;

  return {
    borderColor: borderColor,

    // render the divider using a pseudo-element
    '&:before': {
      backgroundColor: colors.soap400,
      content: '""',
      display: 'block',
      height: 1,
      borderLeft: dividerBorder,
      borderRight: dividerBorder,
    },
  };
};

const menuListBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let borderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = inputColors.warning.border;
    borderWidth = 2;
  }

  const border = `${borderWidth}px solid ${borderColor}`;

  return {
    borderBottom: border,
    borderLeft: border,
    borderRight: border,
  };
};

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
    },
  // TODO: If we end up retaining focus on the SelectButton when the menu
  // is active (instead of shifting focus to the menu), remove this block
  // and instead modify errorRing to optionally display the focus ring
  ({error, isMenuHidden}) => {
    if (!isMenuHidden) {
      const errorColors = getErrorColors(error);
      const errorBoxShadow = `inset 0 0 0 ${errorColors.outer === errorColors.inner ? 1 : 2}px ${
        errorColors.inner
      }`;
      return {
        '&:focus:not([disabled])': {
          boxShadow: errorBoxShadow,
        },
      };
    } else {
      return;
    }
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

const SelectMenu = styled('div')<
  Pick<SelectProps, 'error' | 'grow'> & Pick<SelectState, 'isMenuHidden' | 'isMenuHiding'>
>(
  {
    animationName: fadeInAnimation,
    animationDuration: `${toggleMenuAnimationDuration / 1000}s`,
    // Required to prevent the occasional menu flash when the menu
    // fades out
    animationFillMode: 'forwards',
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
    borderTop: 0,
    boxSizing: 'border-box',
    minWidth: 280,
    position: 'absolute',
    // Offset the menu by the height of the select (spacingNumbers.xl)
    // minus the borderRadius of the select (borderRadius.m)
    top: `${spacingNumbers.xl - parseInt(borderRadius.m, 10)}px`,
    // TODO: don't think we need this transition, but verify in
    // IE11 before deleting it
    // transition: `${toggleMenuAnimationDuration / 1000}s opacity`,
    zIndex: 1,
  },
  ({error}) => ({
    ...menuBorderCSS(error),
  }),
  ({isMenuHidden}) =>
    isMenuHidden && {
      display: 'none',
    },
  ({isMenuHiding}) =>
    isMenuHiding && {
      animationName: fadeOutAnimation,
    },
  ({grow}) =>
    grow && {
      width: '100%',
    }
);

const SelectMenuList = styled('ul')<Pick<SelectProps, 'error'>>(
  {
    listStyle: 'none',
    margin: 0,
    // TODO: figure out proper maxHeight
    maxHeight: 200,
    overflowY: 'auto',
    padding: 0,
  },
  ({error}) => ({
    ...menuListBorderCSS(error),
  })
);

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
  private inputRef = React.createRef<HTMLInputElement>();
  private focusedOptionRef = React.createRef<HTMLLIElement>();

  private removeMenuTimer: ReturnType<typeof setTimeout>;
  private selectionPersistMenuTimer: ReturnType<typeof setTimeout>;
  private selectionCompletionTimer: ReturnType<typeof setTimeout>;

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
    justSelectedOptionIndex: null,
    label: '',
    selectedOptionIndex: 0,
  };

  private setOptionIds = (): void => {
    this.optionIds = React.Children.map(
      this.props.children,
      (child: React.ReactElement<SelectOptionProps>) => child.props.id || uuid()
    );
  };

  private setOptionLabels = (): void => {
    this.optionLabels = React.Children.map(
      this.props.children,
      (child: React.ReactElement<SelectOptionProps>) => child.props.label || ''
    );
  };

  // Store option values (in case we need to populate them if they're
  // undefined)
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
      this.setState({
        focusedOptionIndex: this.state.selectedOptionIndex,
        isMenuHidden: false,
      });

      // Force a render so we can scroll to the focused option in
      // case that option was focused while the menu was hidden
      // (i.e., the user triggered type-ahead while the Select was
      // focused with its menu hidden)
      this.forceUpdate(this.scrollFocusedOptionIntoView);
    } else {
      this.setState({isMenuHiding: true});

      this.removeMenuTimer = setTimeout(() => {
        this.setState({
          isMenuHiding: false,
          isMenuHidden: true,
        });
      }, toggleMenuAnimationDuration);
    }
  };

  // Menu may not be interacted with while it is hiding, or when
  // it is briefly persisted right after an option has been
  // selected
  private isMenuInteractive = (): boolean => {
    return !this.state.isMenuHiding && this.state.justSelectedOptionIndex === null;
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

  // TODO: move code for scrollIntoViewIfNeeded to a centralized place.
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

  private scrollFocusedOptionIntoView = () => {
    const focusedOption = this.focusedOptionRef.current;
    if (focusedOption) {
      this.scrollIntoViewIfNeeded(focusedOption, false);
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
    this.setOptionIds();
    this.setOptionLabels();
    this.setOptionValues();
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
    // scroll focused option into view if it changed since the
    // last render
    if (this.state.focusedOptionIndex !== prevState.focusedOptionIndex) {
      this.scrollFocusedOptionIntoView();
    }
  }

  componentWillUnmount() {
    // Clear timers
    if (this.removeMenuTimer) {
      clearTimeout(this.removeMenuTimer);
    }
    if (this.selectionPersistMenuTimer) {
      clearTimeout(this.selectionPersistMenuTimer);
    }
    if (this.selectionCompletionTimer) {
      clearTimeout(this.selectionCompletionTimer);
    }
    if (this.clearKeysSoFarTimer) {
      clearTimeout(this.clearKeysSoFarTimer);
    }
  }

  handleSelectMouseDown = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // We must use mousedown here instead of click.
    //
    // Assume the select button already has focus and the menu is
    // currently hidden in Firefox/Safari.
    //
    // If we use click, the button is blurred before the click
    // registers. When the button is blurred, the menu begins to
    // animate out. Right after the click is registered and we
    // show the menu, it's immediately removed at the end of the
    // animate out. So we never see the menu.

    // Suppress the button from being blurred in Firefox/Safari
    event.preventDefault();

    // Focus the button immediately on mousedown (again, required by
    // Firefox/Safari since the button isn't granted focus on click,
    // see: https://zellwk.com/blog/inconsistent-button-behavior/)
    event.currentTarget.focus();

    // Only toggle the menu if the the left button was clicked
    // (ignore right-clicks)
    if (event.nativeEvent.which === 1) {
      this.toggleMenu(this.state.isMenuHidden);
    }
  };

  handleSelectBlur = (event: React.FocusEvent): void => {
    this.toggleMenu(false);
  };

  handleOptionClick = (index: number): void => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const optionProps = childrenArray[index].props;

    // Abort immediately if:
    // * the menu is a non-interactive state
    // * a disabled option was clicked (we ignore these clicks)
    if (!this.isMenuInteractive() || optionProps.disabled) {
      return;
    }

    // Time: 0
    // Offer visual feedback briefly before hiding the menu
    this.setState({
      focusedOptionIndex: index,
      justSelectedOptionIndex: index,
      selectedOptionIndex: index,
    });

    // Time: selectionPersistMenuDuration
    // Hide the menu
    this.selectionPersistMenuTimer = setTimeout(() => {
      this.toggleMenu(false);
    }, selectionPersistMenuDuration);

    // Time: selectionPersistMenuDuration + toggleMenuAnimationDuration
    // Update the select label and reset justSelected state
    this.selectionCompletionTimer = setTimeout(() => {
      this.setState({
        justSelectedOptionIndex: null,
        label: this.optionLabels[index],
      });
    }, selectionPersistMenuDuration + toggleMenuAnimationDuration);

    this.updateInput(this.optionValues[index]);
  };

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const numOptions = childrenArray.length;
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
          if (this.state.isMenuHidden) {
            this.toggleMenu(true);
          } else {
            const direction = event.key === 'ArrowUp' || event.key === 'Up' ? -1 : 1;
            isShortcut = true;
            let nextIndex = this.state.focusedOptionIndex + direction;
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
          } else {
            this.handleOptionClick(this.state.focusedOptionIndex);
          }
          break;

        case 'Enter':
          isShortcut = true;
          this.handleOptionClick(this.state.focusedOptionIndex);
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
      justSelected: this.state.justSelectedOptionIndex === index,

      // We must use mousedown here instead of click. If we use
      // click, the select is blurred before the click registers.
      // When the select is blurred, the menu starts to hide.
      // When the menu starts to hide, the component becomes
      // non-interactive. And then when the click finally registers,
      // it's ignored because the component is non-interactive.
      onMouseDown: (event: React.MouseEvent) => {
        event.preventDefault();
        this.handleOptionClick(index);
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
          onBlur={this.handleSelectBlur}
          onKeyDown={this.handleKeyboardShortcuts}
          onMouseDown={this.handleSelectMouseDown}
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
        <SelectMenu
          error={error}
          grow={grow}
          isMenuHidden={isMenuHidden}
          isMenuHiding={isMenuHiding}
        >
          <SelectMenuList
            aria-activedescendant={!isMenuHidden ? this.optionIds[focusedOptionIndex] : undefined}
            aria-labelledby={ariaLabelledBy}
            error={error}
            role="listbox"
          >
            {React.Children.map(children, this.renderChildren)}
          </SelectMenuList>
        </SelectMenu>
        <SelectMenuIcon
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
        />
      </SelectWrapper>
    );
  }
}
