/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, DeleteButton} from '../../button';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Modal, ModalWidth} from '../';

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
      This text should be invisible if the Modal is rendering correctly. It is white text on a white
      background. The Popup Stack should set up the zIndex of the Modal's overlay. If rendered
      incorrectly, the text will be visible on top of the overlay.
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

export const ModalSmallWidth = withSnapshotsEnabled(() => <TestModal width={Modal.Width.s} />);

export const ModalMediumWidth = withSnapshotsEnabled(() => <TestModal width={Modal.Width.m} />);
