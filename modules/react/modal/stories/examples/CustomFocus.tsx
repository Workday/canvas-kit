import React from 'react';
import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import FormField from '@workday/canvas-kit-react/form-field';
import TextInput from '@workday/canvas-kit-react/text-input';
import {HStack} from '@workday/canvas-kit-labs-react';
import {useModalModel} from '../../lib/hooks';

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
            <p>Enter name to confirm deletion</p>
            <FormField label="Item name">
              <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
            </FormField>
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
