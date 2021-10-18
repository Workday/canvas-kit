import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {Toast} from '@workday/canvas-kit-labs-react/toast';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Toast',
  component: Toast,
});

export const ToastStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable rowProps={[{label: 'Default', props: {}}]} columnProps={[]}>
        {props => {
          return <Toast>Content</Toast>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
