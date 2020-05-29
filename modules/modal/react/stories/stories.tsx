/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import withReadme from 'storybook-readme/with-readme';

import {Modal, useModal} from '@workday/canvas-kit-react-modal';

import {Button, DeleteButton} from '../../../button/react';
import {FormField} from '../../../form-field/react';
import {TextInput} from '../../../text-input/react';

import README from '../README.md';
import {controlComponent, testingOnly} from '../../../../utils/storybook';

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

export const AccessibilityTest = () => {
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
      <p>The content below should be hidden from assistive technology while the modal is open.</p>
      <p>
        <a href="#">Link</a>
      </p>

      <button type="button">Button</button>
      <p tabIndex={0}>Focusable div</p>

      <div>
        <label htmlFor="text">Text input</label>
        <input type="text" id="text" />
      </div>

      <div>
        <label htmlFor="radio">Radio</label> <input type="radio" id="radio" />
      </div>

      <div>
        <label htmlFor="check">Checkbox</label>
        <input type="checkbox" />
      </div>

      <div>
        <label htmlFor="textarea">Text area</label>
        <textarea id="textarea"></textarea>
      </div>

      <div>
        <label htmlFor="pet-select">Choose a pet:</label>
        <select name="pets" id="pet-select">
          <option value="">Please choose an option</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>

      <div>
        <iframe title="iframe test" src="https://workday.com/" width="300" height="300"></iframe>
      </div>
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

export const StackModals = () => {
  const modal1 = useModal();
  const modal2 = useModal();

  return (
    <>
      <DeleteButton {...modal1.targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modal1.modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} {...modal2.targetProps}>
          Yes, Delete
        </DeleteButton>
        <Button onClick={modal1.closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
        <Modal heading={'Really Delete Item'} {...modal2.modalProps}>
          <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
          <DeleteButton
            style={{marginRight: '16px'}}
            onClick={() => {
              modal1.closeModal();
              modal2.closeModal();
            }}
          >
            Yes, Really Delete
          </DeleteButton>
          <Button onClick={modal2.closeModal} variant={Button.Variant.Secondary}>
            Cancel
          </Button>
        </Modal>
      </Modal>
    </>
  );
};

testingOnly(StackModals);
