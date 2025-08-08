import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Expandable} from '@workday/canvas-kit-react/expandable';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {Meta} from '@storybook/react';

const meta: Meta = withSnapshotsEnabled({
  title: 'Testing/Expandable',
  component: Expandable,
});

// export default meta;

export default {
  title: 'Testing/Containers/Expandable',
  component: Expandable,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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
                  {props.avatar && <Expandable.Avatar name="Logan McNeil" />}
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
                  {props?.avatar && <Expandable.Avatar name="Logan McNeil" />}
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
