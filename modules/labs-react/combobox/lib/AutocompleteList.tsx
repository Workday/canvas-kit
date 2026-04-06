import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import {space} from '@workday/canvas-kit-react/tokens';
import {accessibleHide, generateUniqueId} from '@workday/canvas-kit-react/common';
import {ComboBoxMenuItemGroup, getOptionId, listBoxIdPart, getTextFromElement} from './Combobox';

const Autocomplete = styled('ul')({
  margin: 0,
  maxHeight: 200,
  boxSizing: 'border-box',
  overflowY: 'auto',
  padding: `${space.xxs} 0`,
});

const AccessibleHide = styled('span')(accessibleHide);

interface AutocompleteListProps {
  /**
   * The autocomplete items of the Combobox. This array of menu items is shown under the text input.
   */
  autocompleteItems: React.ReactElement<any>[] | ComboBoxMenuItemGroup[];
  /**
   * Index of the active autocomplete item
   */
  selectedIndex: number | null;
  /**
   * The function called when an autocomplete item is selected
   */
  handleAutocompleteClick: (
    event: React.SyntheticEvent<Element, Event>,
    menuItemProps: any
  ) => void;
  /**
   * The id of the form field.
   */
  labelId: string;
  /**
   * The id of the combobox.
   */
  comboboxId: string;

  /**
   * True when group changes via keyboard control
   */
  showGroupText: boolean;
}

/**
 * @deprecated ⚠️ `AutocompleteList` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export const AutocompleteList = ({
  autocompleteItems,
  comboboxId,
  selectedIndex,
  handleAutocompleteClick,
  labelId,
  showGroupText,
}: AutocompleteListProps) => {
  const [randomComponentId] = useState(generateUniqueId); // https://codesandbox.io/s/p2ndq

  const componentId = comboboxId || randomComponentId;

  const listBoxProps = {
    role: 'listbox',
    id: `${componentId}-${listBoxIdPart}`,
    'aria-labelledby': labelId,
  };

  const createListItem = (
    listboxItem: React.ReactElement<any>,
    itemIndex: number,
    groupMessage?: string
  ) => {
    const children = [
      <AccessibleHide key={`group-message-${itemIndex}`}>{groupMessage}</AccessibleHide>,
      ...React.Children.toArray(listboxItem.props.children),
    ];

    return (
      <Fragment key={itemIndex}>
        {React.cloneElement(listboxItem, {
          children: children,
          id: getOptionId(componentId, itemIndex),
          role: 'option',
          isFocused: selectedIndex === itemIndex,
          'aria-selected': selectedIndex === itemIndex ? true : undefined,
          onMouseDown: (event: React.MouseEvent) => {
            // prevent focus from shifting away from the the combobox
            event.preventDefault();
          },
          onClick: (event: React.MouseEvent) => {
            event.preventDefault();
            handleAutocompleteClick(event, listboxItem.props);
          },
        })}
      </Fragment>
    );
  };

  if (!autocompleteItems.length) {
    return null;
  } else if (autocompleteItems[0].hasOwnProperty('header')) {
    let itemIndex = 0;
    return (
      <Autocomplete {...listBoxProps}>
        {(autocompleteItems as ComboBoxMenuItemGroup[]).map(({header, items}, groupIndex) => {
          const groupLabel = `itemGroup-${componentId}-${groupIndex}`;
          return (
            <Fragment key={groupLabel}>
              {React.cloneElement(header, {
                role: 'presentation',
                style: {pointerEvents: `none`},
              })}
              {items.map((listboxItem: React.ReactElement) => {
                const headerName = getTextFromElement(header);
                const groupMessage = showGroupText
                  ? `Entering group ${headerName}, with ${items.length} options.`
                  : undefined;
                const item = createListItem(listboxItem, itemIndex, groupMessage);
                itemIndex++;
                return item;
              })}
            </Fragment>
          );
        })}
      </Autocomplete>
    );
  } else {
    return (
      <Autocomplete {...listBoxProps}>
        {(autocompleteItems as React.ReactElement<any>[]).map(
          (listboxItem: React.ReactElement, index: number) => createListItem(listboxItem, index)
        )}
      </Autocomplete>
    );
  }
};
