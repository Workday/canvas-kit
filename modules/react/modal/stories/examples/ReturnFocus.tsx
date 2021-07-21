import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
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
      <FormField label="Choose an option">
        <Select
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
        ></Select>
      </FormField>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <HStack spacing="s">
              <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
