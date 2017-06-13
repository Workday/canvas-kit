import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Table from '../lib/Table';

describe('Table Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Table />);
    expect(component).toMatchSnapshot();
  });
});
