/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Card} from '@workday/canvas-kit-react/card';

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
            padding: 'zero',
          },
        },
        {
          label: 'With custom padding',
          props: {
            heading: 'Delete Item',

            padding: 's',
          },
        },

        {
          label: 'With different depth value 1',
          props: {
            heading: 'Delete Item',
            depth: 1,
          },
        },
        {
          label: 'With different depth value 2',
          props: {
            heading: 'Delete Item',
            depth: 2,
          },
        },
        {
          label: 'With different depth value 3',
          props: {
            heading: 'Delete Item',
            depth: 3,
          },
        },
        {
          label: 'With different depth value 4',
          props: {
            heading: 'Delete Item',
            depth: 4,
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
      {({heading, ...props}) => (
        <Card {...props}>
          {heading && <Card.Heading>{heading}</Card.Heading>}
          <Card.Body>Card Content</Card.Body>
        </Card>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
