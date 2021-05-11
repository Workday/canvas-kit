import React from 'react';
import {createComponent, mergeProps, useModelContext} from '@workday/canvas-kit-react/common';
import {Button} from '@workday/canvas-kit-react/button';
import {DialogModel} from './useDialogModel';
import {DialogModelContext} from './Dialog';

export interface ActionButtonProps {
  children: React.ReactNode;
  model?: DialogModel;
}

export const ActionButton = createComponent(Button)({
  displayName: 'Dialog.ActionButton',
  Component: ({children, model, ...elemProps}: ActionButtonProps, ref, Element) => {
    const {events} = useModelContext(DialogModelContext, model);
    const props = mergeProps(
      {
        onClick() {
          events.show();
        },
      },
      elemProps
    );
    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  },
});

/**
<Dialog>
  <Dialog.Target as={DeleteButton}>Delete Item</Dialog.Target>
  <Dialog.Overlay />
  <Dialog.Modal padding="m"> // non-modal is <Dialog.Content>
    <Dialog.CloseIconButton />
    <Dialog.Heading>Delete Item</Dialog.Heading>
    <p>Are you sure you want to delete?</p>
    <HStack>
      <Dialog.CloseButton>Cancel</Dialog.CloseButton>
      <Dialog.CloseButton as={DeleteButton} onClick={deleteItem}>
        Delete
      </Dialog.CloseButton>
    </HStack>
  </Dialog.Modal>
</Dialog>
*/
