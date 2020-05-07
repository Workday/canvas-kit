/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {ComponentStatesTable} from '../../../../utils/storybook';

import {CountBadge} from '../index';
import README from '../README.md';

export default {
  title: 'Components|Indicators/Badge/CountBadge/React/',
  decorators: [withReadme(README)],
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const VisualTesting = () => {
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
