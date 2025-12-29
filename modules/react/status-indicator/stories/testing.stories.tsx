import * as React from 'react';

import {StatusIndicator, StatusIndicatorProps} from '@workday/canvas-kit-react/status-indicator';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Testing/Indicators/Status Indicator',
  component: StatusIndicator,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const StatusIndicatorStates = {
  render: () => (
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
  ),
};
