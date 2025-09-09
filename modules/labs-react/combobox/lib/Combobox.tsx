import React, {useEffect, useLayoutEffect, useRef, useState, useCallback} from 'react';
import {jsx, keyframes, CSSObject} from '@emotion/react';
import {
  GrowthBehavior,
  useForkRef,
  styled,
  useUniqueId,
  filterOutProps,
} from '@workday/canvas-kit-react/common';
import {space, commonColors, borderRadius} from '@workday/canvas-kit-react/tokens';
import {Card} from '@workday/canvas-kit-react/card';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {TextInputProps} from '@workday/canvas-kit-react/text-input';
import flatten from 'lodash.flatten';
import {AutocompleteList} from './AutocompleteList';
import {Status} from './Status';

/**
 * @deprecated ⚠️ `ComboBoxMenuItemGroup` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export interface ComboBoxMenuItemGroup {
  // A non intractable header that logically separates autocomplete items
  header: React.ReactElement<any>;
  // A group of logically distinct autocomplete items
  items: React.ReactElement<any>[];
}

/**
 * @deprecated ⚠️ `ComboboxProps` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
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
   * The variant of the Combobox clear button. The default is a TertiaryButton
   */
  clearButtonVariant?: TertiaryButtonProps['variant'];
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
  autocompleteItems?: React.ReactElement<any>[] | ComboBoxMenuItemGroup[];
  /**
   * The function called when the Combobox text input changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const fadeInKeyframes = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
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
  animation: `${fadeInKeyframes} 200ms ease-out`,
  maxHeight: 200,
  overflow: 'hidden',
});

const ResetButton = styled(TertiaryButton, {
  shouldForwardProp: filterOutProps(['shouldShow']),
})<{shouldShow: boolean}>(
  {
    position: 'absolute',
    margin: `auto ${space.xxxs}`,
    top: 0,
    bottom: 0,
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

/**
 * @deprecated ⚠️ `listBoxIdPart` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export const listBoxIdPart = `listbox`;
const optionIdPart = `option`;
/**
 * @deprecated ⚠️ `getOptionId` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export const getOptionId = (baseId?: string, index?: number) =>
  `${baseId}-${optionIdPart}-${index}`;

/**
 * @deprecated ⚠️ `getTextFromElement` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export const getTextFromElement = (children?: React.ReactNode) => {
  let text = '';
  React.Children.map(children, child => {
    if (child == null || typeof child === 'boolean') {
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

/**
 * @deprecated ⚠️ `Combobox` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export const Combobox = ({
  autocompleteItems,
  children,
  grow,
  initialValue,
  onChange,
  onFocus,
  onBlur,
  showClearButton,
  clearButtonVariant = undefined,
  clearButtonAriaLabel = `Reset Search Input`,
  labelId,
  getStatusText = buildStatusString,
  id,
  ...elemProps
}: ComboboxProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [value, _setValue] = useState(''); // Don't call _setValue directly instead call setInputValue to make sure onChange fires correctly
  const [showingAutocomplete, setShowingAutocomplete] = useState(false);
  const [selectedAutocompleteIndex, setSelectedAutocompleteIndex] = useState<number | null>(null);
  const [interactiveAutocompleteItems, setInteractiveAutocompleteItems] = useState<
    React.ReactElement<any>[]
  >([]);
  const [announcementText, setAnnouncementText] = useState('');

  // Create a ref to the soon-to-be-created TextInput clone for internal use.
  // Use useForkRef to combine it with the ref already assigned to the original
  // TextInput (if it exists) to create a single callback ref which can be
  // forwarded to the TextInput clone.
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  // We need access to the original TextInput's ref _property_ (not prop) so we
  // can combine it with the internal inputRef using useForkRef. ref isn't
  // listed in the ReactElement interface, but it's there, so we cast children
  // to satisfy TS.
  const elementRef = useForkRef(
    (children as React.ReactElement<TextInputProps> & {ref: React.Ref<HTMLInputElement>}).ref,
    inputRef
  );

  const comboboxRef: React.RefObject<HTMLDivElement> = useRef(null);

  const randomComponentId = useUniqueId();
  const randomLabelId = useUniqueId();

  const componentId = id || randomComponentId;
  const formLabelId = labelId || randomLabelId;

  const [showGroupText, setShowGroupText] = useState(false);

  // We're using LayoutEffect here because of an issue with the Synthetic event system and typing a key
  // after the listbox has been closed. Somehow the key is ignored unless we use `useLayoutEffect`
  useLayoutEffect(() => {
    const shouldShow = interactiveAutocompleteItems.length > 0 && isOpened;
    setShowingAutocomplete(shouldShow);
    if (shouldShow) {
      setAnnouncementText(getStatusText(interactiveAutocompleteItems.length));
    }
  }, [getStatusText, interactiveAutocompleteItems, isOpened]);

  const setInputValue = useCallback(
    (newValue: string) => {
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
          event.initEvent('input', true, true);
        }

        inputDomElement.dispatchEvent(event);
      }
    },
    [inputRef]
  );

  useEffect(() => {
    if (initialValue !== null && initialValue !== undefined) {
      setInputValue(initialValue);
    }
  }, [initialValue, setInputValue]);

  useEffect(() => {
    const getInteractiveAutocompleteItems = (): React.ReactElement<any>[] => {
      if (
        autocompleteItems &&
        autocompleteItems.length &&
        autocompleteItems[0].hasOwnProperty('header')
      ) {
        return flatten((autocompleteItems as ComboBoxMenuItemGroup[]).map(group => group.items));
      }
      return (autocompleteItems as React.ReactElement<any>[]) || [];
    };
    setInteractiveAutocompleteItems(getInteractiveAutocompleteItems());
  }, [autocompleteItems]);

  const handleAutocompleteClick = (
    event: React.SyntheticEvent<Element, Event>,
    menuItemProps: any
  ): void => {
    if (menuItemProps.isDisabled || menuItemProps['aria-disabled']) {
      return;
    }
    setShowingAutocomplete(false);
    setIsOpened(false);
    setInputValue(getTextFromElement(menuItemProps.children));
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event as React.MouseEvent);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    if (!showingAutocomplete) {
      setShowingAutocomplete(true);
    }
  };

  const handleFocus = (event: React.FocusEvent) => {
    setIsOpened(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (comboboxRef.current) {
      const target: EventTarget | null = event.relatedTarget;

      if (target && comboboxRef.current.contains(target as Element)) {
        return;
      }
    }

    setIsOpened(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const resetSearchInput = (): void => {
    setInputValue('');
    focusInput();
  };

  const getGroupIndex = (itemIndex: number | null) => {
    if (
      itemIndex != null &&
      autocompleteItems &&
      autocompleteItems.length &&
      autocompleteItems[0].hasOwnProperty('header')
    ) {
      let count = 0;
      return (autocompleteItems as ComboBoxMenuItemGroup[]).findIndex(groups => {
        count += groups.items.length;
        return count > itemIndex;
      });
    } else {
      return -1;
    }
  };

  const handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    if (event.ctrlKey || event.altKey || event.metaKey || !interactiveAutocompleteItems.length) {
      return;
    }
    const autoCompleteItemCount = interactiveAutocompleteItems.length;
    const firstItem = 0;
    const lastItem = autoCompleteItemCount - 1;
    let nextIndex: number | null = null;

    setIsOpened(true);

    switch (event.key) {
      case 'ArrowUp':
      case 'Up': // IE/Edge specific value
        const upIndex =
          selectedAutocompleteIndex !== null ? selectedAutocompleteIndex - 1 : lastItem;
        nextIndex = upIndex < 0 ? lastItem : upIndex;
        event.stopPropagation();
        event.preventDefault();
        break;

      case 'ArrowDown':
      case 'Down': // IE/Edge specific value
        const downIndex =
          selectedAutocompleteIndex !== null ? selectedAutocompleteIndex + 1 : firstItem;
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
          if (item.props.isDisabled || item.props['aria-disabled']) {
            nextIndex = selectedAutocompleteIndex;
          }
          event.stopPropagation();
          event.preventDefault();
        }
        break;

      default:
    }
    const lastGroupIndex = getGroupIndex(selectedAutocompleteIndex);
    const nextGroupIndex = getGroupIndex(nextIndex);
    setShowGroupText(lastGroupIndex !== nextGroupIndex);
    setSelectedAutocompleteIndex(nextIndex);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event);
    }
    _setValue(event.target.value); // Calling set value directly only for on change event
  };

  const renderChildren = (inputElement: React.ReactElement<TextInputProps>): React.ReactNode => {
    let cssOverride: CSSObject = {':focus': {zIndex: 2}};
    if (showClearButton) {
      cssOverride = {
        ...cssOverride,
        paddingInlineEnd: space.xl,
      };
    }
    const newTextInputProps: Partial<
      TextInputProps &
        React.InputHTMLAttributes<HTMLInputElement> & {ref: React.Ref<HTMLInputElement>}
    > & {css: CSSObject} = {
      type: 'text',
      grow: grow,
      value: value,
      ref: elementRef,
      'aria-autocomplete': 'list',
      'aria-activedescendant':
        selectedAutocompleteIndex !== null
          ? getOptionId(componentId, selectedAutocompleteIndex)
          : undefined,
      onClick: handleClick,
      onChange: handleSearchInputChange,
      onKeyDown: handleKeyboardShortcuts,
      onFocus: handleFocus,
      onBlur: handleBlur,
      css: cssOverride,
      role: 'combobox',
      'aria-owns': showingAutocomplete ? `${componentId}-${listBoxIdPart}` : undefined,
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
            onClick={resetSearchInput}
            onBlur={handleBlur}
            data-part="combobox-reset-button"
            size="small"
            type="button"
          />
        )}
        {showingAutocomplete && autocompleteItems && (
          <MenuContainer padding={space.zero} depth={3}>
            <Card.Body>
              <AutocompleteList
                comboboxId={componentId}
                autocompleteItems={autocompleteItems}
                selectedIndex={selectedAutocompleteIndex}
                handleAutocompleteClick={handleAutocompleteClick}
                labelId={formLabelId}
                showGroupText={showGroupText}
              />
            </Card.Body>
          </MenuContainer>
        )}
      </InputContainer>
      <Status announcementText={announcementText} />
    </Container>
  );
};
