import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-preview-react/select';

export const ReturnFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    returnFocusRef: ref,
  });

  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <FormField>
        <FormField.Label>Choose an option</FormField.Label>
        <FormField.Input
          as={Select}
          ref={ref}
          options={['', 'Delete', 'Two']}
          value={value}
          onChange={e => {
            const option = e.currentTarget.value;
            if (option === 'Delete') {
              model.events.show();
              setValue('');
            } else {
              setValue(e.currentTarget.value);
            }
          }}
        ></FormField.Input>
      </FormField>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
