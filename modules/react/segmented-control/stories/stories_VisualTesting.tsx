/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../utils/storybook';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {IconButton} from '@workday/canvas-kit-react/button';
import {SegmentedControl} from '../index';

import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Segmented Control',
  component: SegmentedControl,
  decorators: [withReadme(README)],
});

export const SegmentedControlStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'First Item Selected', props: {value: 'list-view'}},
        {label: 'Middle Item Selected', props: {value: 'device-view'}},
        {label: 'Last Item Selected', props: {value: 'percent-view'}},
      ]}
      columnProps={[
        {label: 'Default', props: {className: ''}},
        {label: 'Focus', props: {className: 'focus'}}, // Test changing border radius for focused button
      ]}
    >
      {props => (
        <SegmentedControl value={props.value}>
          <IconButton
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
            className={props.value === 'list-view' ? props.className : undefined}
          />
          <IconButton
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
            disabled={true}
          />
          <IconButton
            icon={deviceTabletIcon}
            value="device-view"
            aria-label="Device View"
            className={props.value === 'device-view' ? props.className : undefined}
          />
          <IconButton
            icon={percentageIcon}
            value="percent-view"
            aria-label="Percent View"
            className={props.value === 'percent-view' ? props.className : undefined}
          />
        </SegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
