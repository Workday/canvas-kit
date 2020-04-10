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
import SelectMenu from './SelectMenu';
import SelectOption from './SelectOption';

export interface Option {
  // This allows developers to include arbitrary keys in their
  // Options and to utilize those keys in their renderOption
  // function without encountering TypeScript errors
  [key: string]: any;

  // Known, optional keys
  disabled?: boolean;
  id?: string;
  label?: string;

  // Known, required keys
  value: string;
}

export interface NormalizedOption extends Option {
  // Optional keys in Option are required in NormalizedOption
  disabled: boolean;
  id: string;
  label: string;
}

export interface RenderOptionFunction {
  (option: NormalizedOption): React.ReactNode;
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
   * * `disabled: boolean`
   * * `focused: boolean` (set to `true` if the option has keyboard focus)
   * * `id: string`
   * * `label: string`
   * * `selected: boolean` (set to `true` if the option is selected)
   * * `value: string`
   *
   * Additionally, each `option` will contain any other key/value pairs you defined in the `options` prop.
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
  buttonRef?: React.Ref<HTMLButtonElement>;
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
   * If true, enable animation on the SelectBase menu.
   * @default true
   */
  isMenuAnimated?: boolean;
  /**
   * If true, hide the SelectBase menu.
   * @default true
   */
  isMenuHidden?: boolean;
  /**
   * If true, set the SelectBase to the "menu is hiding" state.
   * @default false
   */
  isMenuHiding?: boolean;
  // TODO: not sure we need this (won't it just be set by the value? or even the label of the selectedOptionIndex?)
  /**
   * The label of the SelectBase.
   * @default '''
   */
  label: string;
  /**
   * The ref to the underlying menu/listbox element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.Ref<HTMLUListElement>;
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
  /**
   * The index of the selected option in the SelectBase.
   * @default 0
   */
  selectedOptionIndex: number;
}

const focusButtonStyles = {
  borderColor: inputColors.focusBorder,
  boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
  outline: 'none',
};

const SelectButton = styled('button')<Pick<SelectBaseProps, 'error' | 'grow' | 'isMenuHidden'>>(
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

export default class SelectBase extends React.Component<SelectBaseProps> {
  static defaultProps = {
    focusedOptionIndex: 0,
    isMenuAnimated: true,
    isMenuHidden: true,
    isMenuHiding: false,
    label: '',
    selectedOptionIndex: 0,
  };

  private focusedOptionRef = React.createRef<HTMLLIElement>();

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
    const {
      error,
      focusedOptionIndex,
      onOptionSelection,
      isMenuHiding,
      options,
      selectedOptionIndex,
    } = this.props;

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
      isMenuAnimated,
      isMenuHidden,
      isMenuHiding,
      label,
      menuRef,
      onChange,
      onKeyDown,
      onMenuBlur,
      // Strip onOptionSelection from elemProps
      onOptionSelection,
      options,
      ...elemProps
    } = this.props;

    // Use default renderOption if renderOption prop isn't provided
    const renderOption = this.props.renderOption || this.renderOption;

    return (
      <SelectWrapper grow={grow} disabled={disabled}>
        <SelectButton
          aria-expanded={!isMenuHidden ? 'true' : undefined}
          aria-haspopup="listbox"
          disabled={disabled}
          error={error}
          grow={grow}
          isMenuHidden={isMenuHidden}
          onKeyDown={onKeyDown}
          ref={buttonRef}
          {...elemProps}
        >
          {label}
        </SelectButton>
        <SelectInput onChange={onChange} ref={inputRef} type="text" />
        {!isMenuHidden && (
          <SelectMenu
            aria-activedescendant={options[focusedOptionIndex].id}
            aria-labelledby={ariaLabelledBy}
            error={error}
            isAnimated={isMenuAnimated}
            isHiding={isMenuHiding}
            menuRef={menuRef}
            onBlur={onMenuBlur}
            onKeyDown={onKeyDown}
          >
            {this.renderOptions(renderOption)}
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
