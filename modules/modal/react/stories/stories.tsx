/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from '@workday/canvas-kit-react-button';
import Modal, {useModal} from '..';
import README from '../README.md';

const DefaultModalExample = () => {
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
      <Modal data-testid="TestModal" heading={'Delete Item'} open={open} handleClose={closeModal}>
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

const UseModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
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

const NoCloseModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
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

const CustomFocusModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const buttonRef = React.useRef() as React.RefObject<HTMLButtonElement>;

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        firstFocusRef={buttonRef}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary} buttonRef={buttonRef}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

storiesOf('Components|Popups/Modal/React', module)
  .addParameters({component: Modal})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <DefaultModalExample />
    </div>
  ))
  .add('With useModal hook', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <UseModalExample />
    </div>
  ))
  .add('Without close icon', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <NoCloseModalExample />
    </div>
  ))
  .add('Custom focus', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <CustomFocusModalExample />
    </div>
  ));
