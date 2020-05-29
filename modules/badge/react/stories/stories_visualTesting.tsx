/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {ComponentStatesTable, enableSnapshots} from '../../../../utils/storybook';

import {CountBadge} from '../index';
import README from '../README.md';

export default {
  title: 'Testing|React/Indicators/Badge/CountBadge',
  decorators: [withReadme(README)],
  parameters: {
    ...enableSnapshots(),
  },
};

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
      ]}
      rowProps={[{label: 'Default', props: {}}, {label: 'Inverse', props: {variant: 'inverse'}}]}
    >
      {props => <CountBadge {...props} />}
    </ComponentStatesTable>
  );
};
