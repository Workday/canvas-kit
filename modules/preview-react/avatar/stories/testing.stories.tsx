import React from 'react';

import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

export default {
  title: 'Testing/Preview/Avatar',
  component: Avatar,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const AvatarStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Default',
            props: {variant: 'blue'},
          },
          {
            label: 'Amber',
            props: {variant: 'amber'},
          },
          {
            label: 'Teal',
            props: {variant: 'teal'},
          },
          {
            label: 'Purple',
            props: {variant: 'purple'},
          },
        ]}
      >
        {({variant, ...props}) => {
          return <Avatar variant={variant} name="John Doe" />;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
