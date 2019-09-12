import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Input from '../lib/Input';

describe('Input Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Input />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<Input grow={true} />);
    expect(component).toMatchSnapshot();
  });
});
