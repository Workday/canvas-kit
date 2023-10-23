import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';

const cities = [
  'Atlanta (United States)',
  'Amsterdam (Europe)',
  'Austin (United States)',
  'Beaverton (United States)',
  'Belfast (Europe)',
  'Berlin (Europe)',
  'Boston (United States)',
  'Boulder (United States)',
  'Chicago (United States)',
  'Dallas (United States)',
  'Denver (United States)',
  'Dublin (Europe)',
  'Irvine (United States)',
  'Minneapolis (United States)',
  'New York (United States)',
  'Orlando (United States)',
  'Palo Alto (United States)',
  'Philadelphia (United States)',
  'Pleasanton (United States)',
  'Raleigh (United States)',
  'San Francisco (United States)',
  'San Mateo (United States)',
  'Stockholm (Europe)',
  'Toronto (Canada)',
  'Victoria (Canada)',
  'Vienna (Europe)',
  'Warsaw (Europe)',
  'Washington, DC (United States)',
  'Zurich (Europe)',
];

export const MenuHeight = () => {
  return (
    <Box>
      <FormField label="Choose a City">
        <Select items={cities}>
          <Select.Input />
          <Select.Popper>
            <Select.Card maxHeight={200}>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
    </Box>
  );
};
