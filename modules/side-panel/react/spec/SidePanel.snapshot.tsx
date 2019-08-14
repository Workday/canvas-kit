import * as React from 'react';
import SidePanel, {SidePanelOpenDirection, SidePanelBackgroundColor} from '../lib/SidePanel';
import * as renderer from 'react-test-renderer';

describe('SidePanel Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<SidePanel onBreakpointChange={jest.fn()} open={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a closed side panel', () => {
    const component = renderer.create(<SidePanel onBreakpointChange={jest.fn()} open={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel header', () => {
    const component = renderer.create(
      <SidePanel onBreakpointChange={jest.fn()} header={'Side Panel Header'} open={true} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel from the right', () => {
    const component = renderer.create(
      <SidePanel
        openDirection={SidePanelOpenDirection.Right}
        onBreakpointChange={jest.fn()}
        header={'Side Panel Header'}
        open={true}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel with a Gray background when open', () => {
    const component = renderer.create(
      <SidePanel
        openDirection={SidePanelOpenDirection.Right}
        onBreakpointChange={jest.fn()}
        header={'Side Panel Header'}
        open={true}
        backgroundColor={SidePanelBackgroundColor.Gray}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('does not render header when side panel is closed', () => {
    const component = renderer.create(
      <SidePanel onBreakpointChange={jest.fn()} header={'Side Panel Header'} open={false} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a toggle button', () => {
    const component = renderer.create(
      <SidePanel
        onBreakpointChange={jest.fn()}
        onToggleClick={jest.fn()}
        header={'Side Panel Header'}
        open={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders standard side panel', () => {
    const component = renderer.create(<SidePanel open={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the right with correct toggle button when panel is closed', () => {
    const component = renderer.create(
      <SidePanel
        onBreakpointChange={jest.fn()}
        onToggleClick={jest.fn}
        openDirection={SidePanelOpenDirection.Right}
        header={'Side Panel Header'}
        open={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the right with correct toggle button when panel is open', () => {
    const component = renderer.create(
      <SidePanel
        onBreakpointChange={jest.fn()}
        onToggleClick={jest.fn}
        openDirection={SidePanelOpenDirection.Right}
        header={'Side Panel Header'}
        open={true}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the left', () => {
    const component = renderer.create(
      <SidePanel
        onBreakpointChange={jest.fn()}
        openDirection={SidePanelOpenDirection.Left}
        header={'Side Panel Header'}
        open={true}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel with a different width', () => {
    const component = renderer.create(<SidePanel openWidth={900} open={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel with children elements', () => {
    const component = renderer.create(
      <SidePanel onBreakpointChange={jest.fn()} open={true}>
        <ul>
          <li>Home</li>
          <li>Favorites</li>
          <li>Recents</li>
          <li>Trash</li>
        </ul>
      </SidePanel>
    );
    expect(component).toMatchSnapshot();
  });
});
