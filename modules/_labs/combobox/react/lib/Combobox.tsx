import * as React from 'react';
import styled from '@emotion/styled';
import {css, CSSObject} from '@emotion/core';
import {accessibleHide, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {depth, spacing, commonColors, borderRadius} from '@workday/canvas-kit-react-core';
import {MenuItemProps} from '@workday/canvas-kit-react-menu';
import {Card} from '@workday/canvas-kit-react-card';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {TextInputProps} from '@workday/canvas-kit-react-text-input';
import uuid from 'uuid/v4';

export interface ComboboxProps extends GrowthBehavior, React.HTMLAttributes<HTMLElement> {
  /**
   * Initial value to set the input to
   */
  initialValue?: string;
  /**
   * The type of icon button to use for clearing input
   */
  clearButtonVariant?: IconButtonVariant;
  /**
   * Show button to clear input field
   */
  showClearButton?: boolean;
  /**
   * Aria Label for clear button
   */
  clearButtonLabel: string;
  /**
   * An array of menu items to show under the search bar
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * Callback to listen when the TextInput changes
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Callback to listen when the TextInput focuses
   */
  onFocus?: React.FocusEventHandler;
  /**
   * Callback to listen when the TextInput blurs
   */
  onBlur?: React.FocusEventHandler;
  /**
   * The Form Field component to wrap.
   */
  children: React.ReactElement<TextInputProps>;
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

const MenuContainer = styled(Card)<Pick<ComboboxProps, 'grow'>>(
  {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: '100%',
    borderRadius: borderRadius.m,
    minWidth: 280, // The min-width of text inputs
    background: commonColors.background,
    border: `none`,
    marginTop: `-${borderRadius.m}`,
  },
  ({grow}) => ({
    width: grow ? '100%' : 'auto',
  })
);

const AutocompleteList = styled('ul')({
  padding: 0,
  margin: `${spacing.xxs} 0`,
});

const ResetButton = styled(IconButton)<Pick<ComboboxState, 'value'>>(
  {
    width: spacing.l,
    height: spacing.l,
    marginLeft: `-${spacing.xl}`,
    padding: 0,
    zIndex: 2,
  },
  ({value}) => ({
    visibility: value ? 'visible' : 'hidden',
  })
);

const listBoxIdPart = `listbox`;
const labelIdPart = `label`;
const optionIdPart = `option`;
const getOptionId = (baseId?: string, index?: number) => `${baseId}-${optionIdPart}-${index}`;

export default class Combobox extends React.Component<ComboboxProps, ComboboxState> {
  private inputRef = this.props.children.props.inputRef || React.createRef<HTMLInputElement>();
  private comboboxRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    id: `combobox-${uuid()}`,
    clearButtonLabel: `Reset Search Input`,
  };

  state: Readonly<ComboboxState> = {
    isFocused: false,
    value: '',
    showingAutocomplete: !!this.props.autocompleteItems && this.props.autocompleteItems.length > 0,
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
        const upIndex = currentIndex != null ? currentIndex - 1 : lastItem;
        nextIndex = upIndex < 0 ? lastItem : upIndex;
        break;

      case 'ArrowDown':
        const downIndex = currentIndex != null ? currentIndex + 1 : firstItem;
        nextIndex = downIndex >= autoCompleteItemCount ? firstItem : downIndex;
        break;

      case 'Escape':
        this.resetSearchInput();
        break;

      case 'Enter':
        if (this.state.selectedAutocompleteIndex != null) {
          const item = this.props.autocompleteItems[this.state.selectedAutocompleteIndex];
          this.handleAutocompleteClick(event, item.props);
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

  isValidSingleChild = (child: React.ReactNode) =>
    React.isValidElement(child) && React.Children.only(child);

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
        id: this.props.id,
        grow: this.props.grow,
        value: this.state.value,
        inputRef: this.inputRef,
        'aria-autocomplete': 'list',
        'aria-controls': `${this.props.id}-${listBoxIdPart}`,
        'aria-activedescendant':
          this.state.selectedAutocompleteIndex != null
            ? getOptionId(this.props.id, this.state.selectedAutocompleteIndex)
            : '',
        onChange: this.handleSearchInputChange,
        onKeyDown: this.handleKeyboardShortcuts,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: css(cssOverride),
      };
      return React.cloneElement(inputElement, {...inputElement.props, ...newTextInputProps});
    });
  };

  render() {
    const {
      autocompleteItems,
      children,
      clearButtonVariant = IconButton.Variant.Plain,
      grow,
      id,
      initialValue,
      onChange,
      onFocus,
      onBlur,
      showClearButton,
      ...elemProps
    } = this.props;

    return (
      <Container
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`${id}-${listBoxIdPart}`}
        aria-expanded={this.state.showingAutocomplete}
        grow={grow}
        {...elemProps}
      >
        <Status role="status" aria-live="polite">
          {autocompleteItems
            ? this.state.showingAutocomplete && this.buildStatusString(autocompleteItems.length)
            : ''}
        </Status>
        <InputContainer innerRef={this.comboboxRef}>
          {React.Children.map(children, this.renderChildren)}
          {showClearButton && (
            <ResetButton
              value={this.state.value}
              aria-label={this.props.clearButtonLabel}
              icon={xSmallIcon}
              variant={clearButtonVariant}
              toggled={undefined}
              onClick={this.resetSearchInput}
              onBlur={this.handleBlur}
            />
          )}
          {this.state.showingAutocomplete && (
            <MenuContainer padding={spacing.zero} depth={depth[1]} grow={grow}>
              <AutocompleteList
                role="listbox"
                id={`${id}-${listBoxIdPart}`}
                aria-labelledby={`${id}-${labelIdPart}`}
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
      </Container>
    );
  }
}
