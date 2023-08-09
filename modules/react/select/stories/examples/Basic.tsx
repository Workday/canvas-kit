import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {useComboboxModel} from '../../../combobox';
import {Combobox} from '@workday/canvas-kit-react/combobox';

// export const states = [
//   {text: 'Atlanta (United States)', id: 'atlanta'},
//   {text: 'Amsterdam (Europe)', id: 'amsterdam'},
//   {text: 'Austin (United States)', id: 'austin'},
//   {text: 'Beaverton (United States)', id: 'beaverton'},
//   {text: 'Belfast (Europe)', id: 'belfast'},
//   {text: 'Berlin (Europe)', id: 'berlin'},
//   {text: 'Boston (United States)', id: 'boston'},
//   {text: 'Boulder (United States)', id: 'boulder'},
//   {text: 'Chicago (United States)', id: 'chicago'},
//   {text: 'Dallas (United States)', id: 'dallas'},
//   {text: 'Denver (United States)', id: 'denver'},
//   {text: 'Dublin (Europe)', id: 'dublin'},
//   {text: 'Irvine (United States)', id: 'irvine'},
//   {text: 'Minneapolis (United States)', id: 'minneapolis'},
//   {text: 'New York (United States)', id: 'new-york'},
//   {text: 'Orlando (United States)', id: 'orlando'},
//   {text: 'Palo Alto (United States)', id: 'palo-alto'},
//   {text: 'Philadelphia (United States)', id: 'philadelphia'},
//   {text: 'Pleasanton (United States)', id: 'pleasanton'},
//   {text: 'Raleigh (United States)', id: 'raleigh'},
//   {text: 'San Francisco (United States)', id: 'san-francisco'},
//   {text: 'San Mateo (United States)', id: 'san-mateo'},
//   {text: 'Stockholm (Europe)', id: 'stockholm'},
//   {
//     text: 'The Ontologically Anthropocentric Sensory Immersive Simulation (Virtual Reality)',
//     id: 'oasis',
//   },
//   {text: 'Toronto (Canada)', id: 'toronto'},
//   {text: 'Victoria (Canada)', id: 'victoria'},
//   {text: 'Vienna (Europe)', id: 'vienna'},
//   {text: 'Warsaw (Europe)', id: 'warsaw'},
//   {text: 'Washington, DC (United States)', id: 'washington-dc'},
//   {text: 'Zurich (Europe)', id: 'zurich'},
// ];

export interface Item<T> {
  index: number;
  id: string;
  value: T;
  /**
   * Used by components that allow jumping to an item based on typing
   */
  text?: string;
  disabled: boolean;
}

export const options = [
  {text: 'E-mail', id: 'E-mail', disabled: false},
  {text: 'Phone', id: 'Phone', disabled: false},
  {text: 'Fax (disabled)', id: 'Fax (disabled)', disabled: true},
  {text: 'Mail', id: 'Mail', disabled: false},
  {text: 'Mobile Phone', id: 'Mobile Phone', disabled: false},
  {
    text: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
];
const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const Basic = () => {
  const model = useComboboxModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <FormField orientation="vertical" hasError>
      <FormField.Label htmlFor="contact-select">Contact</FormField.Label>
      <SelectBase model={model}>
        <SelectBase.Input
          id="contact-select"
          value={
            model.state.selectedIds.length > 0 ? model.state.selectedIds[0] : model.state.value
          }
        />
        <SelectBase.Popup>
          <SelectBase.Card maxHeight="200px">
            {model.state.items.length > 0 && (
              <SelectBase.List>
                {(item: Item<T>) => {
                  return (
                    <SelectBase.Item
                      aria-disabled={item.disabled ? item.disabled : undefined}
                      data-id={item.id}
                    >
                      {item.text}
                    </SelectBase.Item>
                  );
                }}
              </SelectBase.List>
            )}
          </SelectBase.Card>
        </SelectBase.Popup>
      </SelectBase>
    </FormField>
  );
};
