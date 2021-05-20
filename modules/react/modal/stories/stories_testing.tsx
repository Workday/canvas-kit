/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Modal, useModal} from '@workday/canvas-kit-react/modal';
import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  Popper,
  usePopup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';

export default {
  title: 'Testing/React/Popups/Modal',
  component: Modal,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true,
    },
  },
};

export * from './stories_VisualTesting';

export const AccessibilityTest = () => {
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
        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
      </Modal>
    </>
  );
};

export const StackedModals = () => {
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
        <SecondaryButton onClick={modal1.closeModal}>Cancel</SecondaryButton>
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
          <SecondaryButton onClick={modal2.closeModal}>Cancel</SecondaryButton>
        </Modal>
      </Modal>
    </>
  );
};

export const ModalWithPopup = () => {
  const modal = useModal();
  const popup = usePopup();

  useCloseOnOutsideClick(popup.popperProps.ref, popup.closePopup);
  useCloseOnEscape(popup.popperProps.ref, popup.closePopup);

  return (
    <>
      <DeleteButton {...modal.targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modal.modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} {...popup.targetProps}>
          Yes, Delete
        </DeleteButton>
        <SecondaryButton onClick={modal.closeModal}>Cancel</SecondaryButton>
        <Popper {...popup.popperProps}>
          <Popup heading={'Really Delete Item'} handleClose={popup.closePopup}>
            <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
            <DeleteButton
              style={{marginRight: '16px'}}
              onClick={() => {
                modal.closeModal();
                popup.closePopup();
              }}
            >
              Yes, Really Delete
            </DeleteButton>
            <SecondaryButton onClick={popup.closePopup}>Cancel</SecondaryButton>
          </Popup>
        </Popper>
      </Modal>
    </>
  );
};
