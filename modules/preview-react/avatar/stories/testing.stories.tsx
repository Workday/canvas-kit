import React from 'react';

import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {stateTableColumnProps} from '@workday/canvas-kit-react/button/stories/visual-testing/utils';
// @ts-ignore: Cannot find module error
import testAvatar from './examples/test-avatar.png';

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
            label: 'Purple',
            props: {variant: 'purple'},
          },
          {
            label: 'Orange',
            props: {variant: 'orange'},
          },
          {
            label: 'Magenta',
            props: {variant: 'magenta'},
          },
          {
            label: 'Azure',
            props: {variant: 'azure'},
          },
          {
            label: 'Neutral',
            props: {variant: 'neutral'},
          },
          {
            label: 'Slate',
            props: {variant: 'slate'},
          },
          {
            label: 'Coral',
            props: {variant: 'coral'},
          },
          {
            label: 'Red',
            props: {variant: 'red'},
          },
          {
            label: 'Green',
            props: {variant: 'green'},
          },
          {
            label: 'Teal',
            props: {variant: 'teal'},
          },
          {
            label: 'Amber',
            props: {variant: 'amber'},
          },
          {
            label: 'Indigo',
            props: {variant: 'indigo'},
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
              <Pill.Icon aria-label="add" />
              <Pill.Label>Regina Skeltor</Pill.Label>
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
              <Pill.Avatar altText="Avatar" url={testAvatar} />
              <Pill.Label>Regina Skeltor</Pill.Label>
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
              <Pill.Label>Shoes</Pill.Label>
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
              {avatar && <Pill.Avatar altText="Avatar" url={testAvatar} />}
              {maxWidth ? (
                <Pill.Label>This is a super long text that should overflow</Pill.Label>
              ) : (
                <Pill.Label>PillLabel</Pill.Label>
              )}
              <Pill.IconButton aria-label="Remove" {...props} />
            </Pill>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
