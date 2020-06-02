/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {Button} from '../../../button/react';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../utils/storybook';

import {Modal} from '../';

export default withSnapshotsEnabled({
  title: 'Testing|React/Popups/Modal',
  component: Modal,
});

const noop = () => {}; // eslint-disable-line no-empty-function

export const ModalStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        heading: [
          {value: 'Delete Item', label: ''},
          {
            value:
              "Delete Item named 'Something with a really long title that will hopefully wrap to at least two lines'",
            label: 'Long Heading',
          },
        ],
        padding: [
          {value: Modal.Padding.zero, label: 'Zero Padding'},
          {value: Modal.Padding.s, label: 'Small padding'},
          {value: Modal.Padding.l, label: 'Large padding'},
        ],
        width: [
          {value: Modal.Width.s, label: 'Small Width'},
          {value: Modal.Width.m, label: 'Medium Width'},
        ],
      })}
      columnProps={[{label: '', props: {className: ''}}]}
    >
      {({heading, ...props}) => (
        <Modal
          {...props}
          heading={heading}
          open={true}
          handleClose={noop}
          style={{position: 'relative', width: 'auto', height: 'auto', padding: 32}}
        >
          <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
          <Button style={{marginRight: '16px'}} variant={Button.Variant.Delete}>
            Delete
          </Button>
          <Button variant={Button.Variant.Secondary}>Cancel</Button>
        </Modal>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
