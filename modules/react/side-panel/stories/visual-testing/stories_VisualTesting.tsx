/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import {SidePanel} from '../../index';
import {space} from '@workday/canvas-kit-react/tokens';
import {SidePanelBackgroundColor, SidePanelOpenDirection} from '../../lib/SidePanel';
import {action} from '@storybook/addon-actions';

export default withSnapshotsEnabled({
  title: 'Testing/React/Containers/Side Panel',
  component: SidePanel,
});

export const SidePanelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {open: true}},
        {
          label: 'With Heading',
          props: {header: 'Navigation', open: true},
        },
        {
          label: 'With Gray Background',
          props: {header: 'Navigation', open: true, backgroundColor: SidePanelBackgroundColor.Gray},
        },
        {
          label: 'With On Toggle Click',
          props: {
            header: 'Navigation',
            open: true,
            backgroundColor: SidePanelBackgroundColor.Gray,
            onToggleClick: action('click toggle button'),
          },
        },
        {
          label: 'With open direction from right',
          props: {
            header: 'Navigation',
            open: true,
            backgroundColor: SidePanelBackgroundColor.Gray,
            onToggleClick: action('click toggle button'),
            openDirection: SidePanelOpenDirection.Right,
          },
        },
        {
          label: 'With custom padding',
          props: {
            header: 'Navigation',
            open: true,
            backgroundColor: SidePanelBackgroundColor.Gray,
            onToggleClick: action('click toggle button'),
            padding: space.xxs,
          },
        },
        {
          label: 'With custom open width',
          props: {
            header: 'Navigation',
            open: true,
            backgroundColor: SidePanelBackgroundColor.Gray,
            onToggleClick: action('click toggle button'),
            openWidth: 350,
          },
        },
        {
          label: 'When closed',
          props: {
            header: 'Navigation',
            open: false,
            onToggleClick: action('click toggle button'),
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <div style={{position: 'relative', height: 200}}>
          <SidePanel open={props.open} {...props}>
            Side Panel Content
          </SidePanel>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
