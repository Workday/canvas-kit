import React from 'react';

import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Select} from '@workday/canvas-kit-react/select';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const FAVORITE_COLOR_OPTIONS = ['Blue', 'Yellow'];

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
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
          <Modal.Body>
            <FormField>
              <FormField.Label>First Name</FormField.Label>
              <FormField.Input as={TextInput} name="first" />
            </FormField>
            <FormField>
              <FormField.Label>Last Name</FormField.Label>
              <FormField.Input as={TextInput} name="last" />
            </FormField>
            <FormField>
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
          <Flex cs={flexStyles}>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
