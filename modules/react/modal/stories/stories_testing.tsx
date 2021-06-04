/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Modal, useModal} from '@workday/canvas-kit-react/modal';
import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

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
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
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
      <Modal data-testid="TestModal" heading="Delete Item" {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <HStack spacing="s">
          <DeleteButton onClick={closeModal}>Delete</DeleteButton>
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </HStack>
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
      <Modal heading="Delete Item" {...modal1.modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <HStack spacing="s">
          <DeleteButton {...modal2.targetProps}>Yes, Delete</DeleteButton>
          <SecondaryButton onClick={modal1.closeModal}>Cancel</SecondaryButton>
        </HStack>
        <Modal heading="Really Delete Item" {...modal2.modalProps}>
          <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
          <HStack spacing="s">
            <DeleteButton
              onClick={() => {
                modal1.closeModal();
                modal2.closeModal();
              }}
            >
              Yes, Really Delete
            </DeleteButton>
            <SecondaryButton onClick={modal2.closeModal}>Cancel</SecondaryButton>
          </HStack>
        </Modal>
      </Modal>
    </>
  );
};

export const ModalWithPopup = () => {
  const modal = useModal();
  const popup = usePopupModel();

  useCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  return (
    <>
      <DeleteButton {...modal.targetProps}>Delete Item</DeleteButton>
      <Modal heading="Delete Item" {...modal.modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Popup model={popup}>
          <HStack spacing="s">
            <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </HStack>
          <Popup.Popper>
            <Popup.Card>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading>Really Delete Item</Popup.Heading>
              <Popup.Body>
                <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                <HStack spacing="s">
                  <Popup.CloseButton
                    as={DeleteButton}
                    onClick={() => {
                      modal.closeModal();
                    }}
                  >
                    Yes, Really Delete
                  </Popup.CloseButton>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                </HStack>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
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
      <SecondaryButton {...targetProps}>Open Modal</SecondaryButton>
      <Modal heading="Open Modal" {...modalProps} width={Modal.Width.m}>
        <p>Open a hidable and non-hidable popups</p>
        <HStack spacing="s">
          <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
          <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
          <Tooltip title="Not so sure" type="muted">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
          </Tooltip>
        </HStack>
      </Modal>
      <Popup model={popup1}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Non-hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
