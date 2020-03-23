import React from 'react';
import styled from '@emotion/styled';
import {spacing} from '@workday/canvas-kit-react-core';
import {MenuItemProps} from '@workday/canvas-kit-labs-react-menu';
import {ComboBoxMenuItemGroup, getOptionId, listBoxIdPart} from './Combobox';
import uuid from 'uuid/v4';

const Autocomplete = styled('ul')({
  padding: 0,
  margin: `${spacing.xxs} 0`,
});

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
}

const AutocompleteList = ({
  autocompleteItems,
  comboboxId,
  selectedIndex,
  handleAutocompleteClick,
  labelId,
}: AutocompleteListProps) => {
  const [randomComponentId] = React.useState(() => uuid()); // https://codesandbox.io/s/p2ndq
  const componentId = comboboxId || randomComponentId;

  const listBoxProps = {
    role: 'listbox',
    id: `${componentId}-${listBoxIdPart}`,
    'aria-labelledby': labelId,
  };

  const createListItem = (listboxItem: React.ReactElement<MenuItemProps>, itemIndex: number) => (
    <React.Fragment key={itemIndex}>
      {React.cloneElement(listboxItem, {
        id: getOptionId(componentId, itemIndex),
        role: 'option',
        isFocused: selectedIndex === itemIndex,
        'aria-selected': selectedIndex === itemIndex,
        onClick: (event: React.MouseEvent) => {
          event.preventDefault();
          handleAutocompleteClick(event, listboxItem.props);
        },
      })}
    </React.Fragment>
  );

  if (autocompleteItems && autocompleteItems.length && 'header' in autocompleteItems[0]) {
    let itemIndex = 0;
    return (
      <div {...listBoxProps} tabIndex={0}>
        {(autocompleteItems as ComboBoxMenuItemGroup[]).map(({header, items}, groupIndex) => {
          const groupLabel = `itemGroup-${componentId}-${groupIndex}`;
          return (
            <Autocomplete key={groupLabel} role="group" aria-labelledby={groupLabel}>
              {React.cloneElement(header, {
                id: groupLabel,
                role: 'presentation',
                style: {pointerEvents: `none`},
              })}
              {items.map((listboxItem: React.ReactElement) => {
                const item = createListItem(listboxItem, itemIndex);
                itemIndex++;
                return item;
              })}
            </Autocomplete>
          );
        })}
      </div>
    );
  } else if (autocompleteItems.length) {
    return (
      <Autocomplete {...listBoxProps}>
        {(autocompleteItems as React.ReactElement<MenuItemProps>[]).map(
          (listboxItem: React.ReactElement, index: number) => createListItem(listboxItem, index)
        )}
      </Autocomplete>
    );
  } else {
    return null;
  }
};

export default AutocompleteList;
