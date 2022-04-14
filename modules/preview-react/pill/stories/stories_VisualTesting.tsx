import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Pill, usePillModel} from '@workday/canvas-kit-preview-react/pill';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Pill',
  component: Pill,
});

export const PillStates = () => {
  const model = usePillModel();

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
          const state = {onClick: props.onClick};

          return <Pill model={{...model, state}}>Pill Label</Pill>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
