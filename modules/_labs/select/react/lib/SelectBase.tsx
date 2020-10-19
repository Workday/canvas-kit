import React, {useLayoutEffect} from 'react';
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
import {MenuPlacement, MenuVisibility} from './types';
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
    Pick<React.SelectHTMLAttributes<HTMLSelectElement>, 'required'>,
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
   * If you omit the `renderOption` prop, each option will be rendered using a `defaultRenderOption` function provided by the component.
   *
   * @default defaultRenderOption
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
  focusedOptionIndex?: number;
  /**
   * The ref to the underlying (hidden) text input element. Use this to imperatively manipulate the input.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * The placement of the SelectBase menu relative to its corresponding SelectButton.
   * @default 'bottom'
   */
  menuPlacement?: MenuPlacement;
  /**
   * The ref to the underlying menu element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.RefObject<HTMLUListElement>;
  /**
   * The visibility state of the SelectBase menu.
   * @default 'closed'
   */
  menuVisibility?: MenuVisibility;
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
   * If true, automatically flip the SelectBase menu to keep it visible if necessary (e.g., if the the menu would otherwise display below the visible area of the viewport).
   * @default true
   */
  shouldMenuAutoFlip?: boolean;
  /**
   * If true, focus the SelectBase menu when it's shown. Set to false if you don't want to focus the menu automatically (for visual testing purposes, for example).
   * @default true
   */
  shouldMenuAutoFocus?: boolean;
}

export const buttonBorderWidth = 1;
export const buttonDefaultWidth = 280;

const menuIconSize = 24;
const buttonPadding = spacingNumbers.xxs - buttonBorderWidth;

