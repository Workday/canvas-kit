import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Hint from '../lib/Hint';

describe('Hint Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Hint />);
    expect(component).toMatchSnapshot();
  });
});
