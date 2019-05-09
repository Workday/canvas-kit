import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '@workday/canvas-kit-react-button';
import FloatingActionToolbar from '../index';

describe('Floating Action Toolbar Snapshots', () => {
  test('renders an empty FAT', () => {
    const component = renderer.create(<FloatingActionToolbar />);
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed empty FAT', () => {
    const component = renderer.create(<FloatingActionToolbar fixed={true} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a FAT with one button', () => {
    const component = renderer.create(
      <FloatingActionToolbar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
      </FloatingActionToolbar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed FAT with one button', () => {
    const component = renderer.create(
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
      </FloatingActionToolbar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a FAT with two buttons', () => {
    const component = renderer.create(
      <FloatingActionToolbar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed FAT with two buttons', () => {
    const component = renderer.create(
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    );
    expect(component).toMatchSnapshot();
  });
});
