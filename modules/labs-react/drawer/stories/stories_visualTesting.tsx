/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';
import {space} from '@workday/canvas-kit-react/tokens';

import {Drawer, DrawerHeader, DrawerDirection} from '../index';
import {action} from '@storybook/addon-actions';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Drawer',
  component: Drawer,
});

export const DrawerStates = () => (
  <div>
    <h3>Drawer</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'With Drop Shadow', props: {showDropShadow: true}},
          {label: 'With Custom Padding', props: {padding: space.l, showDropShadow: true}},
          {label: 'With Zero Padding', props: {padding: space.zero, showDropShadow: true}},
          {label: 'With Custom Width', props: {width: 150, showDropShadow: true}},
          {
            label: 'With Open Direction Left',
            props: {openDirection: DrawerDirection.Left, showDropShadow: true, width: 150},
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <div style={{height: 200, position: 'relative'}}>
            <Drawer {...props}>Drawer Content</Drawer>
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
    <h3>Drawer With Header</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default Header', props: {}},
          {label: 'With Header Text', props: {title: 'Drawer Header'}},
          {
            label: 'With Close Button',
            props: {onClose: action('on close clicked'), title: 'Drawer Header'},
          },
          {
            label: 'With Custom Background Color',
            props: {headerColor: 'orange', title: 'Drawer Header'},
          },
          {
            label: 'With Inverse True',
            props: {
              headerColor: 'black',
              title: 'Drawer Header',
              inverse: true,
              onClose: action('on close clicked'),
            },
          },
          {
            label: 'With Custom Border Color',
            props: {
              onClose: action('on close clicked'),
              title: 'Drawer Header',
              borderColor: 'blue',
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <div style={{height: 200, position: 'relative'}}>
            <Drawer header={<DrawerHeader {...props} />}>Drawer Content</Drawer>
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  </div>
);
