import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SelectBase, useSelectModel} from '@workday/canvas-kit-react/select';

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
      <SelectBase model={model}>
        <SelectBase.Input id="contact-select" disabled />
        <SelectBase.Popup>
          <SelectBase.Card maxHeight="200px">
            {model.state.items.length > 0 && (
              <SelectBase.List>
                {item => {
                  return (
                    <SelectBase.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                      {item.id}
                    </SelectBase.Item>
                  );
                }}
              </SelectBase.List>
            )}
          </SelectBase.Card>
        </SelectBase.Popup>
      </SelectBase>
      {/* Selected: {model.state.selectedIds[0]} */}
    </FormField>
  );
};
