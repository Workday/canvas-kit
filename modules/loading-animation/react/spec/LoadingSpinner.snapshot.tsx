import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoadingSpinner from '../lib/LoadingSpinner';
import {colors} from '@workday/canvas-kit-react-core';

describe('LoadingSpinner Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<LoadingSpinner />);
    expect(component).toMatchSnapshot();
  });
  test('renders a larger LoadingSpinner', () => {
    const component = renderer.create(<LoadingSpinner scale={1.5} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a LoadingSpinner with a different color', () => {
    const component = renderer.create(<LoadingSpinner color={colors.frenchVanilla400} />);
    expect(component).toMatchSnapshot();
  });
});
