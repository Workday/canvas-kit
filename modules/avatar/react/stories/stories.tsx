/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Avatar from '../index';
import README from '../README.md';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png';

const handleAvatarButtonClick = action('AvatarButton clicked');

storiesOf('Components|Indicators/Avatar/React/Default', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} variant={Avatar.Variant.Dark} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} variant={Avatar.Variant.Dark} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} variant={Avatar.Variant.Dark} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} variant={Avatar.Variant.Dark} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} variant={Avatar.Variant.Dark} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} variant={Avatar.Variant.Dark} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xxl} url={IMAGE_URL} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={Avatar.Size.xl} url={IMAGE_URL} />
      <h3>Large</h3>
      <Avatar as="div" size={Avatar.Size.l} url={IMAGE_URL} />
      <h3>Medium</h3>
      <Avatar as="div" size={Avatar.Size.m} url={IMAGE_URL} />
      <h3>Small</h3>
      <Avatar as="div" size={Avatar.Size.s} url={IMAGE_URL} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={Avatar.Size.xs} url={IMAGE_URL} />
    </div>
  ));

storiesOf('Components|Indicators/Avatar/React/Avatar Button', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar
        size={Avatar.Size.xxl}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Large</h3>
      <Avatar
        size={Avatar.Size.xl}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Large</h3>
      <Avatar
        size={Avatar.Size.l}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Medium</h3>
      <Avatar
        size={Avatar.Size.m}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Small</h3>
      <Avatar
        size={Avatar.Size.s}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Small</h3>
      <Avatar
        size={Avatar.Size.xs}
        variant={Avatar.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} url={IMAGE_URL} onClick={handleAvatarButtonClick} />
      <h3>Broken Link</h3>
      <Avatar url="/fake/path/to/image.png" onClick={handleAvatarButtonClick} />
    </div>
  ));
