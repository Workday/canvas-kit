import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';

export const ReturnFocus = () => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    returnFocusRef: ref,
  });

  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <Select items={['', 'Delete', 'Two']}>
        <FormField>
          <FormField.Label>Choose an option</FormField.Label>
          <FormField.Input
            as={Select.Input}
            ref={ref}
            onChange={e => {
              const option = e.currentTarget.value;
              if (option === 'Delete') {
                model.events.show();
                setValue('');
              } else {
                setValue(e.currentTarget.value);
              }
            }}
          />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
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
