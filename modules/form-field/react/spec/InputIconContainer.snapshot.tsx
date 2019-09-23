import * as React from 'react';
import * as renderer from 'react-test-renderer';
import InputIconContainer from '../lib/InputIconContainer';

describe('InputIconContainer Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<InputIconContainer />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<InputIconContainer grow={true} />);
    expect(component).toMatchSnapshot();
  });
});
