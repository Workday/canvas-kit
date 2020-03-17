/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '../../../button/react';
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

const AccessibleModalExample = () => {
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

const UseModalExample = () => {
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

const NoCloseModalExample = () => {
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

const CustomFocusModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const buttonRef = React.useRef() as React.RefObject<HTMLButtonElement>;

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        firstFocusRef={buttonRef}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <DeleteButton style={{marginRight: '16px'}} onClick={closeModal}>
          Delete
        </DeleteButton>
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
  .add('Accessible', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <AccessibleModalExample />
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
