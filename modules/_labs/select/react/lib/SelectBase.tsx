import * as React from 'react';
import uuid from 'uuid/v4';
import {Rect} from '@popperjs/core';

import {
  GrowthBehavior,
  ErrorType,
  Placement,
  Popper,
  Themeable,
  errorRing,
  styled,
} from '@workday/canvas-kit-react-common';
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

import SelectMenu from './SelectMenu';
import SelectOption from './SelectOption';
import {getCorrectedIndexByValue} from './utils';

interface OptionData {
  // This allows developers to include arbitrary keys in their
  // Options data and to utilize those keys in their renderOption
  // function without encountering TypeScript errors
  [key: string]: any;
}

export interface Option {
  data?: OptionData;
  disabled?: boolean;
  id?: string;
  label?: string;
  value: string;
}

export interface NormalizedOption extends Option {
  // Optional keys in Option are required in NormalizedOption
  data: OptionData;
  disabled: boolean;
  id: string;
  label: string;
}

export interface RenderableOption extends NormalizedOption {
  focused: boolean;
  selected: boolean;
}

export interface RenderOptionFunction {
  (option: RenderableOption): React.ReactNode;
}

export interface CoreSelectBaseProps
  extends Themeable,
    GrowthBehavior,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * The type of error associated with the Select (if applicable).
   */
  error?: ErrorType;
  /**
   * The function called to render the content of each option.
   *
   * The `option` argument passed to the function is an object which contains the following:
   *
   * * `data: object` (data object carried over from the corresponding option originally passed into the component)
   * * `disabled: boolean`
   * * `focused: boolean` (set to `true` if the option has keyboard focus)
   * * `id: string`
   * * `label: string`
   * * `selected: boolean` (set to `true` if the option is selected)
   * * `value: string`
   *
   * If you omit the `renderOption` prop, each option will be rendered using a default `renderOption` function provided by the component.
   */
  renderOption?: RenderOptionFunction;
  /**
   * The value of the Select.
   */
  value?: string;
}

export interface SelectBaseProps extends CoreSelectBaseProps {
  /**
   * The ref to the underlying button element. Use this to imperatively manipulate the button.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  /**
   * The index of the focused option in the SelectBase.
   * @default 0
   */
  focusedOptionIndex: number;
  /**
   * The ref to the underlying (hidden) text input element. Use this to imperatively manipulate the input.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * If true, set the SelectBase to the empty state (i.e., no options were provided).
   * @default false
   */
  isEmpty: boolean;
  /**
   * If true, enable animation on the SelectBase menu.
   * @default true
   */
  isMenuAnimated: boolean;
  /**
   * If true, automatically flip the menu to keep it visible if necessary (e.g., if the the menu would otherwise display below the visible area of the viewport).
   * @default true
   */
  isMenuAutoFlipped: boolean;
  /**
   * If true, focus the menu when it's shown. Set to false if you don't want to focus the menu automatically (for visual testing purposes, for example).
   * @default true
   */
  isMenuAutoFocused: boolean;
  /**
   * If true, hide the SelectBase menu.
   * @default true
   */
  isMenuHidden: boolean;
  /**
   * If true, set the SelectBase to the "menu is hiding" state.
   * @default false
   */
  isMenuHiding: boolean;
  /**
   * The function called when a key is pressed down while the SelectBase button or menu has focus.
   */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /**
   * The function called when the SelectBase menu loses focus.
   */
  onMenuBlur?: (event: React.FocusEvent) => void;
  /**
   * The function called when an option in the SelectBase is selected via a click or a keyboard shortcut. The `index` passed to the callback function represents the index of the option which was selected.
   */
  onOptionSelection?: (index: number) => void;
  /**
   * The options of the SelectBase. `options` is an array of objects, each object adhering to the `NormalizedOption` interface:
   *
   * * `value: string` (required, analagous to the `value` attribute of an `<option>`)
   * * `disabled: boolean` (required)
   * * `id: string` (required)
   * * `label: string` (required, analagous to the text content of an `<option>`)
   */
  options: NormalizedOption[];
}

interface SelectBaseState {
  // We need the menuWidth state to support the use case where the menu is
  // displayed without user interaction (e.g., if we want to show the menu
  // from the start). buttonRef.current is set to null during the first
  // render, which prevents Popper from rendering due to the lack of a
  // reference element. By the time componentDidMount runs, buttonRef.current
  // will have been set -- we can then update the menuWidth state and trigger
  // a render with the Popper menu.
  menuWidth: number;
}

const menuIconSize = 24;
const buttonBorderWidth = 1;
const buttonPadding = spacingNumbers.xxs - buttonBorderWidth;

const focusButtonStyles = {
  borderColor: inputColors.focusBorder,
  boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
  outline: 'none',
};

