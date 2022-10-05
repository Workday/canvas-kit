import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Status Indicator',
  component: StatusIndicator,
});

export const StatusIndicatorStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
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
        {({open, ...props}) => {
          return (
            <StatusIndicator initialOpen={open} {...props}>
              <StatusIndicator.Target>Toggle</StatusIndicator.Target>
              <StatusIndicator.Content>Content</StatusIndicator.Content>
            </StatusIndicator>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
