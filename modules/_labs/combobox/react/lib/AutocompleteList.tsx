import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import {spacing} from '@workday/canvas-kit-react-core';
import {accessibleHide} from '@workday/canvas-kit-react-common';
import {MenuItemProps} from '@workday/canvas-kit-labs-react-menu';
import {ComboBoxMenuItemGroup, getOptionId, listBoxIdPart, getTextFromElement} from './Combobox';
import uuid from 'uuid/v4';

const Autocomplete = styled('ul')({
  padding: 0,
  margin: `${spacing.xxs} 0`,
});

const AccessibleHide = styled('span')(accessibleHide);

interface AutocompleteListProps {
  /**
   * The autocomplete items of the Combobox. This array of menu items is shown under the text input.
   */
  autocompleteItems: React.ReactElement<MenuItemProps>[] | ComboBoxMenuItemGroup[];
  /**
   * Index of the active autocomplete item
   */
  selectedIndex: number | null;
  /**
   * The function called when an autocomplete item is selected
   */
  handleAutocompleteClick: (
    event: React.SyntheticEvent<Element, Event>,
    menuItemProps: MenuItemProps
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

const AutocompleteList = ({
  autocompleteItems,
  comboboxId,
  selectedIndex,
  handleAutocompleteClick,
  labelId,
  showGroupText,
}: AutocompleteListProps) => {
  const [randomComponentId] = useState(() => uuid()); // https://codesandbox.io/s/p2ndq

  const componentId = comboboxId || randomComponentId;

  const listBoxProps = {
    role: 'listbox',
    id: `${componentId}-${listBoxIdPart}`,
    'aria-labelledby': labelId,
  };

  const createListItem = (
    listboxItem: React.ReactElement<MenuItemProps>,
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
        {(autocompleteItems as React.ReactElement<
          MenuItemProps
        >[]).map((listboxItem: React.ReactElement, index: number) =>
          createListItem(listboxItem, index)
        )}
      </Autocomplete>
    );
  }
};

export default AutocompleteList;
