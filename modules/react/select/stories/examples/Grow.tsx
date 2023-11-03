import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Grow = () => {
  const model = useSelectModel({
    items: options,
  });

  return (
    <Flex>
      <Select model={model}>
        <FormField label="Contact" grow>
          <Select.Input />
          <Select.Popper>
            <Select.Card>
              {model.state.items.length > 0 && (
                <Select.List scrollMargin="10px">
                  {item => <Select.Item>{item}</Select.Item>}
                </Select.List>
              )}
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
    </Flex>
  );
};
