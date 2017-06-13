import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CookieBanner from '../lib/CookieBanner';

function noop() {
  // noop
}

describe('Cookie Banner Snapshots', () => {
  test('renders a CookieBanner', () => {
    const component = renderer.create(<CookieBanner onAccept={noop} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a closed CookieBanner', () => {
    const component = renderer.create(<CookieBanner onAccept={noop} isClosed={true} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a CookieBanner with settings', () => {
    const component = renderer.create(<CookieBanner onAccept={noop} onClickSettings={noop} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a closed CookieBanner with settings', () => {
    const component = renderer.create(
      <CookieBanner onAccept={noop} onClickSettings={noop} isClosed={true} />
    );
    expect(component).toMatchSnapshot();
  });
});
