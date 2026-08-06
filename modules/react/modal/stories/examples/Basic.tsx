import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {Modal} from '@workday/canvas-kit-react/modal';

export const Basic = () => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body>
            <Box as="p" cs={{marginBlock: '0'}}>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software").
            </Box>
          </Modal.Body>
          <Modal.ButtonGroup>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
          </Modal.ButtonGroup>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
