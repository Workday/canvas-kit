import * as React from 'react';
import Banner from '../lib/Banner';
import * as renderer from 'react-test-renderer';
import {BannerVariant, BannerTheme} from '../lib/types';

describe('Banner Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Banner />);
    expect(component).toMatchSnapshot();
  });
  test('renders a full banner as expected', () => {
    const component = renderer.create(<Banner variant={BannerVariant.Full} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a sticky banner as expected', () => {
    const component = renderer.create(<Banner variant={BannerVariant.Sticky} />);
    expect(component).toMatchSnapshot();
  });
  test('renders an error banner as expected', () => {
    const component = renderer.create(<Banner theme={BannerTheme.Error} />);
    expect(component).toMatchSnapshot();
  });
  test('renders an alert banner as expected', () => {
    const component = renderer.create(<Banner theme={BannerTheme.Alert} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a banner with a custom action text expected', () => {
    const component = renderer.create(<Banner actionText="Do an action" />);
    expect(component).toMatchSnapshot();
  });
  test('renders a banner with a custom label expected', () => {
    const component = renderer.create(<Banner label="Hello" />);
    expect(component).toMatchSnapshot();
  });
});
