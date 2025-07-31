import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';

import {StatusIndicator} from '../../index';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Testing/Preview/Status Indicator',
  component: StatusIndicator,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
          {value: 'info', label: 'Info'},
          {value: 'neutral', label: 'Neutral'},
          {value: 'caution', label: 'Caution'},
          {value: 'positive', label: 'Positive'},
          {value: 'critical', label: 'Critical'},
          {value: 'ai', label: 'AI'},
          {value: 'transparent', label: 'Transparent'},
        ],
      })}
    >
      {props => {
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
