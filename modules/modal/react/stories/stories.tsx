/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {FormField} from '@workday/canvas-kit-react-form-field';
import {TextInput} from '@workday/canvas-kit-react-text-input';
import {Modal, useModal} from '@workday/canvas-kit-react-modal';

import README from '../README.md';
import {controlComponent} from '../../../../utils/storybook';

export default {
  title: 'Components|Popups/Modal/React',
  component: Modal,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export const WithoutHook = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>; // cast to keep buttonRef happy
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <>
      <DeleteButton buttonRef={buttonRef} onClick={openModal}>
        Delete Item
      </DeleteButton>

      <Modal data-testid="TestModal" heading="Delete Item" open={open} handleClose={closeModal}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export const WithoutCloseIcon = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export const CustomFocus = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const ref = React.useRef() as React.RefObject<HTMLInputElement>;

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        firstFocusRef={ref}
        handleClose={undefined}
      >
        <p>Enter name to confirm deletion</p>
        <FormField label="Item name">{controlComponent(<TextInput inputRef={ref} />)}</FormField>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};
