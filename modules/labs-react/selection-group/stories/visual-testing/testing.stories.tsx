import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Labs/Selection Group',
  component: SelectionGroup,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const stateTableColumnProps = [
  {label: 'Default', props: {}},
  {label: 'Hover', props: {itemProps: {className: 'hover'}}},
  {label: 'Focus', props: {itemProps: {className: 'focus'}}},
  {label: 'Active', props: {itemProps: {className: 'active'}}},
  {label: 'Disabled', props: {disabled: true}},
];

export const SingleSelectStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          initialSelectedIds: [
            {value: [], label: 'Nothing selected'},
            {value: ['option-a'], label: 'First selected'},
            {value: ['option-b'], label: 'Second selected'},
          ],
        })}
        columnProps={stateTableColumnProps}
      >
        {({itemProps, ...props}) => (
          <SelectionGroup shouldSelect={() => false} mode="single" width="content" {...props}>
            <SelectionGroup.List aria-label="Single select states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b" {...itemProps}>
                Option B
              </SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const MultiSelectStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          initialSelectedIds: [
            {value: [], label: 'Nothing selected'},
            {value: ['option-a'], label: 'First selected'},
            {value: ['option-a', 'option-b'], label: 'First and second selected'},
          ],
        })}
        columnProps={stateTableColumnProps}
      >
        {({itemProps, ...props}) => (
          <SelectionGroup shouldSelect={() => false} mode="multiple" width="content" {...props}>
            <SelectionGroup.List aria-label="Multi select states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b" {...itemProps}>
                Option B
              </SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const WidthStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Content', props: {width: 'content'}},
          {label: 'Equal', props: {width: 'equal'}},
          {label: 'Column', props: {width: 'column'}},
        ]}
        columnProps={[{label: '', props: {}}]}
      >
        {props => (
          <SelectionGroup
            shouldSelect={() => false}
            mode="single"
            initialSelectedIds={['short']}
            {...props}
          >
            <SelectionGroup.List aria-label="Width states">
              <SelectionGroup.Item data-id="short">Short</SelectionGroup.Item>
              <SelectionGroup.Item data-id="medium">Medium Length</SelectionGroup.Item>
              <SelectionGroup.Item data-id="long">A Much Longer Label</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const NotificationStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'Error', props: {error: 'error'}},
          {label: 'Caution', props: {error: 'caution'}},
        ]}
        columnProps={[{label: '', props: {}}]}
      >
        {props => (
          <SelectionGroup
            shouldSelect={() => false}
            mode="single"
            initialSelectedIds={['option-a']}
            width="content"
            {...props}
          >
            <SelectionGroup.List aria-label="Notification states">
              <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
              <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
            </SelectionGroup.List>
          </SelectionGroup>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
