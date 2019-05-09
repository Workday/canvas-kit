import * as React from 'react';
import Checkbox from '../lib/Checkbox';
import * as renderer from 'react-test-renderer';

describe('Checkbox Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Checkbox checked={true} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Checkbox checked={true} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Checkbox checked={false} disabled={true} label="checkbox" />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Checkbox checked={false} disabled={false} label="checkbox" />
    );
    expect(component).toMatchSnapshot();
  });
});
