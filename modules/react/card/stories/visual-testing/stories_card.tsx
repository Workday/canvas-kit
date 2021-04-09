/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {Card} from '../../index';
import {depth, space} from '@workday/canvas-kit-react/tokens';

export default withSnapshotsEnabled({
  title: 'Testing/React/Containers/Card',
  component: Card,
});

export const CardStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'With Heading', props: {heading: 'Delete Item'}},
        {
          label: 'With zero padding',
          props: {
            heading: 'Delete Item',
            padding: space.zero,
          },
        },
        {
          label: 'With custom padding',
          props: {
            heading: 'Delete Item',

            padding: space.s,
          },
        },

        {
          label: 'With different depth value 1',
          props: {
            heading: 'Delete Item',
            depth: depth[1],
          },
        },
        {
          label: 'With different depth value 2',
          props: {
            heading: 'Delete Item',
            depth: depth[2],
          },
        },
        {
          label: 'With different depth value 3',
          props: {
            heading: 'Delete Item',
            depth: depth[3],
          },
        },
        {
          label: 'With different depth value 4',
          props: {
            heading: 'Delete Item',
            depth: depth[4],
          },
        },
        {
          label: 'With custom width',
          props: {
            heading: 'Delete Item',
            width: 300,
          },
        },
        {
          label: 'With custom height',
          props: {
            heading: 'Delete Item',
            height: 400,
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => <Card {...props}>Card Content</Card>}
    </ComponentStatesTable>
  </StaticStates>
);
