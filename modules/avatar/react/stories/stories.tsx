/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Avatar, {AvatarButton} from '../index';
import README from '../README.md';
import {withKnobs} from '@storybook/addon-knobs';

// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = (e: React.SyntheticEvent) => {
  console.log('AvatarButton clicked');
};

storiesOf('Components|Indicators/Avatar/React/Default', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} variant={Avatar.Variant.Dark} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} variant={Avatar.Variant.Dark} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} variant={Avatar.Variant.Dark} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} variant={Avatar.Variant.Dark} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} variant={Avatar.Variant.Dark} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} variant={Avatar.Variant.Dark} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} url={testAvatar} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} url={testAvatar} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} url={testAvatar} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} url={testAvatar} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} url={testAvatar} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} url={testAvatar} />
    </div>
  ));

storiesOf('Components|Indicators/Avatar/React/Avatar Button', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .addParameters({component: AvatarButton})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xxl} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <AvatarButton size={AvatarButton.Size.xl} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <AvatarButton size={AvatarButton.Size.l} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <AvatarButton size={AvatarButton.Size.m} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <AvatarButton size={AvatarButton.Size.s} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <AvatarButton size={AvatarButton.Size.xs} onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton
        size={AvatarButton.Size.xxl}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Large</h3>
      <AvatarButton
        size={AvatarButton.Size.xl}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Large</h3>
      <AvatarButton
        size={AvatarButton.Size.l}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Medium</h3>
      <AvatarButton
        size={AvatarButton.Size.m}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Small</h3>
      <AvatarButton
        size={AvatarButton.Size.s}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Small</h3>
      <AvatarButton
        size={AvatarButton.Size.xs}
        variant={AvatarButton.Variant.Dark}
        onClick={handleAvatarButtonClick}
      />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <AvatarButton
        size={AvatarButton.Size.xxl}
        url={testAvatar}
        onClick={handleAvatarButtonClick}
      />
      <h3>Extra Large</h3>
      <AvatarButton
        size={AvatarButton.Size.xl}
        url={testAvatar}
        onClick={handleAvatarButtonClick}
      />
      <h3>Large</h3>
      <AvatarButton size={AvatarButton.Size.l} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <AvatarButton size={AvatarButton.Size.m} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <AvatarButton size={AvatarButton.Size.s} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <AvatarButton
        size={AvatarButton.Size.xs}
        url={testAvatar}
        onClick={handleAvatarButtonClick}
      />
    </div>
  ));
