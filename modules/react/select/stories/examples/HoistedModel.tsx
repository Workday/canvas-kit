import React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {BodyText} from '@workday/canvas-kit-react/text';

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const HoistedModel = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: ['Fax (disabled)'],
  });

  return (
    <>
      <Select model={model}>
        <FormField label="Contact">
          <Select.Input />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => (
                  <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                    {item}
                  </Select.Item>
                )}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <BodyText size="small">Selected Value: {model.state.selectedIds[0]}</BodyText>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'Phone'});
        }}
      >
        Select Phone Item
      </SecondaryButton>
    </>
  );
};
