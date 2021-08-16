/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Dialog} from '@workday/canvas-kit-react/dialog';
import README from '../README.md';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react';

export default {
  title: 'Components/Popups/Dialog/React',
  decorators: [withReadme(README)],
  component: Dialog,
};

export const Basic = () => {
  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Dialog>
      <Dialog.Target as={DeleteButton}>Delete Item</Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon aria-label="Close" />
          <Dialog.Heading>Delete Item</Dialog.Heading>
          <Dialog.Body>
            <p>Are you sure you want to delete the item?</p>
            <HStack spacing="s">
              <Dialog.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Dialog.CloseButton>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
            </HStack>
          </Dialog.Body>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};
