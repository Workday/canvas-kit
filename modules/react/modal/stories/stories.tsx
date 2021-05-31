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
import {controlComponent} from '../../../../utils/storybook';
import Popup, {Popper, useCloseOnOutsideClick, usePopup} from '@workday/canvas-kit-react/popup';

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
  const popup1 = usePopup();
  const popup2 = usePopup();

  useCloseOnOutsideClick(popup1.stackRef, popup1.closePopup);

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <SecondaryButton {...popup1.targetProps}>Open Popup to reach Delete button</SecondaryButton>
        <SecondaryButton {...popup2.targetProps}>Non-hidable Popup</SecondaryButton>
        <Tooltip title={'Not so sure'} type={'muted'}>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </Tooltip>
      </Modal>
      <Popper {...popup1.popperProps}>
        <Popup heading="Really Delete" handleClose={popup1.closePopup}>
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
        </Popup>
      </Popper>
      <Popper {...popup2.popperProps}>
        <Popup heading="Does Not Hide On Click Outside" handleClose={popup2.closePopup}>
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
        </Popup>
      </Popper>
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
        <FormField label="Item name">{controlComponent(<TextInput ref={ref} />)}</FormField>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
      </Modal>
    </>
  );
};
