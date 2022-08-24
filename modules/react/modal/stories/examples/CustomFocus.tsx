import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import FormField from '@workday/canvas-kit-react/form-field';
import TextInput from '@workday/canvas-kit-react/text-input';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

export const CustomFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    initialFocusRef: ref,
  });

  const handleAcknowledge = () => {
    console.log('Acknowledged license');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={PrimaryButton}>Acknowledge License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Acknowledge License</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginTop={0} marginBottom="m">
              Enter your initials to acknowledge the license.
            </Box>
            <FormField label="Initials">
              <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
            </FormField>
            <HStack spacing="s">
              <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
                Acknowledge
              </Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
