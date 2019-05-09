/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../utils/storybook';

import Avatar from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Avatar', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Avatar</h1>
      <Avatar />
      <Avatar size={Avatar.Size.l} />
      <Avatar size={48} />
      <Avatar themeColor={Avatar.ThemeColor.Dark} />
      <Avatar size={Avatar.Size.l} themeColor={Avatar.ThemeColor.Dark} />
      <Avatar size={48} themeColor={Avatar.ThemeColor.Dark} />
      <Avatar
        size={48}
        url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
      />
      <Avatar
        onClick={() => {
          window.alert('Avatar Clicked');
        }}
        size={Avatar.Size.l}
      />
      <Avatar
        onClick={() => {
          window.alert('Avatar Clicked');
        }}
        size={Avatar.Size.l}
        themeColor={Avatar.ThemeColor.Dark}
      />
    </div>
  ));
