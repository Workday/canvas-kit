import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  SegmentedControl,
  useSegmentedControlModel,
} from '@workday/canvas-kit-preview-react/segmented-control';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Segmented Control',
  component: SegmentedControl,
});

export const SegmentedControlStates = () => {
  const model = useSegmentedControlModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {props => {
          const state = {open: props.open};

          return <SegmentedControl model={{...model, state}}> </SegmentedControl>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
