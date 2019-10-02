import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Menu, {MenuItem} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Menu Snapshots', () => {
  test('renders an empty menu', () => {
    const component = renderer.create(<Menu id="myId" />);
    expect(component).toMatchSnapshot();
  });

  test('renders an menu with one item', () => {
    const component = renderer.create(
      <Menu id="myId">
        <MenuItem>Foo</MenuItem>
      </Menu>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an menu with two items', () => {
    const component = renderer.create(
      <Menu id="myId">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders with icon', () => {
    const component = renderer.create(
      <Menu id="myId">
        <MenuItem aria-label="myLabel" icon={activityStreamIcon} secondaryIcon={activityStreamIcon}>
          Foo
        </MenuItem>
      </Menu>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a hidden menu', () => {
    const component = renderer.create(<Menu id="myId" isOpen={false} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a menu with grow=true', () => {
    const component = renderer.create(
      <Menu id="myId" grow={true}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a menu with aria attributes', () => {
    const component = renderer.create(
      <Menu id="myId" labeledBy="myLabel">
        <MenuItem aria-label="aria-label">Foo</MenuItem>
      </Menu>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a disabled menu item', () => {
    const component = renderer.create(<MenuItem isDisabled={true}>Foo</MenuItem>);
    expect(component).toMatchSnapshot();
  });

  test('renders a divided menu item', () => {
    const component = renderer.create(<MenuItem hasDivider={true}>Foo</MenuItem>);
    expect(component).toMatchSnapshot();
  });

  test('renders a focused menu item', () => {
    const component = renderer.create(<MenuItem isFocused={true}>Foo</MenuItem>);
    expect(component).toMatchSnapshot();
  });
});
