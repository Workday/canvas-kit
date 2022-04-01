import React from 'react';

import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {CountBadge} from '../index';

export default withSnapshotsEnabled({
  title: 'Testing/React/Indicators/Badge/CountBadge',
  component: CountBadge,
  parameters: {
    ReadmePath: 'react/badge',
  },
});

export const CountBadgeStates = () => {
  return (
    <ComponentStatesTable
      columnProps={[
        {label: 'Single Digit', props: {count: 1}},
        {label: 'Double Digit', props: {count: 23}},
        {label: 'Triple Digit', props: {count: 456}},
        {
          label: 'Greater than 999',
          props: {count: 1000},
        },
        {label: 'Custom Limit', props: {count: 100, limit: 100}},
      ]}
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Inverse', props: {variant: 'inverse'}},
      ]}
    >
      {props => <CountBadge {...props} />}
    </ComponentStatesTable>
  );
};
