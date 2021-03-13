/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../utils/storybook';

import {StatusIndicator, StatusIndicatorProps} from '../';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export default withSnapshotsEnabled({
  title: 'Testing/React/Indicators/Status Indicator',
  component: StatusIndicator,
});

export const StatusIndicatorStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        emphasis: [
          {value: StatusIndicator.Emphasis.Low, label: 'Low Emphasis'},
          {value: StatusIndicator.Emphasis.High, label: 'High Emphasis'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: uploadCloudIcon, label: 'With Icon'},
        ],
      })}
      columnProps={permutateProps({
        type: [
          {value: StatusIndicator.Type.Gray, label: 'Gray'},
          {value: StatusIndicator.Type.Blue, label: 'Blue'},
          {value: StatusIndicator.Type.Green, label: 'Green'},
          {value: StatusIndicator.Type.Orange, label: 'Orange'},
          {value: StatusIndicator.Type.Red, label: 'Red'},
          {value: StatusIndicator.Type.Transparent, label: 'Transparent'},
        ],
      })}
    >
      {(props: StatusIndicatorProps) => <StatusIndicator {...props} label="Status" />}
    </ComponentStatesTable>
  </StaticStates>
);
