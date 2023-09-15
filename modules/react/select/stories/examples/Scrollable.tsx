import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';

export const cities = [
  {id: 'Atlanta (United States)', disabled: false},
  {id: 'Amsterdam (Europe)', disabled: false},
  {id: 'Austin (United States)', disabled: false},
  {id: 'Beaverton (United States)', disabled: false},
  {id: 'Belfast (Europe)', disabled: false},
  {id: 'Berlin (Europe)', disabled: false},
  {id: 'Boston (United States)', disabled: false},
  {id: 'Boulder (United States)', disabled: false},
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
      <FormField label="Choose a City" inputId="scrollable-select">
        <Select
          items={cities}
          nonInteractiveIds={cities.filter(item => item.disabled === true).map(item => item.id)}
        >
          <Select.Input id="scrollable-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => (
                  <Select.Item
                    aria-disabled={item.disabled ? item.disabled : undefined}
                    data-id={item.id}
                    data-text={item.id}
                  >
                    {item.id}
                  </Select.Item>
                )}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
    </Box>
  );
};
