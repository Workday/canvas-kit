import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const handlePrimaryClick = () => {
    console.log('Primary Action clicked');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary Action clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software").
            </Box>
          </Modal.Body>
          <HStack spacing="s" padding="xxs" marginTop="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handlePrimaryClick}>
              Primary Action
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleSecondaryClick}>Secondary Action</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
