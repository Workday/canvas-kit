import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {Select} from '@workday/canvas-kit-react/select';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const FAVORITE_COLOR_OPTIONS = ['Blue', 'Yellow'];

const formStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.lg,
});

export const FormModal = () => {
  const model = useModalModel();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent a page reload

    // do form validation here

    console.log('form data', {
      first: (event.currentTarget.elements.namedItem('first') as HTMLInputElement).value,
      last: (event.currentTarget.elements.namedItem('last') as HTMLInputElement).value,
      favoriteColor: (event.currentTarget.elements.namedItem('favoriteColor') as HTMLInputElement)
        .value,
    });

    // if it looks good, submit to the server and close the modal
    model.events.hide();
  };

  return (
    <Modal model={model}>
      <Modal.Target icon={plusIcon}>Create New User</Modal.Target>
      <Modal.Overlay>
        <Modal.Card as="form" onSubmit={onSubmit}>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>New User</Modal.Heading>
          <Modal.Body cs={formStyles}>
            <FormField grow>
              <FormField.Label>First Name</FormField.Label>
              <FormField.Input as={TextInput} name="first" />
            </FormField>
            <FormField grow>
              <FormField.Label>Last Name</FormField.Label>
              <FormField.Input as={TextInput} name="last" />
            </FormField>
            <FormField grow>
              <FormField.Label>Favorite Color</FormField.Label>
              <FormField.Field>
                <Select items={FAVORITE_COLOR_OPTIONS}>
                  <FormField.Input as={Select.Input} name="favoriteColor" />
                  <Select.Popper>
                    <Select.Card>
                      <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
                    </Select.Card>
                  </Select.Popper>
                </Select>
              </FormField.Field>
            </FormField>
          </Modal.Body>
          <Modal.ButtonGroup>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Modal.ButtonGroup>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
