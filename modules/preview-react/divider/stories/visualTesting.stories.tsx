import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';

import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Preview/Divider',
  component: Divider,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
