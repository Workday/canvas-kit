/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {HStack, VStack} from '@workday/canvas-kit-labs-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import Radio, {RadioGroup} from '@workday/canvas-kit-react/radio';

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
  return (
    <>
      <Modal>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <HStack spacing="s">
                <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </HStack>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
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
        <iframe title="iframe test" src="/" width="300" height="300"></iframe>
      </div>
    </>
  );
};

export const WithRadioButtons = () => {
  const [value, setValue] = React.useState('');

  return (
    <Modal>
      <Modal.Target>With Radio Buttons</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Select Item</Modal.Heading>
          <Modal.Body>
            <VStack spacing="s">
              <RadioGroup
                name="contact"
                data-testid="radiogroup"
                value={value}
                onChange={value => setValue(String(value))}
              >
                <Radio id="1" value="email" label="E-mail" />
                <Radio id="2" value="phone" label="Phone" />
              </RadioGroup>
            </VStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

export const StackedModals = () => {
  const model = useModalModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <HStack spacing="s">
              <Modal>
                <Modal.Target as={DeleteButton}>Yes, Delete</Modal.Target>
                <Modal.Overlay>
                  <Modal.Card>
                    <Modal.CloseIcon aria-label="Close" />
                    <Modal.Heading>Really Delete Item</Modal.Heading>
                    <Modal.Body>
                      <p>
                        Are you <em>really</em> sure you want to delete the item?
                      </p>
                      <HStack spacing="s">
                        <Modal.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            model.events.hide({event});
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Modal.CloseButton>
                        <Modal.CloseButton>Cancel</Modal.CloseButton>
                      </HStack>
                    </Modal.Body>
                  </Modal.Card>
                </Modal.Overlay>
              </Modal>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

export const ModalWithPopup = () => {
  const modal = useModalModel();
  const popup = usePopupModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  useCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
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
                          onClick={event => {
                            modal.events.hide({event});
                            handleDelete();
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
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};

export const WithTooltips = () => {
  const modal = useModalModel();
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();
  const closeModal = (event: React.MouseEvent) => modal.events.hide({event});

  useCloseOnOutsideClick(popup1);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target>Open Modal</Modal.Target>
        <Modal.Overlay>
          <Modal.Card width={'auto'}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Open Modal</Modal.Heading>
            <Modal.Body>
              <p>Open a hidable and non-hidable popups</p>
              <HStack spacing="s">
                <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
                <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
                <Tooltip title="Not so sure" type="muted">
                  <Popup.CloseButton onClick={closeModal}>Cancel</Popup.CloseButton>
                </Tooltip>
              </HStack>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
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
