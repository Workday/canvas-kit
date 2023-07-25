import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';
import {useComboboxModel} from '../../../combobox';

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

export const Basic = () => {
  const [value, setValue] = React.useState('medium');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const model = useComboboxModel({
    items: states,
  });
  // console.log(model);
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
                  {item => <SelectBase.Item>{item}</SelectBase.Item>}
                </SelectBase.List>
              )}
            </SelectBase.Card>
          </SelectBase.Popup>
        </SelectBase>
        Selected: {model.state.selectedIds[0]}
        {/* <Select onChange={handleChange} value={value}>
        <SelectOption label="Small" value="small" />
        <SelectOption label="Medium" value="medium" />
        <SelectOption label="Large" value="large" />
      </Select> */}
      </FormField>
    </Box>
  );
};
