import * as React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {SegmentedControl} from '../index';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Segmented Control',
  component: SegmentedControl,
  parameters: {
    ReadmePath: 'labs-react/header',
  },
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
          <SegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
            className={props.value === 'list-view' ? props.className : undefined}
          />
          <SegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
            disabled={true}
          />
          <SegmentedControl.Button
            icon={deviceTabletIcon}
            value="device-view"
            aria-label="Device View"
            className={props.value === 'device-view' ? props.className : undefined}
          />
          <SegmentedControl.Button
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
