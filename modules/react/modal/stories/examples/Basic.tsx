import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

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
            <Box as="p" cs={{marginInline: cssVar(system.space.zero)}}>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software").
            </Box>
          </Modal.Body>
          <Flex cs={{gap: cssVar(system.space.x4), padding: cssVar(system.space.x2)}}>
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
