/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import withReadme from 'storybook-readme/with-readme';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Modal, useModal} from '@workday/canvas-kit-react/modal';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {HStack} from '@workday/canvas-kit-labs-react';

import README from '../README.md';

export default {
  title: 'Components/Popups/Modal/React',
  component: Modal,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <HStack spacing="s">
          <DeleteButton onClick={closeModal}>Delete</DeleteButton>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </HStack>
      </Modal>
    </>
  );
};

export const WithoutHook = () => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <>
      <DeleteButton ref={ref} onClick={openModal}>
        Delete Item
      </DeleteButton>

      <Modal heading="Delete Item" open={open} handleClose={closeModal} targetRef={ref}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <HStack spacing="s">
          <DeleteButton onClick={closeModal}>Delete</DeleteButton>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </HStack>
      </Modal>
    </>
  );
};

export const WithRadioButtons = () => {
  const {targetProps, modalProps} = useModal();
  const [value, setValue] = React.useState('');

  return (
    <>
      <SecondaryButton {...targetProps}>With Radio Buttons</SecondaryButton>
      <Modal heading="Select Item" {...modalProps}>
        <RadioGroup
          name="contact"
          data-testid="radiogroup"
          value={value}
          onChange={value => setValue(String(value))}
        >
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
        </RadioGroup>
      </Modal>
    </>
  );
};

export const WithoutCloseIcon = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modalProps} handleClose={undefined}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <HStack spacing="s">
          <DeleteButton onClick={closeModal}>Delete</DeleteButton>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </HStack>
      </Modal>
    </>
  );
};

export const CustomFocus = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modalProps} firstFocusRef={ref} handleClose={undefined}>
        <p>Enter name to confirm deletion</p>
        <FormField label="Item name">
          <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
        </FormField>
        <HStack spacing="s">
          <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
            Delete
          </DeleteButton>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </HStack>
      </Modal>
    </>
  );
};
