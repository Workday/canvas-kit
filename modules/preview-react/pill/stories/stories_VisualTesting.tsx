import React from 'react';

import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Pill, usePillModel} from '@workday/canvas-kit-preview-react/pill';
import {stateTableColumnProps} from '@workday/canvas-kit-react/button/stories/visual-testing/utils';
// @ts-ignore: Cannot find module error
import testAvatar from './examples/test-avatar.png';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Pill',
  component: Pill,
});

export const ReadOnlyPillStates = () => {
  const model = usePillModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Default read only',
            props: {},
          },
          {
            label: 'With max width',
            props: {maxWidth: 200},
          },
        ]}
      >
        {({maxWidth, ...props}) => {
          return (
            <Pill variant="readOnly">
              {maxWidth ? 'This is a super long te that should overflow' : 'PillLabel'}
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Icon',
            props: {},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({...props}) => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              <Pill.Icon />
              Regina Skeltor
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStatesAvatar = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Avatar',
            props: {},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({...props}) => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              <Pill.Avatar url={testAvatar} />
              Regina Skeltor
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const PillStatesCount = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Count',
            props: {count: true},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({count, ...props}) => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              Shoes
              <Pill.Count>30</Pill.Count>
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const RemovablePillStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Removable',
            props: {},
          },
          {
            label: 'With Avatar',
            props: {avatar: true},
          },
          {
            label: 'With Max Width',
            props: {maxWidth: true},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({avatar, maxWidth, ...props}) => {
          return (
            <Pill variant="removable" {...props}>
              {avatar && <Pill.Avatar url={testAvatar} />}
              {maxWidth ? 'This is a super long te that should overflow' : 'PillLabel'}
              <Pill.IconButton onClick={() => console.warn('clicked')} {...props} />
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
