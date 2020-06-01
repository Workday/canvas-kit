/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {CountBadge} from '../index';
import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Testing|React/Indicators/Badge/CountBadge',
  component: CountBadge,
  decorators: [withReadme(README)],
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
      ]}
      rowProps={[{label: 'Default', props: {}}, {label: 'Inverse', props: {variant: 'inverse'}}]}
    >
      {props => <CountBadge {...props} />}
    </ComponentStatesTable>
  );
};
