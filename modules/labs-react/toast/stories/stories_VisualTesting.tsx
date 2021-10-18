import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Toast, useToastModel} from '@workday/canvas-kit-labs-react/toast';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Toast',
  component: Toast,
});

export const ToastStates = () => {
  const model = useToastModel({
    onClose: () => console.log('on close...'),
  });

  return (
    <StaticStates>
      <ComponentStatesTable rowProps={[{label: 'Default', props: {}}]} columnProps={[]}>
        {props => {
          const state = {};

          return (
            <Toast model={{...model, state}} onClose={() => console.log('on close...')}>
              <Toast.Content>Content</Toast.Content>
            </Toast>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
