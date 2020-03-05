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
  focusedOptionIndex: number | null;
  isMenuHidden: boolean;
  isMenuHiding: boolean;
  justSelectedOptionIndex: number | null;
  label: string;
  selectedOptionIndex: number;
}

export const selectionPersistMenuDuration = 200;
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

const menuListBorderCSS = (borderColor: string, borderWidth = 1): CSSObject => {
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
  ({error}) => {
    if (error === ErrorType.Error) {
      return {
        ...menuListBorderCSS(inputColors.error.border),
      };
    } else if (error === ErrorType.Alert) {
      return {
        ...menuListBorderCSS(inputColors.warning.border, 2),
      };
    } else {
      return {
        ...menuListBorderCSS(inputColors.focusBorder),
      };
    }
  }
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
  private removeMenuTimer: ReturnType<typeof setTimeout>;
  private selectionPersistMenuTimer: ReturnType<typeof setTimeout>;
  private selectionCompletionTimer: ReturnType<typeof setTimeout>;

  static ErrorType = ErrorType;

  static defaultProps = {
    disabled: false,
  };

  private optionIds: string[];

  state: Readonly<SelectState> = {
    focusedOptionIndex: null,
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

  private indexByValue = (value: string): number => {
    const childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    return childrenArray.findIndex(child => child.props.value === value);
  };

  private toggleMenu = (show: boolean): void => {
    if (show) {
      this.setState({
        focusedOptionIndex: this.state.selectedOptionIndex,
        isMenuHidden: false,
      });
    } else {
      this.setState({isMenuHiding: true});

      this.removeMenuTimer = setTimeout(() => {
        this.setState({
          focusedOptionIndex: null,
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

  constructor(props: SelectProps) {
    super(props);
    this.setOptionIds();
  }

  componentDidMount() {
    const {children, value} = this.props;

    const childrenArray = React.Children.toArray(children) as React.ReactElement<
      SelectOptionProps
    >[];

    // If value exists, set state to that value...
    if (value) {
      const childIndex = this.indexByValue(value);

      if (childIndex !== -1) {
        this.setState({
          label: childrenArray[childIndex].props.label,
          selectedOptionIndex: childIndex,
        });
        return;
      }
    }

    // ... otherwise, set state to the first option
    const firstOption = childrenArray[0];
    this.setState({
      label: firstOption.props.label,
    });
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

  handleOptionClick = (optionProps: SelectOptionProps): void => {
    // Abort immediately if:
    // * the menu is a non-interactive state
    // * a disabled option was clicked (we ignore these clicks)
    if (!this.isMenuInteractive() || optionProps.disabled) {
      return;
    }

    const index = this.indexByValue(optionProps.value);

    // Time: 0
    // Offer visual feedback briefly before hiding the menu
    this.setState({
      focusedOptionIndex: null,
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
        label: optionProps.label,
      });
    }, selectionPersistMenuDuration + toggleMenuAnimationDuration);

    // Code inspired by: https://stackoverflow.com/a/46012210
    // We want to programatically change the value of the
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

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    const children = React.Children.toArray(this.props.children) as React.ReactElement<
      SelectOptionProps
    >[];
    const itemCount = children.length;
    let isShortcut = false;
    let nextFocusedIndex = 0;

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        if (this.state.isMenuHidden) {
          this.toggleMenu(true);
        } else if (this.state.focusedOptionIndex !== null) {
          const direction = event.key === 'ArrowUp' ? -1 : 1;
          isShortcut = true;
          let nextIndex = this.state.focusedOptionIndex + direction;
          while (nextIndex < itemCount && nextIndex >= 0 && children[nextIndex].props.disabled) {
            nextIndex += direction;
          }
          nextFocusedIndex = nextIndex < 0 ? 0 : nextIndex >= itemCount ? itemCount - 1 : nextIndex;
          this.setState({focusedOptionIndex: nextFocusedIndex});
        }
        break;

      case 'Spacebar':
      case ' ':
      case 'Enter':
        if (this.state.focusedOptionIndex !== null) {
          const child = children[this.state.focusedOptionIndex] as React.ReactElement<
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
        this.handleOptionClick(child.props);
      },

      selected: this.state.selectedOptionIndex === index,
      suppressed: !this.isMenuInteractive(),
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

    const {isMenuHidden, isMenuHiding, label} = this.state;

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
          value={value}
        />
        <SelectMenu
          error={error}
          grow={grow}
          isMenuHidden={isMenuHidden}
          isMenuHiding={isMenuHiding}
        >
          <SelectMenuList aria-labelledby={ariaLabelledBy} error={error} role="listbox">
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
