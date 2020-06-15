/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
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

const TestModal = ({width}: {width: ModalWidth}) => (
  <Modal heading="Delete Item" open={true} handleClose={noop} width={width}>
    <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
    <DeleteButton style={{marginRight: '16px'}}>Delete</DeleteButton>
    <Button variant={Button.Variant.Secondary}>Cancel</Button>
  </Modal>
);

export const ModalSmallWidth = () => <TestModal width={Modal.Width.s} />;

export const ModalMediumWidth = () => <TestModal width={Modal.Width.m} />;
