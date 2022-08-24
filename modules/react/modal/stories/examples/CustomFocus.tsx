import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import FormField from '@workday/canvas-kit-react/form-field';
import TextInput from '@workday/canvas-kit-react/text-input';
import {Box} from '@workday/canvas-kit-react/layout';

export const CustomFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    initialFocusRef: ref,
  });

  const handleClose = () => {
    console.log('Close modal');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body paddingBottom="zero">
            <Box as="p" marginTop={0}>
              Enter name to confirm deletion
            </Box>
            <FormField label="Item name">
              <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
            </FormField>
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseButton as={DeleteButton} onClick={handleClose}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
