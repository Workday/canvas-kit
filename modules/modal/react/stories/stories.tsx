/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {beta_Button as Button} from '@workday/canvas-kit-react-button';
import Modal, {useModal} from '..';
import README from '../README.md';

const UseModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal testId="TestModal" heading={'Delete Item'} closeOnEscape={true} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

const ModalExample = () => {
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
      <Button variant={Button.Variant.Delete} buttonRef={buttonRef} onClick={openModal}>
        Delete Item
      </Button>
      <Modal
        testId="TestModal"
        heading={'Delete Item'}
        closeOnEscape={true}
        open={open}
        handleClose={closeModal}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

const ModalNoXExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal
        testId="TestModal"
        heading={'Delete Item'}
        closeOnEscape={true}
        {...modalProps}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

storiesOf('Modal', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <ModalExample />
    </div>
  ))
  .add('UseModal', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <UseModalExample />
    </div>
  ))
  .add('ModalNoX', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <ModalNoXExample />
    </div>
  ));
