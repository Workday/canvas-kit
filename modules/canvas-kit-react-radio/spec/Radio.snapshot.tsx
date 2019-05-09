import * as React from 'react';
import Radio from '../lib/Radio';
import * as renderer from 'react-test-renderer';

describe('Radio Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={true} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={true} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={false} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={false} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
});
