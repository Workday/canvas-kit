import {
  SidePanel,
  SidePanelBackgroundColor,
  SidePanelOpenDirection,
} from '@workday/canvas-kit-react/side-panel';
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
          {label: 'Default', props: {open: true}},
          {
            label: 'With Heading',
            props: {header: 'Navigation', open: true},
          },
          {
            label: 'With Gray Background',
            props: {
              header: 'Navigation',
              open: true,
              backgroundColor: SidePanelBackgroundColor.Gray,
            },
          },
          {
            label: 'With On Toggle Click',
            props: {
              header: 'Navigation',
              open: true,
              backgroundColor: SidePanelBackgroundColor.Gray,
              onToggleClick: () => console.log('click toggle button'),
            },
          },
          {
            label: 'With open direction from right',
            props: {
              header: 'Navigation',
              open: true,
              backgroundColor: SidePanelBackgroundColor.Gray,
              onToggleClick: () => console.log('click toggle button'),
              openDirection: SidePanelOpenDirection.Right,
            },
          },
          {
            label: 'With custom padding',
            props: {
              header: 'Navigation',
              open: true,
              backgroundColor: SidePanelBackgroundColor.Gray,
              onToggleClick: () => console.log('click toggle button'),
              padding: cssVar(system.padding.xs),
            },
          },
          {
            label: 'With custom open width',
            props: {
              header: 'Navigation',
              open: true,
              backgroundColor: SidePanelBackgroundColor.Gray,
              onToggleClick: () => console.log('click toggle button'),
              openWidth: 350,
            },
          },
          {
            label: 'When closed',
            props: {
              header: 'Navigation',
              open: false,
              onToggleClick: () => console.log('click toggle button'),
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
  ),
};
