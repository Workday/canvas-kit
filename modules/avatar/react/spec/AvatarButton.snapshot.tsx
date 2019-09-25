import * as React from 'react';
import AvatarButton from '../lib/AvatarButton';
import * as renderer from 'react-test-renderer';

describe('AvatarButton Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<AvatarButton>Button</AvatarButton>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large AvatarButton', () => {
    const component = renderer.create(<AvatarButton size={AvatarButton.Size.xl} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, dark AvatarButton', () => {
    const component = renderer.create(
      <AvatarButton size={AvatarButton.Size.xl} variant={AvatarButton.Variant.Dark} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders an AvatarButton with a photo', () => {
    const component = renderer.create(
      <AvatarButton url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png" />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large avatar with a photo', () => {
    const component = renderer.create(
      <AvatarButton
        size={AvatarButton.Size.xl}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders an avatar with an aria label and an alt text', () => {
    const component = renderer.create(
      <AvatarButton
        altText="my image"
        aria-label="my avatar label"
        size={AvatarButton.Size.xl}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large avatar with a photo and a button', () => {
    const cb = jest.fn();
    const component = renderer.create(
      <AvatarButton
        size={AvatarButton.Size.xl}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
        onClick={cb}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
