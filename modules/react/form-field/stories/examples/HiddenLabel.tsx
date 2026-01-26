import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {searchIcon} from '@workday/canvas-system-icons-web';

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label isHidden>Search</FormField.Label>
        <FormField.Field>
          <FormField.Input as={InputGroup}>
            <InputGroup.InnerStart pointerEvents="none">
              <SystemIcon icon={searchIcon} size="small" />
            </InputGroup.InnerStart>
            <InputGroup.Input as={TextInput} onChange={handleChange} />
          </FormField.Input>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
