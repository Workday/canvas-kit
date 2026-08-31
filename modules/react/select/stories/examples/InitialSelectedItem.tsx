import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {
    id: 'b310c757b2d341f99d40d76f4d563c5b',
    descriptor: 'Arabic',
    languageCode: 'ar',
    label: 'Arabic',
    nativeLanguageName: 'العربية',
  },
  {
    id: 'a675a6b6e22d100017d7fe2a784d1255',
    descriptor: 'Bulgarian (Bulgaria)',
    languageCode: 'bg_BG',
    label: 'Bulgarian (Bulgaria)',
    nativeLanguageName: 'български (Република България)',
  },
  {
    id: 'da594226446c11de98360015c5e6daf6',
    descriptor: 'English (United States)',
    languageCode: 'en_US',
    label: 'English (United States)',
    nativeLanguageName: 'English',
  },
];

export const InitialSelectedItem = () => {
  const [value, setValue] = React.useState('English (United States)');
  const [id, setId] = React.useState('da594226446c11de98360015c5e6daf6');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.id === event.target.value).label);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select
            items={options}
            initialSelectedIds={['da594226446c11de98360015c5e6daf6']}
            getId={item => item.id}
            getTextValue={item => item.label}
          >
            <Select.Input onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};
