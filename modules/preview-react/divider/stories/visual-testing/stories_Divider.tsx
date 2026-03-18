import React from 'react';

import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {system} from '@workday/canvas-tokens-web';

import {withSnapshotsEnabled} from '../../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/Preview/Divider',
  component: Divider,
});

export const DividerStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
          {
            label: 'Default Space',
            props: {},
          },
          {
            label: 'Custom Space',
            props: {space: system.space.x8},
          },
        ]}
      >
        {props => {
          return (
            <div>
              <h3 style={{margin: 0}}>Quote of the Day</h3>
              <Divider {...props} />
              <p style={{margin: 0}}>
                "It is not our differences that divide us. It is our inability to recognize, accept,
                and celebrate those differences." – Audre Lorde
              </p>
            </div>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
