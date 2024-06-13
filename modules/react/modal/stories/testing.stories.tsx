import * as React from 'react';
import ReactDOM from 'react-dom';
import {customColorTheme} from '../../../../utils/storybook';
import {ContentDirection, CanvasProvider, useTheme} from '@workday/canvas-kit-react/common';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export default {
  title: 'Testing/Popups/Modal',
  component: Modal,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true,
    },
  },
};

export const AccessibilityTest = {
  render: () => {
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
                <Flex gap="s">
                  <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
                  <Modal.CloseButton>Cancel</Modal.CloseButton>
                </Flex>
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
  },
};

export const WithRadioButtons = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <Modal>
        <Modal.Target>With Radio Buttons</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Select Item</Modal.Heading>
            <Modal.Body>
              <RadioGroup
                name="contact"
                data-testid="radiogroup"
                value={value}
                onChange={value => setValue(String(value))}
              >
                <Radio id="1" value="email" label="E-mail" />
                <Radio id="2" value="phone" label="Phone" />
              </RadioGroup>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    );
  },
};

export const StackedModals = {
  render: () => {
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
              <Flex gap="s">
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
                        <Flex gap="s">
                          <Modal.CloseButton
                            as={DeleteButton}
                            onClick={event => {
                              model.events.hide(event);
                              handleDelete();
                            }}
                          >
                            Yes, Really Delete
                          </Modal.CloseButton>
                          <Modal.CloseButton>Cancel</Modal.CloseButton>
                        </Flex>
                      </Modal.Body>
                    </Modal.Card>
                  </Modal.Overlay>
                </Modal>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </Flex>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    );
  },
};

export const ModalWithPopup = {
  render: () => {
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
                  <Flex gap="s">
                    <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                    <Popup.CloseButton>Cancel</Popup.CloseButton>
                  </Flex>
                  <Popup.Popper>
                    <Popup.Card>
                      <Popup.CloseIcon aria-label="Close" />
                      <Popup.Heading>Really Delete Item</Popup.Heading>
                      <Popup.Body>
                        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                        <Flex gap="s">
                          <Popup.CloseButton
                            as={DeleteButton}
                            onClick={event => {
                              modal.events.hide(event);
                              handleDelete();
                            }}
                          >
                            Yes, Really Delete
                          </Popup.CloseButton>
                          <Popup.CloseButton>Cancel</Popup.CloseButton>
                        </Flex>
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
  },
};

export const WithTooltips = {
  render: () => {
    const modal = useModalModel();
    const popup1 = usePopupModel();
    const popup2 = usePopupModel();
    const closeModal = (event: React.MouseEvent) => modal.events.hide(event);

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
                <Flex gap="s">
                  <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
                  <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
                  <Tooltip title="Not so sure" type="muted">
                    <Popup.CloseButton onClick={closeModal}>Cancel</Popup.CloseButton>
                  </Tooltip>
                </Flex>
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
  },
};

export const IframeTest = {
  render: () => {
    return (
      <Modal>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <Flex gap="s">
                <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </Flex>
              <iframe srcDoc="<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button>iframe button 2</button></body></html>" />
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    );
  },
};

const TestContent = () => {
  const content = (
    <div
      style={{
        color: 'white',
        zIndex: 1,
        position: 'relative',
      }}
    >
      This text should be invisible if the Modal is rendering correctly. It is white text on a white
      background. The Popup Stack should set up the zIndex of the Modal's overlay. If rendered
      incorrectly, the text will be visible on top of the overlay.
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

const TestModal = () => {
  const model = useModalModel({
    initialVisibility: 'visible',
  });
  return (
    <>
      <TestContent />
      <Modal model={model}>
        <Modal.Overlay style={{animation: 'none'}}>
          <Modal.Card style={{animation: 'none'}}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Small Width Modal</Modal.Heading>
            <Modal.Body>
              <Box as="p" marginY="zero">
                This modal should appear on the bottom of the screen for mobile devices. Chromatic
                uses a version of Chrome that makes it appear on the top and is a known issue.
              </Box>
            </Modal.Body>
            <Flex gap="s" padding="xxs" marginTop="xxs">
              <Modal.CloseButton as={PrimaryButton}>Delete</Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </Flex>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};

export const ModalSmallWidth = {
  parameters: {
    chromatic: {
      disable: false,
      viewports: [320, 1200],
    },
  },
  render: () => <TestModal />,
};

export const ModalRTL = {
  parameters: {
    chromatic: {
      disable: false,
    },
  },
  render: () => {
    const theme = useTheme({canvas: {direction: ContentDirection.RTL}});
    const model = useModalModel({
      initialVisibility: 'visible',
    });
    return (
      <CanvasProvider theme={theme}>
        <Modal model={model}>
          <Modal.Overlay style={{animation: 'none'}}>
            <Modal.Card style={{animation: 'none'}} width={300}>
              <Modal.CloseIcon aria-label="" />
              <Modal.Heading>למחוק פריט</Modal.Heading>
              <Modal.Body>האם ברצונך למחוק פריט זה</Modal.Body>
            </Modal.Card>
          </Modal.Overlay>
        </Modal>
      </CanvasProvider>
    );
  },
};

export const CustomThemeModal = {
  parameters: {
    chromatic: {
      disable: false,
    },
  },
  render: () => {
    const model = useModalModel({
      initialVisibility: 'visible',
    });
    return (
      <CanvasProvider theme={{canvas: customColorTheme}}>
        <Modal model={model}>
          <Modal.Overlay style={{animation: 'none'}}>
            <Modal.Card style={{animation: 'none'}}>
              <Modal.CloseIcon aria-label="Close" />
              <Modal.Heading>MIT License</Modal.Heading>
              <Modal.Body>
                <Box as="p" marginY="zero">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of
                  this software and associated documentation files (the "Software").
                </Box>
              </Modal.Body>
              <Flex gap="s" padding="xxs" marginTop="xxs">
                <Modal.CloseButton as={PrimaryButton}>Acknowledge</Modal.CloseButton>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </Flex>
            </Modal.Card>
          </Modal.Overlay>
        </Modal>
      </CanvasProvider>
    );
  },
};
