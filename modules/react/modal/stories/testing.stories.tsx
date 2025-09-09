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

import {WithRadioButtons as WithRadioButtonsExample} from './examples/WithRadioButtons';
import {StackedModals as StackedModalsExample} from './examples/StackedModals';
import {WithTooltips as WithTooltipsExample} from './examples/WithTooltips';
import {ModalWithPopup as ModalWithPopupExample} from './examples/ModalWithPopup';
import {IframeTest as IframeTestExample} from './examples/IframeTest';

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
  render: WithRadioButtonsExample,
};

export const StackedModals = {
  render: StackedModalsExample,
};

export const ModalWithPopup = {
  render: ModalWithPopupExample,
};

export const WithTooltips = {
  render: WithTooltipsExample,
};

export const IframeTest = {
  render: IframeTestExample,
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
            <Flex gap="s" padding="xxs">
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
          <Modal.Target style={{display: 'none'}}></Modal.Target>
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
              <Flex gap="s" padding="xxs">
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
