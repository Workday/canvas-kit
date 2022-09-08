import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import FormField from '@workday/canvas-kit-react/form-field';
import TextInput from '@workday/canvas-kit-react/text-input';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

export const CustomFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    initialFocusRef: ref,
  });

  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginTop={0} marginBottom="m">
              Enter name to confirm deletion
            </Box>
            <FormField label="Item name" style={{marginBottom: 0}}>
              <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
            </FormField>
          </Modal.Body>
          <HStack spacing="s" padding="xxs">
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
