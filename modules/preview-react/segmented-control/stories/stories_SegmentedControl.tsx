import React from 'react';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {gridIcon, listViewIcon, listDetailIcon} from '@workday/canvas-system-icons-web';
import {useSegmentedControlModel} from '../lib/hooks/useSegmentedControlModel';

export default withSnapshotsEnabled({
  title: 'Testing/Preview/Segmented Control',
  component: SegmentedControl,
});

const stateTableColumnProps = [
  {label: 'Default ', props: {}},
  {label: 'Default Disabled', props: {disabled: true}},
  {label: 'Hover ', props: {itemProps: {className: 'hover'}}},
  {label: 'Hover Disabled', props: {disabled: true, itemProps: {className: 'hover'}}},
  {label: 'Focus ', props: {itemProps: {className: 'focus'}}},
  {label: 'Focus Hover ', props: {itemProps: {className: 'focus hover'}}},
  {label: 'Active/Pressed', props: {itemProps: {className: 'active'}}},
];

export const IconOnlyHorizontalStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        initialValue: [
          {value: 'table', label: ' with first item selected'},
          {value: 'list', label: ' with second item selected'},
          {value: 'detail', label: ' with third item selected'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {({itemProps, ...props}) => (
        <SegmentedControl shouldSelect={() => false} {...props}>
          <SegmentedControl.List aria-label="View type">
            <SegmentedControl.Item
              data-id="table"
              icon={gridIcon}
              tooltipProps={{title: 'Table'}}
            />
            <SegmentedControl.Item
              data-id="list"
              icon={listViewIcon}
              tooltipProps={{title: 'List'}}
              {...itemProps}
            />
            <SegmentedControl.Item
              data-id="detail"
              icon={listDetailIcon}
              tooltipProps={{title: 'Detail'}}
            />
          </SegmentedControl.List>
        </SegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const IconOnlyVerticalStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        initialValue: [
          {value: 'table', label: ' with first item selected'},
          {value: 'list', label: ' with second item selected'},
          {value: 'detail', label: ' with third item selected'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {({itemProps, ...props}) => (
        <SegmentedControl shouldSelect={() => false} orientation="vertical" {...props}>
          <SegmentedControl.List aria-label="View type">
            <SegmentedControl.Item
              data-id="table"
              icon={gridIcon}
              tooltipProps={{title: 'Table'}}
            />
            <SegmentedControl.Item
              data-id="list"
              icon={listViewIcon}
              tooltipProps={{title: 'List'}}
              {...itemProps}
            />
            <SegmentedControl.Item
              data-id="detail"
              icon={listDetailIcon}
              tooltipProps={{title: 'Detail'}}
            />
          </SegmentedControl.List>
        </SegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextAndIconStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        initialValue: [
          {value: 'table', label: ' with first item selected'},
          {value: 'list', label: ' with second item selected'},
          {value: 'detail', label: ' with third item selected'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {({itemProps, ...props}) => (
        <SegmentedControl shouldSelect={() => false} {...props}>
          <SegmentedControl.List aria-label="View type">
            <SegmentedControl.Item data-id="table" icon={gridIcon}>
              Table
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="list" icon={listViewIcon} {...itemProps}>
              List
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="detail" icon={listDetailIcon}>
              Detail
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextOnlyStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
        initialValue: [
          {value: 'table', label: ' with first item selected'},
          {value: 'list', label: ' with second item selected'},
          {value: 'detail', label: ' with third item selected'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {({itemProps, ...props}) => (
        <SegmentedControl shouldSelect={() => false} {...props}>
          <SegmentedControl.List aria-label="View type">
            <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
            <SegmentedControl.Item data-id="list" {...itemProps}>
              List
            </SegmentedControl.Item>
            <SegmentedControl.Item data-id="detail">Detail</SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
