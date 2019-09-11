import * as React from 'react';
import Button from '../lib/Button';
import * as renderer from 'react-test-renderer';

describe('Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Button>Button</Button>);
    expect(component).toMatchSnapshot();
  });

  test('renders a button with no type defined', () => {
    const component = renderer.create(<Button variant={undefined}>Button</Button>);
    expect(component).toMatchSnapshot();
  });

  test('renders a growing button', () => {
    const component = renderer.create(<Button grow={true}>Button</Button>);
    expect(component).toMatchSnapshot();
  });
});
