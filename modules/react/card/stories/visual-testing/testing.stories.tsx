import React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Containers/Card',
  component: Card,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const CardStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Without Heading', props: {heading: false}},
          {label: 'Borderless', props: {variant: 'borderless'}},
          {label: 'Filled', props: {variant: 'filled'}},
          {label: 'With Heading', props: {}},
          {
            label: 'With custom padding (0px)',
            props: {cs: {padding: system.space.zero}},
          },
          {
            label: 'With custom padding (16px)',
            props: {cs: {padding: system.space.x4}},
          },
          {
            label: 'With custom gap (0px)',
            props: {cs: {gap: system.space.zero}},
          },
          {
            label: 'With custom box shadow (system.depth1)',
            props: {cs: {boxShadow: system.depth1}},
          },
          {
            label: 'With custom width (300px)',
            props: {cs: {width: px2rem(300)}},
          },
          {
            label: 'With custom height (400px)',
            props: {cs: {height: px2rem(400)}},
          },
        ]}
        columnProps={[{label: 'Components', props: {}}]}
      >
        {({heading = true, ...props}) => (
          <div
            style={{
              background:
                props.variant !== 'filled' ? cssVar(system.color.surface.alt.default) : undefined,
              padding: cssVar(system.space.x4),
            }}
          >
            <Card {...props}>
              {heading && <Card.Heading>Delete Item</Card.Heading>}
              <Card.Body>Card Content</Card.Body>
            </Card>
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
