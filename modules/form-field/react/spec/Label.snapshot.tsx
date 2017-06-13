import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Label from '../lib/Label';

describe('Label Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Label />);
    expect(component).toMatchSnapshot();
  });

  test('renders left label', () => {
    const component = renderer.create(<Label labelPosition={Label.Position.Left} />);
    expect(component).toMatchSnapshot();
  });
});
