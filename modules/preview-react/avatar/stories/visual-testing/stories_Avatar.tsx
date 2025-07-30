import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

export default withSnapshotsEnabled({
  title: 'Testing/Preview/Avatar',
  component: Avatar,
});

export const AvatarStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {({open, ...props}) => {
          return (
            <Avatar initialOpen={open} {...props}>
              <Avatar.Target>Toggle</Avatar.Target>
              <Avatar.Content>Content</Avatar.Content>
            </Avatar>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
