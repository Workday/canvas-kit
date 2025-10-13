import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

const boxStyles = createStyles({
  marginTop: system.space.zero,
  marginBottom: system.space.x6,
});

export const CustomFocus = () => {
  const longDescID = useUniqueId();
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
        <Modal.Card aria-describedby={longDescID}>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Acknowledge License</Modal.Heading>
          <Modal.Body>
            <Box as="p" id={longDescID} cs={boxStyles}>
              Enter your initials to acknowledge the license.
            </Box>
            <FormField cs={{marginBottom: 0}}>
              <FormField.Label>Initials</FormField.Label>
              <FormField.Input
                as={TextInput}
                ref={ref}
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
              />
            </FormField>
          </Modal.Body>
          <Flex cs={flexStyles}>
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
