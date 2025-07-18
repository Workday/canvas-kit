import React from 'react';
import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {CountBadge} from '../index';

export default {
  title: 'Testing/Indicators/Badge/CountBadge',
  component: CountBadge,
  parameters: {
    ReadmePath: 'react/badge',
    chromatic: {
      disable: false,
    },
  },
};

export const CountBadgeStates = {
  render: () => {
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
          {label: 'Default High Emphasis', props: {}},
          {label: 'Default Low Emphasis', props: {emphasis: 'low'}},
          {label: 'Inverse High Emphasis', props: {variant: 'inverse'}},
          {label: 'Inverse Low Emphasis', props: {emphasis: 'low', variant: 'inverse'}},
        ]}
      >
        {props => <CountBadge {...props} />}
      </ComponentStatesTable>
    );
  },
};
