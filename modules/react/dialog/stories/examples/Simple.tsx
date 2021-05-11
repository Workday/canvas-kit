import React from 'react';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {DeleteButton} from '@workday/canvas-kit-react/button';

export const Simple = () => {
  return (
    <Dialog>
      <Dialog.ActionButton as={DeleteButton}>Delete Item</Dialog.ActionButton>
      <Dialog.Content>
        <Dialog.Heading>Heading</Dialog.Heading>
        Content
      </Dialog.Content>
    </Dialog>
  );
};
