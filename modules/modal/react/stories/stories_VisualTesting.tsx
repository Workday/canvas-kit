/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, DeleteButton} from '../../../button/react';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Modal, ModalWidth} from '../';

export default withSnapshotsEnabled({
  title: 'Testing|React/Popups/Modal',
  component: Modal,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true,
    },
  },
});

const noop = () => {}; // eslint-disable-line no-empty-function

const TestContent = () => {
  const content = (
    <div
      style={{
        color: 'white',
        zIndex: 1,
        position: 'relative',
      }}
    >
      This should be invisible if the Modal is rendering correctly, because the Modal should use the
      PopupStack which will set a zIndex and place the modal and its overlay _on top_ of the this
      text. If the text renders on top of the overlay, the text will show up
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

const TestModal = ({width}: {width: ModalWidth}) => (
  <>
    <TestContent />
    <Modal heading="Delete Item" open={true} handleClose={noop} width={width}>
      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
      <DeleteButton style={{marginRight: '16px'}}>Delete</DeleteButton>
      <Button variant={Button.Variant.Secondary}>Cancel</Button>
    </Modal>
  </>
);

export const ModalSmallWidth = () => <TestModal width={Modal.Width.s} />;

export const ModalMediumWidth = () => <TestModal width={Modal.Width.m} />;
