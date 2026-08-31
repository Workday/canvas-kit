import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const DisabledOptions = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)', 'Mobile Phone']}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item
                      aria-disabled={
                        item === 'Mobile Phone' || item === 'Fax (disabled)' ? true : undefined
                      }
                    >
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
