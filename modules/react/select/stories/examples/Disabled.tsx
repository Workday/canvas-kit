import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';

export const options = [
  {id: 'E-mail'},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone', disabled: true},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const Disabled = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <FormField label="Contact">
      <Select model={model}>
        <Select.Input id="contact-select" disabled />
        <Select.Popper>
          <Select.Card maxHeight="200px">
            {model.state.items.length > 0 && (
              <Select.List>
                {item => {
                  return (
                    <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                      {item.id}
                    </Select.Item>
                  );
                }}
              </Select.List>
            )}
          </Select.Card>
        </Select.Popper>
      </Select>
      {/* Selected: {model.state.selectedIds[0]} */}
    </FormField>
  );
};
