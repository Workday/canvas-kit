import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {StatusIndicator} from '../../index';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Status Indicator',
  component: StatusIndicator,
});

export const StatusIndicatorStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        emphasis: [
          {value: 'low', label: 'Low Emphasis'},
          {value: 'high', label: 'High Emphasis'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: uploadCloudIcon, label: 'With Icon'},
        ],
      })}
      columnProps={permutateProps({
        variant: [
          {value: 'gray', label: 'Gray'},
          {value: 'blue', label: 'Blue'},
          {value: 'green', label: 'Green'},
          {value: 'orange', label: 'Orange'},
          {value: 'red', label: 'Red'},
          {value: 'transparent', label: 'Transparent'},
        ],
      })}
    >
      {props => {
        console.warn(props);
        const {emphasis, icon, variant} = props;
        return (
          <StatusIndicator emphasis={emphasis} variant={variant}>
            <StatusIndicator.Icon icon={icon} />
            <StatusIndicator.Label>Lorem impsum dolor</StatusIndicator.Label>
          </StatusIndicator>
        );
      }}
    </ComponentStatesTable>
  </StaticStates>
);