const SelectButton = styled('button')<Pick<SelectBaseProps, 'error' | 'grow' | 'isMenuHidden'>>(
  {
    ...type.body,
    border: `${buttonBorderWidth}px solid ${inputColors.border}`,
    cursor: 'default',
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: spacing.xl,
    overflow: 'hidden',
    padding: buttonPadding,
    paddingRight: spacingNumbers.xxs + menuIconSize + buttonPadding,
    textAlign: 'left',
    textOverflow: 'ellipsis',
    transition: '0.2s box-shadow, 0.2s border-color',
    whiteSpace: 'nowrap',
    // width is required (instead of minWidth) in order for the button to
    // be sized properly for lengthy options
    width: 280,
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:focus:not([disabled])': {
      ...focusButtonStyles,
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
            ...focusButtonStyles,
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

const SelectWrapper = styled('div')<Pick<SelectBaseProps, 'grow' | 'disabled'>>(
  {
    position: 'relative',
  },
  ({grow}) => ({
    display: grow ? 'block' : 'inline-block',
  }),
  ({disabled}) => ({
    '&:hover .menu-icon path': {
      fill: disabled ? undefined : colors.licorice500,
    },
  })
);

export default class SelectBase extends React.Component<SelectBaseProps, SelectBaseState> {
  static defaultProps = {
    focusedOptionIndex: 0,
    isEmpty: false,
    isMenuAnimated: true,
    isMenuAutoFlipped: true,
    isMenuAutoFocused: true,
    isMenuHidden: true,
    isMenuHiding: false,
  };

  state: Readonly<SelectBaseState> = {
    menuWidth: 0,
  };

  private focusedOptionRef = React.createRef<HTMLLIElement>();
  private menuRef = React.createRef<HTMLUListElement>();
  private id = `a${uuid()}`; // make sure it is a valid [IDREF](https://www.w3.org/TR/xmlschema11-2/#IDREF)

  // Tweaked from https://gist.github.com/hsablonniere/2581101
  // Removed reliance on scrollIntoView due to undesired scrolling on the
  // entire page when positioning the menu using Popper
  private scrollIntoViewIfNeeded = (elem: HTMLElement, centerIfNeeded = true): void => {
    const parent: HTMLElement | null = elem.parentElement;

    if (elem && parent) {
      const parentComputedStyle = window.getComputedStyle(parent, null),
        parentBorderTopWidth = parseInt(
          parentComputedStyle.getPropertyValue('border-top-width'),
          10
        ),
        overTop = elem.offsetTop - parent.offsetTop < parent.scrollTop,
        overBottom =
          elem.offsetTop - parent.offsetTop + elem.clientHeight - parentBorderTopWidth >
          parent.scrollTop + parent.clientHeight;

      if ((overTop || overBottom) && centerIfNeeded) {
        parent.scrollTop =
          elem.offsetTop -
          parent.offsetTop -
          parent.clientHeight / 2 -
          parentBorderTopWidth +
          elem.clientHeight / 2;
      }

      if ((overTop || overBottom) && !centerIfNeeded) {
        if (overBottom) {
          // Element is out of view at the bottom edge of the parent viewport;
          // scroll down just far enough for the element to be visible
          if (parent.scrollTop === 0) {
            parent.scrollTop =
              elem.clientHeight - (parent.clientHeight + parentBorderTopWidth - elem.offsetTop);
          } else {
            parent.scrollTop += elem.clientHeight;
          }
        } else {
          // Element is out of view at the top edge of the parent viewport;
          // scroll up just far enough for the element to be visible
          parent.scrollTop = elem.offsetTop - parentBorderTopWidth;
        }
      }
    }
  };

  private scrollFocusedOptionIntoView = (center: boolean) => {
    const focusedOption = this.focusedOptionRef.current;
    if (focusedOption) {
      this.scrollIntoViewIfNeeded(focusedOption, center);
    }
  };

  private generatePopperOptions = () => {
    const {isMenuAutoFlipped, isMenuAutoFocused} = this.props;

    const fallbackPlacements = isMenuAutoFlipped ? ['top-start'] : [];

    const modifiers = [
      {
        name: 'flip',
        options: {
          fallbackPlacements,
        },
      },
      {
        name: 'offset',
        options: {
          offset: ({
            placement,
            reference,
            popper,
          }: {
            placement: Placement;
            reference: Rect;
            popper: Rect;
          }) => {
            // Skid menu along the edge of the button to account
            // for fractional x-positioning of the button (e.g.,
            // if the button is in a horizontally-centered modal)
            // and to ensure proper alignment between the button
            // and the menu
            const skidding = reference.x % 1 === 0 ? 0 : 1;
            // Displace menu towards the button to obscure the bottom
            // edge of the button and to create a smooth visual
            // connection between the button and the menu
            const distance = -parseInt(borderRadius.m, 10);
            return [skidding, distance];
          },
        },
      },
    ];

    return {
      modifiers,
      onFirstUpdate: () => {
        if (isMenuAutoFocused && this.menuRef.current) {
          this.menuRef.current.focus();
        }
      },
    };
  };

  componentDidMount() {
    const {buttonRef, error} = this.props;
    if (buttonRef && buttonRef.current) {
      // Menu width is dependent on the error (since different ErrorTypes
      // have different border widths)
      const boxShadowWidth = error === ErrorType.Alert ? 2 : 1;
      this.setState({menuWidth: buttonRef.current.clientWidth - 2 * boxShadowWidth});
    }
  }

  componentDidUpdate(prevProps: SelectBaseProps) {
    const {focusedOptionIndex, isMenuHidden} = this.props;

    // If the menu was just displayed, scroll the focused option into
    // center view
    if (!isMenuHidden && prevProps.isMenuHidden) {
      this.scrollFocusedOptionIntoView(true);

      // Otherwise, if the menu is displayed AND the focused option changed
      // since the last render, scroll the focused option into view, but
      // do NOT center it
    } else if (!isMenuHidden && focusedOptionIndex !== prevProps.focusedOptionIndex) {
      this.scrollFocusedOptionIntoView(false);
    }
  }

  renderOptions = (renderOption: RenderOptionFunction) => {
    const {error, focusedOptionIndex, onOptionSelection, isMenuHiding, options, value} = this.props;

    const selectedOptionIndex = getCorrectedIndexByValue(options, value);

    return options.map((option, index) => {
      const optionProps = {
        'aria-selected': selectedOptionIndex === index ? true : undefined,
        disabled: option.disabled,
        error,
        focused: focusedOptionIndex === index,
        id: option.id,
        interactive: !isMenuHiding,
        key: option.id,
        optionRef: focusedOptionIndex === index ? this.focusedOptionRef : undefined,
        value: option.value,
        ...(onOptionSelection
          ? {
              // Prevent click from propagating (and, say, dismissing
              // a modal containing the Select)
              onClick: (event: React.MouseEvent) => {
                event.stopPropagation();
              },
              // mouseDown provides a slightly better UX than click
              // since visual feedback of selected option is more
              // immediate
              onMouseDown: (event: React.MouseEvent) => {
                event.preventDefault();
                onOptionSelection(index);
              },
            }
          : {}),
      };

      // Pass in additional information about the option state: focused, selected
      const normalizedOption = {
        ...option,
        focused: optionProps.focused,
        selected: !!optionProps['aria-selected'],
      };

      return <SelectOption {...optionProps}>{renderOption(normalizedOption)}</SelectOption>;
    });
  };

  renderOption: RenderOptionFunction = option => {
    return <div>{option.label}</div>;
  };

  public render() {
    const {
      'aria-labelledby': ariaLabelledBy,
      buttonRef,
      disabled,
      error,
      focusedOptionIndex,
      grow,
      inputRef,
      isEmpty,
      isMenuAnimated,
      isMenuHidden,
      isMenuHiding,
      onChange,
      onKeyDown,
      onMenuBlur,
      options,
      value,

      // Strip unneeded props on button from elemProps
      isMenuAutoFlipped,
      isMenuAutoFocused,
      onOptionSelection,

      ...elemProps
    } = this.props;

    const {menuWidth} = this.state;

    // Use default renderOption if renderOption prop isn't provided
    const renderOption = this.props.renderOption || this.renderOption;

    // Do a bit of error-checking in case options weren't provided
    const selectedOption = !isEmpty ? options[getCorrectedIndexByValue(options, value)] : null;
    const selectedOptionLabel = selectedOption ? selectedOption.label : '';
    const selectedOptionValue = selectedOption ? selectedOption.value : '';

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectButton
          aria-expanded={!isMenuHidden ? 'true' : undefined}
          aria-haspopup="listbox"
          aria-owns={this.id}
          disabled={disabled}
          error={error}
          grow={grow}
          isMenuHidden={isMenuHidden}
          onKeyDown={onKeyDown}
          // Prevent Firefox from triggering click handler on spacebar during
          // type-ahead when the menu is closed (and, thus, incorrectly displaying
          // the menu)
          onKeyUp={e => {
            e.preventDefault();
          }}
          ref={buttonRef}
          type="button"
          value={selectedOptionValue}
          {...elemProps}
        >
          {selectedOptionLabel}
        </SelectButton>
        <SelectInput onChange={onChange} ref={inputRef} type="text" value={selectedOptionValue} />
        {!isEmpty && !isMenuHidden && buttonRef && buttonRef.current && (
          <Popper
            placement="bottom-start"
            open={!isMenuHidden}
            anchorElement={buttonRef.current}
            popperOptions={this.generatePopperOptions()}
            // zIndex is necessary in order for the menu to be displayed
            // properly if Select is placed within a CK Modal (necessary
            // to override zIndex of 1 for the Modal)
            style={{zIndex: 2}}
          >
            <SelectMenu
              aria-activedescendant={options[focusedOptionIndex].id}
              aria-labelledby={ariaLabelledBy}
              id={this.id}
              error={error}
              isAnimated={isMenuAnimated}
              isHiding={isMenuHiding}
              menuRef={this.menuRef}
              onBlur={onMenuBlur}
              onKeyDown={onKeyDown}
              style={{width: menuWidth}}
            >
              {this.renderOptions(renderOption)}
            </SelectMenu>
          </Popper>
        )}
        <SelectMenuIcon
          className="menu-icon"
          icon={caretDownSmallIcon}
          color={disabled ? colors.licorice100 : colors.licorice200}
          colorHover={disabled ? colors.licorice100 : colors.licorice500}
          size={menuIconSize}
        />
      </SelectWrapper>
    );
  }
}
