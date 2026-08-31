import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {BodyText} from '@workday/canvas-kit-react/text';

const options = [
  {text: 'E-mail', id: 'email-1'},
  {text: 'Phone', id: 'phone-2'},
  {text: 'Fax', id: 'fax-3'},
  {text: 'Mail', id: 'mail-4'},
  {text: 'Mobile Phone', id: 'mobile-phone-5'},
];

export const HoistedModel = () => {
  const model = useSelectModel({
    items: options,
    initialSelectedIds: ['fax-3'],
  });

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <BodyText size="small">Selected Value: {model.state.selectedIds[0]}</BodyText>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'phone-2'});
        }}
      >
        Select Phone Item
      </SecondaryButton>
    </>
  );
};
