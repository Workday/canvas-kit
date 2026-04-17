import React from 'react';

import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Containers/Side Panel',
  component: SidePanel,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SidePanelStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {initialTransitionState: 'expanded'}},
          {
            label: 'With Heading',
            props: {header: 'Navigation', initialTransitionState: 'expanded'},
          },
          {
            label: 'With White Background',
            props: {
              header: 'Navigation',
              initialTransitionState: 'expanded',
              variant: 'alternate',
            },
          },
          {
            label: 'With On Toggle Click',
            props: {
              header: 'Navigation',
              initialTransitionState: 'expanded',
              variant: 'standard',
              onToggleClick: () => console.log('click toggle button'),
            },
          },
          {
            label: 'With open direction from right',
            props: {
              header: 'Navigation',
              initialTransitionState: 'expanded',
              variant: 'standard',
              onToggleClick: () => console.log('click toggle button'),
              origin: 'end',
            },
          },
          {
            label: 'With custom padding',
            props: {
              header: 'Navigation',
              initialTransitionState: 'expanded',
              variant: 'standard',
              onToggleClick: () => console.log('click toggle button'),
              padding: cssVar(system.padding.xs),
            },
          },
          {
            label: 'With custom open width',
            props: {
              header: 'Navigation',
              initialTransitionState: 'expanded',
              variant: 'alternate',
              onToggleClick: () => console.log('click toggle button'),
              expandedWidth: 350,
            },
          },
          {
            label: 'When closed',
            props: {
              header: 'Navigation',
              initialTransitionState: 'collapsed',
              onToggleClick: () => console.log('click toggle button'),
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <div style={{position: 'relative', height: 200}}>
            <SidePanel
              initialTransitionState={props.initialTransitionState}
              origin={props.origin}
              cs={{padding: props.padding ? props.padding : 'none'}}
              expandedWidth={props.expandedWidth}
              {...props}
            >
              {props.header && <SidePanel.Heading>{props.header}</SidePanel.Heading>}
              {props.onToggleClick && <SidePanel.ToggleButton aria-label="Collapse View" />}
              {props.initialTransitionState !== 'collapsed' && 'Panel Content'}
            </SidePanel>
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
