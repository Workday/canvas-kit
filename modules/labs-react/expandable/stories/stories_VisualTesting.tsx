import React from 'react';

import {
  CanvasProvider,
  ContentDirection,
  StaticStates,
  ComponentStatesTable,
} from '@workday/canvas-kit-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Expandable',
  component: Expandable,
});

export const StartIcon = () => {
  const model = useDisclosureModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'No Avatar', props: {}},
          {label: 'Avatar', props: {avatar: true}},
          {label: 'Depth', props: {depth: 3}},
          {label: 'RTL', props: {direction: ContentDirection.RTL}},
        ]}
        columnProps={[
          {
            label: 'Closed',
            props: {visibility: 'hidden', id: '1'},
          },
          {
            label: 'Opened',
            props: {visibility: 'visible', id: '1'},
          },
        ]}
      >
        {props => {
          const state = {visibility: props.visibility, id: props.id};

          return (
            <CanvasProvider theme={{canvas: {direction: props?.direction}}}>
              <Expandable depth={props?.depth} model={{...model, state}}>
                <Expandable.Target headingLevel="h2">
                  <Expandable.Icon iconPosition="start" />
                  {props.avatar && <Expandable.Avatar />}
                  <Expandable.Title>Hello</Expandable.Title>
                </Expandable.Target>
                <Expandable.Content>Content</Expandable.Content>
              </Expandable>
            </CanvasProvider>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const EndIcon = () => {
  const model = useDisclosureModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'No Avatar', props: {}},
          {label: 'Avatar', props: {avatar: true}},
          {label: 'Depth', props: {depth: 3}},
          {label: 'RTL', props: {direction: ContentDirection.RTL}},
        ]}
        columnProps={[
          {
            label: 'Closed',
            props: {visibility: 'hidden', id: '1'},
          },
          {
            label: 'Opened',
            props: {visibility: 'visible', id: '1'},
          },
        ]}
      >
        {props => {
          const state = {visibility: props.visibility, id: props.id};

          return (
            <CanvasProvider theme={{canvas: {direction: props?.direction}}}>
              <Expandable depth={props?.depth} model={{...model, state}}>
                <Expandable.Target headingLevel="h3">
                  {props?.avatar && <Expandable.Avatar />}
                  <Expandable.Title>Hello</Expandable.Title>
                  <Expandable.Icon iconPosition="end" />
                </Expandable.Target>
                <Expandable.Content>Content</Expandable.Content>
              </Expandable>
            </CanvasProvider>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
