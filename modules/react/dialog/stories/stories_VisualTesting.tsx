import React from 'react';

import {StaticStates} from '@workday/canvas-kit-preview-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {Dialog} from '@workday/canvas-kit-react/dialog';
import {usePopupModel} from '@workday/canvas-kit-react/popup';

export default withSnapshotsEnabled({
  title: 'Testing/React/Popups/Dialog',
  component: Dialog,
});

export const DialogStates = () => {
  const model = usePopupModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {
              state: {
                visibility: 'hidden',
              },
            },
          },
          {
            label: 'Opened',
            props: {state: {visibility: 'visible'}},
          },
        ]}
      >
        {props => {
          const state = props.state;

          return (
            <Dialog model={{...model, state}}>
              <Dialog.Target>Open Dialog</Dialog.Target>
              <Dialog.Popper>
                <Dialog.Card>
                  <Dialog.CloseIcon aria-label="Close" />
                  <Dialog.Heading>Dialog Heading</Dialog.Heading>
                  <Dialog.Body>
                    <p>Dialog Contents</p>
                    <Dialog.CloseButton>Close</Dialog.CloseButton>
                  </Dialog.Body>
                </Dialog.Card>
              </Dialog.Popper>
            </Dialog>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
