/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {AvatarButton} from '../index';
import README from '../README.md';

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png';

storiesOf('AvatarButton', module)
  .addDecorator(withReadme(README))
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xxl} />
      <h3>Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xl} />
      <h3>Large</h3>
      <AvatarButton size={AvatarButton.Size.l} />
      <h3>Medium</h3>
      <AvatarButton size={AvatarButton.Size.m} />
      <h3>Small</h3>
      <AvatarButton size={AvatarButton.Size.s} />
      <h3>Extra Small</h3>
      <AvatarButton size={AvatarButton.Size.xs} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xxl} variant={AvatarButton.Variant.Dark} />
      <h3>Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xl} variant={AvatarButton.Variant.Dark} />
      <h3>Large</h3>
      <AvatarButton size={AvatarButton.Size.l} variant={AvatarButton.Variant.Dark} />
      <h3>Medium</h3>
      <AvatarButton size={AvatarButton.Size.m} variant={AvatarButton.Variant.Dark} />
      <h3>Small</h3>
      <AvatarButton size={AvatarButton.Size.s} variant={AvatarButton.Variant.Dark} />
      <h3>Extra Small</h3>
      <AvatarButton size={AvatarButton.Size.xs} variant={AvatarButton.Variant.Dark} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xxl} url={IMAGE_URL} />
      <h3>Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xl} url={IMAGE_URL} />
      <h3>Large</h3>
      <AvatarButton size={AvatarButton.Size.l} url={IMAGE_URL} />
      <h3>Medium</h3>
      <AvatarButton size={AvatarButton.Size.m} url={IMAGE_URL} />
      <h3>Small</h3>
      <AvatarButton size={AvatarButton.Size.s} url={IMAGE_URL} />
      <h3>Extra Small</h3>
      <AvatarButton size={AvatarButton.Size.xs} url={IMAGE_URL} />
    </div>
  ));
