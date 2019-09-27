import * as React from 'react';
import Avatar from '../lib/Avatar';
import * as renderer from 'react-test-renderer';

describe('Avatar Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Avatar>Avatar</Avatar>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large Avatar', () => {
    const component = renderer.create(<Avatar size={Avatar.Size.xl} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, dark Avatar', () => {
    const component = renderer.create(
      <Avatar size={Avatar.Size.xl} variant={Avatar.Variant.Dark} />
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
  test('renders an avatar with an aria label and an alt text', () => {
    const component = renderer.create(
      <Avatar
        altText="my image"
        aria-label="my avatar label"
        size={Avatar.Size.xl}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
