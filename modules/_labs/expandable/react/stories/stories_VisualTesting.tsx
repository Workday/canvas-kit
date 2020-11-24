/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import Expandable from '../index';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Expandable',
  component: Expandable,
});

export const ExpandableStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Collapsed', props: {header: 'Expandable Container'}},
        {label: 'Expanded', props: {header: 'Expandable Container', expanded: true}},
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Expandable header={props.header} {...props}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Expandable>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