const SelectButton = styled('button')<
  Pick<SelectBaseProps, 'error' | 'grow' | 'menuVisibility' | 'theme'>
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
  ({error, menuVisibility, theme}) => {
    const themedFocusOutlineColor = theme.canvas.palette.common.focusOutline;
    const buttonFocusStyles = {
      borderColor: themedFocusOutlineColor,
      boxShadow: `inset 0 0 0 1px ${themedFocusOutlineColor}`,
    };

    if (error === undefined) {
      // If there isn't an error, apply focus and hover styles if the menu is
      // closed or in the process of closing (otherwise, the menu is opened
      // or in the process of opening: style the button as if it had focus)
      return menuVisibility === 'closed' || menuVisibility === 'closing'
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

const defaultRenderOption: RenderOptionFunction = option => {
  return <div>{option.label}</div>;
};

const SelectBase = ({
  'aria-labelledby': ariaLabelledBy,
  'aria-required': ariaRequired,
  buttonRef,
  disabled,
  error,
  focusedOptionIndex = 0,
  grow,
  inputRef,
  menuPlacement = 'bottom',
  menuRef,
  menuVisibility = 'closed',
  onChange,
  onKeyDown,
  onMenuBlur,
  onMenuCloseOnEscape,
  onOptionSelection,
  options,
  renderOption = defaultRenderOption,
  required,
  shouldMenuAutoFlip = true,
  shouldMenuAutoFocus = true,
  value,
  ...elemProps
}: SelectBaseProps) => {
  const focusedOptionRef = React.useRef<HTMLLIElement>(null);

  // Generate a stable ID for the menu (https://codesandbox.io/s/p2ndq).
  // We prefix the ID with an "a" to ensure it's a valid IDREF
  // (https://www.w3.org/TR/xmlschema11-2/#IDREF).
  const [menuId] = React.useState(() => `a${uuid()}`);

  const renderOptions = (renderOption: RenderOptionFunction) => {
    const selectedOptionIndex = getCorrectedIndexByValue(options, value);

    return options.map((option, index) => {
      const optionProps = {
        'aria-disabled': option.disabled ? true : undefined,
        'aria-selected': selectedOptionIndex === index ? true : undefined,
        error,
        focused: focusedOptionIndex === index,
        id: option.id,
        interactive: menuVisibility === 'opening' || menuVisibility === 'opened',
        key: option.id,
        optionRef: focusedOptionIndex === index ? focusedOptionRef : undefined,
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

  // If the focused option changed, scroll the newly focused option into view (if
  // necessary) but do NOT center it
  useLayoutEffect(() => {
    const focusedOption = focusedOptionRef.current;

    if (focusedOption) {
      // TODO: Figure out if rAF is the best approach here. I initially added
      // rAF to get the Select States Menu On story to render correctly in IE.
      // Without rAF, the menu is scrolled slightly further down than it should
      // be (only in IE, and only in the Menu On visual testing stories), which
      // triggers a visual regression. We're inside useLayoutEffect here so I
      // didn't expect to need rAF in order to make proper measurements, but it
      // seems to be necessary in IE.
      //
      // This rAF call also has the additional benefit of fixing a jarring menu
      // placement issue in IE (https://github.com/Workday/canvas-kit/issues/791),
      // so I'm leaving it in for now.
      const animateId = requestAnimationFrame(() => {
        // We cannot use the native Element.scrollIntoView() here because it
        // doesn't work properly with the portalled menu: when using the keyboard
        // to advance focus through the options, using scrollIntoView to keep the
        // newly focused option in view also scrolls the ENTIRE page. Instead, we
        // call our own scrollIntoViewIfNeeded function.
        scrollIntoViewIfNeeded(focusedOption, false);
      });

      return () => {
        cancelAnimationFrame(animateId);
      };
    }

    return undefined;
  }, [focusedOptionIndex]);

  // If the menu was just opened, scroll the focused option into view (if
  // necessary) and center it
  useLayoutEffect(() => {
    const focusedOption = focusedOptionRef.current;

    // We need to scroll if the menu is either opening or opened in case we decide to
    // bypass the opening state and jump straight to opened (like in visual testing,
    // for instance)
    if (focusedOption && (menuVisibility === 'opening' || menuVisibility === 'opened')) {
      // TODO: This rAF call is also necessary for the Menu On visual testing
      // stories to render properly in IE (see above, both rAF calls need to be
      // present). It has no bearing on the menu placement issue.
      const animateId = requestAnimationFrame(() => {
        scrollIntoViewIfNeeded(focusedOption, true);
      });

      return () => {
        cancelAnimationFrame(animateId);
      };
    }

    return undefined;
  }, [menuVisibility]);

  // Do a bit of error-checking in case options weren't provided
  const hasOptions = options.length > 0;
  const selectedOption = hasOptions ? options[getCorrectedIndexByValue(options, value)] : null;
  const selectedOptionLabel = selectedOption ? selectedOption.label : '';
  const selectedOptionValue = selectedOption ? selectedOption.value : '';

  return (
    <SelectWrapper grow={grow} disabled={disabled}>
      <SelectButton
        aria-expanded={menuVisibility !== 'closed' ? 'true' : undefined}
        aria-haspopup="listbox"
        aria-controls={menuVisibility !== 'closed' ? menuId : undefined}
        disabled={disabled}
        error={error}
        grow={grow}
        menuVisibility={menuVisibility}
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
      {hasOptions && menuVisibility !== 'closed' && (
        <SelectMenu
          aria-activedescendant={options[focusedOptionIndex].id}
          aria-labelledby={ariaLabelledBy}
          aria-required={ariaRequired || required ? true : undefined}
          buttonRef={buttonRef}
          id={menuId}
          error={error}
          menuRef={menuRef}
          onBlur={onMenuBlur}
          onKeyDown={onKeyDown}
          onCloseOnEscape={onMenuCloseOnEscape}
          placement={menuPlacement}
          shouldAutoFlip={shouldMenuAutoFlip}
          shouldAutoFocus={shouldMenuAutoFocus}
          visibility={menuVisibility}
        >
          {renderOptions(renderOption)}
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
};

export default SelectBase;
