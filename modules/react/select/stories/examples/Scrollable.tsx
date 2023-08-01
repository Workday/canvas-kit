import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';
import {useComboboxModel} from '../../../combobox';
import {Combobox} from '@workday/canvas-kit-react/combobox';

export const states = [
  {textValue: 'Atlanta (United States)', id: 'atlanta'},
  {textValue: 'Amsterdam (Europe)', id: 'amsterdam'},
  {textValue: 'Austin (United States)', id: 'austin'},
  {textValue: 'Beaverton (United States)', id: 'beaverton'},
  {textValue: 'Belfast (Europe)', id: 'belfast'},
  {textValue: 'Berlin (Europe)', id: 'berlin'},
  {textValue: 'Boston (United States)', id: 'boston'},
  {textValue: 'Boulder (United States)', id: 'boulder'},
  {textValue: 'Chicago (United States)', id: 'chicago'},
  {textValue: 'Dallas (United States)', id: 'dallas'},
  {textValue: 'Denver (United States)', id: 'denver'},
  {textValue: 'Dublin (Europe)', id: 'dublin'},
  {textValue: 'Irvine (United States)', id: 'irvine'},
  {textValue: 'Minneapolis (United States)', id: 'minneapolis'},
  {textValue: 'New York (United States)', id: 'new-york'},
  {textValue: 'Orlando (United States)', id: 'orlando'},
  {textValue: 'Palo Alto (United States)', id: 'palo-alto'},
  {textValue: 'Philadelphia (United States)', id: 'philadelphia'},
  {textValue: 'Pleasanton (United States)', id: 'pleasanton'},
  {textValue: 'Raleigh (United States)', id: 'raleigh'},
  {textValue: 'San Francisco (United States)', id: 'san-francisco'},
  {textValue: 'San Mateo (United States)', id: 'san-mateo'},
  {textValue: 'Stockholm (Europe)', id: 'stockholm'},
  {
    textValue: 'The Ontologically Anthropocentric Sensory Immersive Simulation (Virtual Reality)',
    id: 'oasis',
  },
  {textValue: 'Toronto (Canada)', id: 'toronto'},
  {textValue: 'Victoria (Canada)', id: 'victoria'},
  {textValue: 'Vienna (Europe)', id: 'vienna'},
  {textValue: 'Warsaw (Europe)', id: 'warsaw'},
  {textValue: 'Washington, DC (United States)', id: 'washington-dc'},
  {textValue: 'Zurich (Europe)', id: 'zurich'},
];

export const Scrollable = () => {
  const model = useComboboxModel({
    items: states,
  });

  return (
    <Box>
      <FormField label="Pizza Size">
        <SelectBase model={model}>
          <SelectBase.Input />
          <SelectBase.Popup>
            <SelectBase.Card maxHeight="200px">
              {model.state.items.length === 0 && <span>No Results Found</span>}
              {model.state.items.length > 0 && (
                <SelectBase.List>
                  {item => <SelectBase.Item>{item.textValue}</SelectBase.Item>}
                </SelectBase.List>
              )}
            </SelectBase.Card>
          </SelectBase.Popup>
        </SelectBase>
        {/* Selected: {model.state.selectedIds[0]} */}
      </FormField>
      {/* <Combobox>
        <Combobox.Input />
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card maxHeight="200px">
            <Combobox.Menu.List>
              <Combobox.Menu.Item>Small</Combobox.Menu.Item>
              <Combobox.Menu.Item>Medium</Combobox.Menu.Item>
              <Combobox.Menu.Item>Large</Combobox.Menu.Item>
            </Combobox.Menu.List>
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </Combobox> */}
    </Box>
  );
};
