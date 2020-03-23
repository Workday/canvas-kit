import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import {CSSObject, jsx} from '@emotion/core';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {depth, spacing, commonColors, borderRadius} from '@workday/canvas-kit-react-core';
import {MenuItemProps} from '@workday/canvas-kit-labs-react-menu';
import {Card} from '@workday/canvas-kit-react-card';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {TextInputProps} from '@workday/canvas-kit-react-text-input';
import uuid from 'uuid/v4';
import flatten from 'lodash/flatten';
import AutocompleteList from './AutocompleteList';
import Status from './Status';

export interface ComboBoxMenuItemGroup {
  // A non intractable header that logically separates autocomplete items
  header: React.ReactElement<MenuItemProps>;
  // A group of logically distinct autocomplete items
  items: React.ReactElement<MenuItemProps>[];
}

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
  clearButtonVariant?: IconButtonVariant;
  /**
   * If true, render the Combobox with a button to clear the text input.
   * @default false
   */
  showClearButton?: boolean;
  /**
   * The `aria-label` for the Combobox clear button.
   * @default Reset Search Input
   */
  clearButtonAriaLabel?: string;
  /**
   * The autocomplete items of the Combobox. This array of menu items is shown under the text input.
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[] | ComboBoxMenuItemGroup[];
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
  /**
   * The text for screen readers announcing the autocomplete count
   */
  getStatusText?: (listCount: number) => string;
}

const Container = styled('div')<Pick<ComboboxProps, 'grow'>>(
  {
    display: 'inline-block',
  },
  ({grow}) => ({
    width: grow ? '100%' : 'auto',
  })
);

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

export const listBoxIdPart = `listbox`;
const optionIdPart = `option`;
export const getOptionId = (baseId?: string, index?: number) =>
  `${baseId}-${optionIdPart}-${index}`;

const getTextFromElement = (children?: React.ReactNode) => {
  let text = '';
  React.Children.map(children, child => {
    if (child == null || typeof child === 'boolean' || child === {}) {
      text += '';
    } else if (typeof child === 'string' || typeof child === 'number') {
      text += child.toString();
    } else if (Array.isArray(child)) {
      text += getTextFromElement(child);
    } else if ('props' in child) {
      text += getTextFromElement(child.props.children);
    }
  });
  return text;
};

const buildStatusString = (listCount: number): string => {
  return `There ${listCount === 1 ? 'is' : 'are'} ${listCount} suggestion${
    listCount === 1 ? '' : 's'
  }.`;
};

const isValidSingleChild = (child: React.ReactNode) => {
  return React.isValidElement(child) && React.Children.only(child);
};

