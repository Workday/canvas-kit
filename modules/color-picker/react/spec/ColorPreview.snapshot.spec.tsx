import * as React from 'react';
import ColorPreview from '../lib/ColorPreview';
import * as renderer from 'react-test-renderer';

describe('ColorPreview Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<ColorPreview value={''} />);
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(<ColorPreview value={'e6e'} />);
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color with #', () => {
    const component = renderer.create(<ColorPreview value={'#e6e'} />);
    expect(component).toMatchSnapshot();
  });
  test('renders valid empty color input', () => {
    const component = renderer.create(<ColorPreview value={''} />);
    expect(component).toMatchSnapshot();
  });
});
