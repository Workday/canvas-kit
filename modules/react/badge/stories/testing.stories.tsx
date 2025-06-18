import React from 'react';

import {CountBadge} from '@workday/canvas-kit-react/badge';
import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Indicators/Badge/CountBadge',
  parameters: {
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
          {label: 'Default', props: {}},
          {label: 'Inverse', props: {variant: 'inverse'}},
        ]}
      >
        {props => <CountBadge {...props} />}
      </ComponentStatesTable>
    );
  },
};
