import * as React from 'react';
import uuid from 'uuid/v4';

import {
  GrowthBehavior,
  ErrorType,
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
import {scrollIntoViewIfNeeded} from './scrolling';
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
   * If true, flip the SelectBase menu so it extends upwards from the button.
   * @default false
   */
  isMenuFlipped: boolean;
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
   * The function called when the Escape key is pressed while the SelectBase menu is the topmost element in the stack.
   */
  onMenuCloseOnEscape?: () => void;
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
  /**
   * If true, enable animation on the SelectBase menu.
   * @default true
   */
  shouldMenuAnimate: boolean;
  /**
   * If true, automatically flip the SelectBase menu to keep it visible if necessary (e.g., if the the menu would otherwise display below the visible area of the viewport).
   * @default true
   */
  shouldMenuAutoFlip: boolean;
  /**
   * If true, focus the SelectBase menu when it's shown. Set to false if you don't want to focus the menu automatically (for visual testing purposes, for example).
   * @default true
   */
  shouldMenuAutoFocus: boolean;
}

export const buttonBorderWidth = 1;
export const buttonDefaultWidth = 280;

const menuIconSize = 24;
const buttonPadding = spacingNumbers.xxs - buttonBorderWidth;

const SelectButton = styled('button')<
  Pick<SelectBaseProps, 'error' | 'grow' | 'isMenuHidden' | 'isMenuHiding' | 'theme'>
>(
  {
    ...type.body,
    border: `${buttonBorderWidth}px solid ${inputColors.border}`,
    cursor: 'default',
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: spacing.xl,
    outline: 'none',
    overflow: 'hidden',
    padding: buttonPadding,
    paddingRight: spacingNumbers.xxs + menuIconSize + buttonPadding,
    textAlign: 'left',
    textOverflow: 'ellipsis',
    transition: '0.2s box-shadow, 0.2s border-color',
    whiteSpace: 'nowrap',
    // width is required (instead of minWidth) in order for the button to
    // be sized properly for lengthy options
    width: buttonDefaultWidth,
    '&::placeholder': {
      color: inputColors.placeholder,
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
  ({error, isMenuHidden, isMenuHiding, theme}) => {
    const themedFocusOutlineColor = theme.canvas.palette.common.focusOutline;
    const buttonFocusStyles = {
      borderColor: themedFocusOutlineColor,
      boxShadow: `inset 0 0 0 1px ${themedFocusOutlineColor}`,
    };

    if (error === undefined) {
      // If there isn't an error, apply focus and hover styles if the menu is
      // hidden or hiding (otherwise, the menu is completely visible: style
      // the button as if it had focus)
      return isMenuHidden || isMenuHiding
        ? {
            '&:focus:not([disabled])': {
              ...buttonFocusStyles,
            },
            '&:hover:not([disabled]):not(:focus)': {
              borderColor: inputColors.hoverBorder,
            },
          }
        : {...buttonFocusStyles};
    }

    return {
      ...errorRing(error, theme),
    };
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

export default class SelectBase extends React.Component<SelectBaseProps> {
  static defaultProps = {
    focusedOptionIndex: 0,
    isEmpty: false,
    isMenuFlipped: false,
    isMenuHidden: true,
    isMenuHiding: false,
    shouldMenuAnimate: true,
    shouldMenuAutoFlip: true,
    shouldMenuAutoFocus: true,
  };

  private focusedOptionRef = React.createRef<HTMLLIElement>();
  private menuRef = React.createRef<HTMLUListElement>();
  private id = `a${uuid()}`; // make sure it is a valid [IDREF](https://www.w3.org/TR/xmlschema11-2/#IDREF)

  private scrollFocusedOptionIntoView = (center: boolean) => {
    const focusedOption = this.focusedOptionRef.current;
    if (focusedOption) {
      // We cannot use the native Element.scrollIntoView() here because it doesn't
      // work properly with the portalled menu; scrolling within the menu also scrolls
      // the ENTIRE page. Instead, we call our own scrollIntoViewIfNeeded function.
      scrollIntoViewIfNeeded(focusedOption, center);
    }
  };

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
              onClick: (event: React.MouseEvent) => {
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
      isMenuFlipped,
      isMenuHidden,
      isMenuHiding,
      onChange,
      onKeyDown,
      onMenuBlur,
      onMenuCloseOnEscape,
      options,
      shouldMenuAnimate,
      shouldMenuAutoFlip,
      shouldMenuAutoFocus,
      value,

      // Strip unneeded props on button from elemProps
      onOptionSelection,

      ...elemProps
    } = this.props;

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
          isMenuHiding={isMenuHiding}
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
        {!isEmpty && !isMenuHidden && (
          <SelectMenu
            aria-activedescendant={options[focusedOptionIndex].id}
            aria-labelledby={ariaLabelledBy}
            buttonRef={buttonRef}
            id={this.id}
            error={error}
            isFlipped={isMenuFlipped}
            isHidden={isMenuHidden}
            isHiding={isMenuHiding}
            menuRef={this.menuRef}
            onBlur={onMenuBlur}
            onKeyDown={onKeyDown}
            onCloseOnEscape={onMenuCloseOnEscape}
            shouldAnimate={shouldMenuAnimate}
            shouldAutoFlip={shouldMenuAutoFlip}
            shouldAutoFocus={shouldMenuAutoFocus}
          >
            {this.renderOptions(renderOption)}
          </SelectMenu>
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
