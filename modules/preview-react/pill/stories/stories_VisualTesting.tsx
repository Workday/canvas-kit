import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Pill, usePillModel} from '@workday/canvas-kit-preview-react/pill';
import {stateTableColumnProps} from '@workday/canvas-kit-react/button/stories/visual-testing/utils';

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
          const state = {onClick: props.onClick};

          return (
            <Pill>{maxWidth ? 'This is a super long te that should overflow' : 'PillLabel'}</Pill>
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
          {label: 'Default', props: {}},
          {
            label: 'With Avatar',
            props: {avatar: true},
          },
          {
            label: 'With Icon',
            props: {icon: true},
          },
          {
            label: 'With Count',
            props: {count: true},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({avatar, icon, count, ...props}) => {
          return (
            <Pill onClick={() => console.warn('clicked')} {...props}>
              {icon && <Pill.Icon />}
              {avatar && <Pill.Avatar />}
              Regina Skeltor
              {count && <Pill.Count>30</Pill.Count>}
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
            label: 'With Avatar',
            props: {avatar: true},
          },
          {
            label: 'With no Avatar',
            props: {icon: true},
          },
        ]}
        columnProps={stateTableColumnProps}
      >
        {({avatar, icon, count, ...props}) => {
          return (
            <Pill onDelete={() => console.warn('clicked')} {...props}>
              {avatar && <Pill.Avatar />}
              Regina Skeltor
              <Pill.IconButton {...props} />
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
