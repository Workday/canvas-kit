import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {DeprecatedSegmentedControl} from '../index';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Segmented Control',
  component: DeprecatedSegmentedControl,
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
        <DeprecatedSegmentedControl value={props.value}>
          <DeprecatedSegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
            className={props.value === 'list-view' ? props.className : undefined}
          />
          <DeprecatedSegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
            disabled={true}
          />
          <DeprecatedSegmentedControl.Button
            icon={deviceTabletIcon}
            value="device-view"
            aria-label="Device View"
            className={props.value === 'device-view' ? props.className : undefined}
          />
          <DeprecatedSegmentedControl.Button
            icon={percentageIcon}
            value="percent-view"
            aria-label="Percent View"
            className={props.value === 'percent-view' ? props.className : undefined}
          />
        </DeprecatedSegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
