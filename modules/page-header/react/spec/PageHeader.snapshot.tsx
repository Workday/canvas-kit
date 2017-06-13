import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PageHeader from '../lib/PageHeader';

describe('Page Header Snapshots', () => {
  test('renders a basic PageHeader as expected', () => {
    const component = renderer.create(<PageHeader title="Test Page Header" />);
    expect(component).toMatchSnapshot();
  });
  test('renders a marketing context PageHeader as expected', () => {
    const component = renderer.create(
      <PageHeader title="Test Marketing Page Header" marketing={true} />
    );
    expect(component).toMatchSnapshot();
  });
});
