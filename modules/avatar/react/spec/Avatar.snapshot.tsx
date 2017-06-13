import * as React from 'react';
import Avatar from '../lib/Avatar';
import * as renderer from 'react-test-renderer';

describe('Avatar Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Avatar>Button</Avatar>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large Avatar', () => {
    const component = renderer.create(<Avatar size={Avatar.Size.xl} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, dark Avatar', () => {
    const component = renderer.create(
      <Avatar size={Avatar.Size.xl} themeColor={Avatar.ThemeColor.Dark} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders an avatar with a photo', () => {
    const component = renderer.create(
      <Avatar url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png" />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large avatar with a photo', () => {
    const component = renderer.create(
      <Avatar
        size={Avatar.Size.xl}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
