import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoadingDots from '../lib/LoadingDots';

describe('LoadingDots Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<LoadingDots />);
    expect(component).toMatchSnapshot();
  });
});