const Combobox = ({
  autocompleteItems,
  children,
  grow,
  initialValue,
  onChange,
  onFocus,
  onBlur,
  showClearButton,
  clearButtonVariant = IconButton.Variant.Plain,
  clearButtonAriaLabel = `Reset Search Input`,
  labelId,
  getStatusText = buildStatusString,
  id,
  ...elemProps
}: ComboboxProps) => {
  const [isFocused, setIsFocused] = useState<boolean>();
  const [value, _setValue] = useState(''); // Don't call _setValue directly instead call setInputValue to make sure onChange fires correctly
  const [showingAutocomplete, setShowingAutocomplete] = useState<boolean>();
  const [selectedAutocompleteIndex, setSelectedAutocompleteIndex] = useState<number | null>(null);
  const [interactiveAutocompleteItems, setInteractiveAutocompleteItems] = useState<
    React.ReactElement<MenuItemProps>[]
  >([]);
  const [announcementText, setAnnouncementText] = useState('');

  const inputRef: React.RefObject<HTMLInputElement> =
    (typeof children.props.inputRef !== 'function' && children.props.inputRef) || useRef(null);
  const comboboxRef: React.RefObject<HTMLDivElement> = useRef(null);

  const [randomComponentId] = React.useState(() => uuid()); // https://codesandbox.io/s/p2ndq
  const [randomLabelId] = React.useState(() => uuid());

  const componentId = id || randomComponentId;
  const formLabelId = labelId || randomLabelId;

  const getInteractiveAutocompleteItems = (): React.ReactElement<MenuItemProps>[] => {
    if (autocompleteItems && autocompleteItems.length && 'header' in autocompleteItems[0]) {
      return flatten((autocompleteItems as ComboBoxMenuItemGroup[]).map(group => group.items));
    }
    return (autocompleteItems as React.ReactElement<MenuItemProps>[]) || [];
  };

  useEffect(() => {
    const shouldShow = interactiveAutocompleteItems.length > 0 && isFocused;
    setShowingAutocomplete(shouldShow);
    if (shouldShow) {
      setAnnouncementText(buildStatusString(interactiveAutocompleteItems.length));
    }
  }, [interactiveAutocompleteItems, isFocused, value]);

  const setInputValue = (newValue: string) => {
    _setValue(newValue);
    const inputDomElement = inputRef.current;
    // Changing value prop programmatically doesn't fire an Synthetic event or trigger native onChange.
    // We can not just update .value= in setState because React library overrides input value setter
    // but we can call the function directly on the input as context.
    // This will cause onChange events to fire no matter how value is updated.
    if (inputDomElement) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(inputDomElement),
        'value'
      );
      if (nativeInputValue && nativeInputValue.set) {
        nativeInputValue.set.call(inputDomElement, newValue);
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

      inputDomElement.dispatchEvent(event);
    }
  };

  useEffect(() => {
    if (initialValue) {
      setInputValue(initialValue);
    }
  }, []);

  useEffect(() => {
    const items = getInteractiveAutocompleteItems();
    setInteractiveAutocompleteItems(items);
  }, [autocompleteItems]);

  const handleAutocompleteClick = (
    event: React.SyntheticEvent,
    menuItemProps: MenuItemProps
  ): void => {
    if (menuItemProps.isDisabled) {
      return;
    }
    setShowingAutocomplete(false);
    setIsFocused(false);
    setInputValue(getTextFromElement(menuItemProps.children));
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = (event: React.FocusEvent) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (comboboxRef.current) {
      let target: EventTarget | null = event.relatedTarget;
      if (target === null) {
        // IE11 swaps related and active target before it fires the blur event
        target = document.activeElement;
      }
      if (target && comboboxRef.current.contains(target as Element)) {
        return;
      }
    }

    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const resetSearchInput = (): void => {
    setInputValue('');
    focusInput();
  };

  const handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    if (event.ctrlKey || event.altKey || event.metaKey || !interactiveAutocompleteItems.length) {
      return;
    }
    const autoCompleteItemCount = interactiveAutocompleteItems.length;
    const firstItem = 0;
    const lastItem = autoCompleteItemCount - 1;
    let nextIndex = null;

    switch (event.key) {
      case 'ArrowUp':
      case 'Up': // IE/Edge specific value
        const upIndex =
          selectedAutocompleteIndex != null ? selectedAutocompleteIndex - 1 : lastItem;
        nextIndex = upIndex < 0 ? lastItem : upIndex;
        event.stopPropagation();
        event.preventDefault();
        break;

      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
        const downIndex =
          selectedAutocompleteIndex != null ? selectedAutocompleteIndex + 1 : firstItem;
        nextIndex = downIndex >= autoCompleteItemCount ? firstItem : downIndex;
        event.stopPropagation();
        event.preventDefault();
        break;

      case 'Escape':
      case 'Esc': // IE/Edge specific value
        resetSearchInput();
        break;

      case 'Enter':
        if (selectedAutocompleteIndex != null) {
          const item = interactiveAutocompleteItems[selectedAutocompleteIndex];
          handleAutocompleteClick(event, item.props);
          if (item.props.isDisabled) {
            nextIndex = selectedAutocompleteIndex;
          }
          setIsFocused(true);
          event.stopPropagation();
          event.preventDefault();
        }
        break;

      default:
    }
    setSelectedAutocompleteIndex(nextIndex);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event);
    }
    _setValue(event.target.value); // Calling set value directly only for on change event
  };

  const renderChildren = (inputElement: React.ReactElement<TextInputProps>): React.ReactNode => {
    let cssOverride: CSSObject = {zIndex: 2};
    if (showClearButton) {
      cssOverride = {
        ...cssOverride,
        paddingRight: spacing.xl,
      };
    }
    const newTextInputProps: Partial<TextInputProps> = {
      type: 'text',
      id: componentId,
      grow: grow,
      value: value,
      inputRef: inputRef,
      'aria-autocomplete': 'list',
      'aria-activedescendant':
        selectedAutocompleteIndex != null
          ? getOptionId(componentId, selectedAutocompleteIndex)
          : '',
      onChange: handleSearchInputChange,
      onKeyDown: handleKeyboardShortcuts,
      onFocus: handleFocus,
      onBlur: handleBlur,
      css: cssOverride,
      role: 'combobox',
      'aria-owns': `${componentId}-${listBoxIdPart}`,
      'aria-haspopup': true,
      'aria-expanded': showingAutocomplete,
    };
    const cloneElement = (element: React.ReactElement<TextInputProps>, props: TextInputProps) =>
      jsx(element.type, {
        ...element.props,
        ...props,
      });
    return cloneElement(inputElement, {...inputElement.props, ...newTextInputProps});
  };

  return (
    <Container grow={grow} {...elemProps}>
      <InputContainer ref={comboboxRef}>
        {isValidSingleChild(children) && React.Children.map(children, renderChildren)}
        {showClearButton && (
          <ResetButton
            shouldShow={!!value}
            aria-label={clearButtonAriaLabel}
            icon={xSmallIcon}
            variant={clearButtonVariant}
            toggled={undefined}
            onClick={resetSearchInput}
            onBlur={handleBlur}
          />
        )}
        {showingAutocomplete && autocompleteItems && (
          <MenuContainer padding={spacing.zero} depth={depth[1]}>
            <AutocompleteList
              comboboxId={componentId}
              autocompleteItems={autocompleteItems}
              selectedIndex={selectedAutocompleteIndex}
              handleAutocompleteClick={handleAutocompleteClick}
              labelId={formLabelId}
            />
          </MenuContainer>
        )}
      </InputContainer>
      <Status announcementText={announcementText} />
    </Container>
  );
};

export default Combobox;
