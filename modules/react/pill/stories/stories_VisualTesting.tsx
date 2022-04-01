import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Pill} from '@workday/canvas-kit-react/pill';

export default withSnapshotsEnabled({
  title: 'Testing/React/Indicators/Pill',
  component: Pill,
});

export const PillStates = () => {
  // const model = usePillModel();

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

          return (
            <Pill>
              {/* <Pill.Target>Toggle</Pill.Target> */}
              Content
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
