import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';
import {useComboboxModel} from '../../../combobox';
import {Combobox} from '@workday/canvas-kit-react/combobox';

export const cities = [
  {id: 'Atlanta (United States)', disabled: false},
  {id: 'Amsterdam (Europe)', disabled: false},
  {id: 'Austin (United States)', disabled: false},
  {id: 'Beaverton (United States)', disabled: false},
  {id: 'Belfast (Europe)', disabled: false},
  {id: 'Berlin (Europe)', disabled: false},
  {id: 'Boston (United States)', disabled: false},
  {id: 'Boulder (United States)', disabled: true},
  {id: 'Chicago (United States)', disabled: false},
  {id: 'Dallas (United States)', disabled: false},
  {id: 'Denver (United States)', disabled: false},
  {id: 'Dublin (Europe)', disabled: false},
  {id: 'Irvine (United States)', disabled: false},
  {id: 'Minneapolis (United States)', disabled: false},
  {id: 'New York (United States)', disabled: false},
  {id: 'Orlando (United States)', disabled: false},
  {id: 'Palo Alto (United States)', disabled: false},
  {id: 'Philadelphia (United States)', disabled: false},
  {id: 'Pleasanton (United States)', disabled: false},
  {id: 'Raleigh (United States)', disabled: false},
  {id: 'San Francisco (United States)', disabled: false},
  {id: 'San Mateo (United States)', disabled: false},
  {id: 'Stockholm (Europe)', disabled: false},
  {id: 'Toronto (Canada)', disabled: false},
  {id: 'Victoria (Canada)', disabled: false},
  {id: 'Vienna (Europe)', disabled: false},
  {id: 'Warsaw (Europe)', disabled: false},
  {id: 'Washington, DC (United States)', disabled: false},
  {id: 'Zurich (Europe)', disabled: false},
];

export const Scrollable = () => {
  return (
    <Box>
      <FormField label="Choose a City">
        <SelectBase items={cities}>
          <SelectBase.Input />
          <SelectBase.Popup>
            <SelectBase.Card maxHeight="200px">
              <SelectBase.List>
                {item => (
                  <SelectBase.Item
                    data-id={item.id}
                    aria-disabled={item.disabled ? item.disabled : undefined}
                    data-text={item.id}
                  >
                    {item.id}
                  </SelectBase.Item>
                )}
              </SelectBase.List>
            </SelectBase.Card>
          </SelectBase.Popup>
        </SelectBase>
        {/* Selected: {model.state.selectedIds[0]} */}
      </FormField>
    </Box>
  );
};
