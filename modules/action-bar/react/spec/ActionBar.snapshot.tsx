import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '@workday/canvas-kit-react-button';
import ActionBar from '../index';

describe('Action Bar Snapshots', () => {
  test('renders an empty action bar', () => {
    const component = renderer.create(<ActionBar />);
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed empty action bar', () => {
    const component = renderer.create(<ActionBar fixed={true} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a action bar with one button', () => {
    const component = renderer.create(
      <ActionBar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
      </ActionBar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed action bar with one button', () => {
    const component = renderer.create(
      <ActionBar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
      </ActionBar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a action bar with two buttons', () => {
    const component = renderer.create(
      <ActionBar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a fixed action bar with two buttons', () => {
    const component = renderer.create(
      <ActionBar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    );
    expect(component).toMatchSnapshot();
  });
});
