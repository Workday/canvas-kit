/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import withReadme from 'storybook-readme/with-readme';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Modal, useModal} from '@workday/canvas-kit-react/modal';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

import README from '../README.md';

import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';

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
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
      </Modal>
    </>
  );
};

export const WithTooltips = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Popup.Target model={popup1}>Open Popup to reach Delete button</Popup.Target>
        <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
        <Tooltip title={'Not so sure'} type={'muted'}>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </Tooltip>
      </Modal>
      <Popup.Popper model={popup1}>
        <Popup.Card model={popup1}>
          <Popup.CloseIcon model={popup1} aria-label="Close" />
          <Popup.Heading model={popup1}>Really Delete</Popup.Heading>
          <Popup.Body>
            Pressing 'Delete' will close the modal
            <Tooltip
              placement="left"
              title={'Really, Really, Really, Really, Really sure'}
              type={'muted'}
            >
              <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
                Delete
              </DeleteButton>
            </Tooltip>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
      <Popup.Popper model={popup2}>
        <Popup.Card model={popup2}>
          <Popup.CloseIcon model={popup2} aria-label="Close" />
          <Popup.Heading model={popup2}>Does Not Hide On Click Outside</Popup.Heading>
          <Popup.Body>
            Pressing 'Delete' will close the modal
            <Tooltip
              placement="left"
              title={'Really, Really, Really, Really, Really sure'}
              type={'muted'}
            >
              <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
                Delete
              </DeleteButton>
            </Tooltip>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
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

      <Modal data-testid="TestModal" heading="Delete Item" open={open} handleClose={closeModal}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
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
      <Modal data-testid="TestModal" heading="Select Item" {...modalProps}>
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
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
      </Modal>
    </>
  );
};

export const CustomFocus = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const ref = React.useRef() as React.RefObject<HTMLInputElement>;
  const [value, setValue] = React.useState('');

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
        <FormField label="Item name">
          <TextInput ref={ref} value={value} onChange={e => setValue(e.currentTarget.value)} />
        </FormField>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
      </Modal>
    </>
  );
};
