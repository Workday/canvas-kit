import * as React from 'react';
import styled from '@emotion/styled';
import {CSSObject, jsx} from '@emotion/core';
import {accessibleHide, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {depth, spacing, commonColors, borderRadius} from '@workday/canvas-kit-react-core';
import {MenuItemProps} from '@workday/canvas-kit-labs-react-menu';
import {Card} from '@workday/canvas-kit-react-card';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {TextInputProps} from '@workday/canvas-kit-react-text-input';
import uuid from 'uuid/v4';

export interface ComboboxProps extends GrowthBehavior, React.HTMLAttributes<HTMLElement> {
  /**
   * The TextInput child of the Combobox.
   */
  children: React.ReactElement<TextInputProps>;
  /**
   * The initial value of the Combobox.
   */
  initialValue?: string;
  /**
   * The variant of the Combobox clear button.
   * @default IconButton.Variant.Plain
   */
  clearButtonVariant: IconButtonVariant;
  /**
   * If true, render the Combobox with a button to clear the text input.
   * @default false
   */
  showClearButton?: boolean;
  /**
   * The `aria-label` for the Combobox clear button.
   * @default Reset Search Input
   */
  clearButtonLabel: string;
  /**
   * The autocomplete items of the Combobox. This array of menu items is shown under the text input.
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * The function called when the Combobox text input changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * The function called when the Combobox text input focuses.
   */
  onFocus?: React.FocusEventHandler;
  /**
   * The function called when the Combobox text input blurs.
   */
  onBlur?: React.FocusEventHandler;
  /**
   * The id of the form field.
   */
  labelId?: string;
}

export interface ComboboxState {
  value: string;
  isFocused: boolean;
  showingAutocomplete: boolean;
  selectedAutocompleteIndex: number | null;
}

const Container = styled('div')<Pick<ComboboxProps, 'grow'>>(
  {
    display: 'inline-block',
  },
  ({grow}) => ({
    width: grow ? '100%' : 'auto',
  })
);

const Status = styled('div')({
  ...accessibleHide,
});

const InputContainer = styled('div')({
  display: `flex`,
  alignItems: `center`,
  position: 'relative',
});

const MenuContainer = styled(Card)({
  position: 'absolute',
  zIndex: 1,
  left: 0,
  top: '100%',
  borderRadius: borderRadius.m,
  background: commonColors.background,
  border: `none`,
  marginTop: `-${borderRadius.m}`,
  width: '100%',
  minWidth: 0,
});

const AutocompleteList = styled('ul')({
  padding: 0,
  margin: `${spacing.xxs} 0`,
});

const ResetButton = styled(IconButton)<{shouldShow: boolean}>(
  {
    width: spacing.l,
    height: spacing.l,
    position: 'absolute',
    margin: 0,
    right: 0,
    padding: 0,
    zIndex: 2,
    transition: 'opacity 120ms',
  },
  ({shouldShow}) => ({
    visibility: shouldShow ? 'visible' : 'hidden',
    opacity: shouldShow ? 1 : 0,
  })
);

const listBoxIdPart = `listbox`;
const optionIdPart = `option`;
const getOptionId = (baseId?: string, index?: number) => `${baseId}-${optionIdPart}-${index}`;

export default class Combobox extends React.Component<ComboboxProps, ComboboxState> {
  private inputRef = this.props.children.props.inputRef || React.createRef<HTMLInputElement>();
  private comboboxRef = React.createRef<HTMLDivElement>();
  private id = uuid();

  static defaultProps = {
    clearButtonLabel: `Reset Search Input`,
    clearButtonVariant: IconButton.Variant.Plain,
  };

  state: Readonly<ComboboxState> = {
    isFocused: false,
    value: '',
    showingAutocomplete: false,
    selectedAutocompleteIndex: null,
  };

  componentDidMount() {
    if (this.props.initialValue) {
      this.setInputValue(this.props.initialValue);
    }
  }

  componentDidUpdate(prevProps: ComboboxProps, prevState: ComboboxState) {
    const listboxOrFocusChanged =
      this.props.autocompleteItems !== prevProps.autocompleteItems ||
      this.state.isFocused !== prevState.isFocused ||
      this.state.value !== prevState.value;
    if (this.props.autocompleteItems && listboxOrFocusChanged) {
      this.setState({
        showingAutocomplete: this.props.autocompleteItems.length > 0 && this.state.isFocused,
      });
    }
  }

  setInputValue = (newValue: string) => {
    this.setState({value: newValue});
    // Changing value prop programmatically doesn't fire an Synthetic event or trigger native onChange.
    // We can not just update .value= in setState because React library overrides input value setter
    // but we can call the function directly on the input as context.
    // This will cause onChange events to fire no matter how value is updated.
    if (this.inputRef && this.inputRef.current) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(this.inputRef.current),
        'value'
      );
      if (nativeInputValue && nativeInputValue.set) {
        nativeInputValue.set.call(this.inputRef.current, newValue);
      }

      let event: Event;
      if (typeof Event === 'function') {
        // modern browsers
        event = new Event('input', {bubbles: true});
      } else {
        // IE 11
        event = document.createEvent('Event');
        event.initEvent('input', true);
      }

      this.inputRef.current.dispatchEvent(event);
    }
  };

  getTextFromElement = (children?: React.ReactNode) => {
    let text = '';
    React.Children.map(children, child => {
      if (child == null || typeof child === 'boolean' || child === {}) {
        text += '';
      } else if (typeof child === 'string' || typeof child === 'number') {
        text += child.toString();
      } else if (Array.isArray(child)) {
        text += this.getTextFromElement(child);
      } else if ('props' in child) {
        text += this.getTextFromElement(child.props.children);
      }
    });
    return text;
  };

  buildStatusString = (listCount: number): string => {
    return `There ${listCount === 1 ? 'is' : 'are'} ${listCount} suggestion${
      listCount === 1 ? '' : 's'
    }.`;
  };

  handleAutocompleteClick = (event: React.SyntheticEvent, menuItemProps: MenuItemProps): void => {
    if (menuItemProps.isDisabled) {
      return;
    }
    this.setState({showingAutocomplete: false, isFocused: false});
    this.setInputValue(this.getTextFromElement(menuItemProps.children));
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event);
    }
  };

  focusInput = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  handleFocus = (event: React.FocusEvent) => {
    this.setState({isFocused: true});

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = (event: React.FocusEvent) => {
    if (this.comboboxRef.current) {
      let target: EventTarget | null = event.relatedTarget;
      if (target === null) {
        // IE11 swaps related and active target before it fires the blur event
        target = document.activeElement;
      }
      if (target && this.comboboxRef.current.contains(target as Element)) {
        return;
      }
    }

    this.setState({isFocused: false});

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  resetSearchInput = (): void => {
    this.setInputValue('');
    this.focusInput();
  };

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    if (event.ctrlKey || event.altKey || event.metaKey || !this.props.autocompleteItems) {
      return;
    }
    const currentIndex = this.state.selectedAutocompleteIndex;
    const autoCompleteItemCount = this.props.autocompleteItems.length;
    const firstItem = 0;
    const lastItem = autoCompleteItemCount - 1;
    let nextIndex = null;

    switch (event.key) {
      case 'ArrowUp':
      case 'Up': // IE/Edge specific value
        const upIndex = currentIndex != null ? currentIndex - 1 : lastItem;
        nextIndex = upIndex < 0 ? lastItem : upIndex;
        event.stopPropagation();
        event.preventDefault();
        break;

      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
        const downIndex = currentIndex != null ? currentIndex + 1 : firstItem;
        nextIndex = downIndex >= autoCompleteItemCount ? firstItem : downIndex;
        event.stopPropagation();
        event.preventDefault();
        break;

      case 'Escape':
      case 'Esc': // IE/Edge specific value
        this.resetSearchInput();
        break;

      case 'Enter':
        if (this.state.selectedAutocompleteIndex != null) {
          const item = this.props.autocompleteItems[this.state.selectedAutocompleteIndex];
          this.handleAutocompleteClick(event, item.props);
          if (item.props.isDisabled) {
            nextIndex = currentIndex;
          }
          this.setState({isFocused: true});
          event.stopPropagation();
          event.preventDefault();
        }
        break;

      default:
    }
    this.setState({selectedAutocompleteIndex: nextIndex});
  };

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({value: event.target.value});
  };

  isValidSingleChild = (child: React.ReactNode) => {
    return React.isValidElement(child) && React.Children.only(child);
  };

  renderChildren = (child: React.ReactElement<TextInputProps>): React.ReactNode => {
    if (!this.isValidSingleChild(child)) {
      return null;
    }

    return React.Children.map(child, inputElement => {
      let cssOverride: CSSObject = {zIndex: 2};
      if (this.props.showClearButton) {
        cssOverride = {
          ...cssOverride,
          paddingRight: spacing.xl,
        };
      }
      const newTextInputProps: Partial<TextInputProps> = {
        type: 'text',
        id: this.props.id,
        grow: this.props.grow,
        value: this.state.value,
        inputRef: this.inputRef,
        'aria-autocomplete': 'list',
        'aria-activedescendant':
          this.state.selectedAutocompleteIndex != null
            ? getOptionId(this.props.id, this.state.selectedAutocompleteIndex)
            : '',
        onChange: this.handleSearchInputChange,
        onKeyDown: this.handleKeyboardShortcuts,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        css: cssOverride,
        role: 'combobox',
        'aria-owns': `${this.props.id}-${listBoxIdPart}`,
        'aria-haspopup': true,
        'aria-expanded': this.state.showingAutocomplete,
      };
      const cloneElement = (element: React.ReactElement<TextInputProps>, props: TextInputProps) =>
        jsx(element.type, {
          ...element.props,
          ...props,
        });
      return cloneElement(inputElement, {...inputElement.props, ...newTextInputProps});
    });
  };

  render() {
    const {
      autocompleteItems,
      children,
      clearButtonVariant,
      grow,
      id = this.id,
      initialValue,
      onChange,
      onFocus,
      onBlur,
      showClearButton,
      labelId,
      ...elemProps
    } = this.props;

    return (
      <Container grow={grow} {...elemProps}>
        <InputContainer ref={this.comboboxRef}>
          {React.Children.map(children, this.renderChildren)}
          {showClearButton && (
            <ResetButton
              shouldShow={!!this.state.value}
              aria-label={this.props.clearButtonLabel}
              icon={xSmallIcon}
              variant={clearButtonVariant}
              toggled={undefined}
              onClick={this.resetSearchInput}
              onBlur={this.handleBlur}
            />
          )}
          {this.state.showingAutocomplete && (
            <MenuContainer padding={spacing.zero} depth={depth[1]}>
              <AutocompleteList
                role="listbox"
                id={`${id}-${listBoxIdPart}`}
                aria-labelledby={labelId}
              >
                {(autocompleteItems || []).map((listboxItem: React.ReactElement, index) => (
                  <React.Fragment key={index}>
                    {React.cloneElement(listboxItem, {
                      id: getOptionId(id, index),
                      role: 'option',
                      isFocused: this.state.selectedAutocompleteIndex === index,
                      'aria-selected': this.state.selectedAutocompleteIndex === index,
                      onClick: (event: React.MouseEvent) => {
                        event.preventDefault();
                        this.handleAutocompleteClick(event, listboxItem.props);
                      },
                    })}
                  </React.Fragment>
                ))}
              </AutocompleteList>
            </MenuContainer>
          )}
        </InputContainer>
        <Status role="status" aria-live="polite">
          {autocompleteItems
            ? this.state.showingAutocomplete && this.buildStatusString(autocompleteItems.length)
            : ''}
        </Status>
      </Container>
    );
  }
}
