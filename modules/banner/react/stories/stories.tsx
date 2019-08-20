/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';

import Banner from '../index';
import README from '../README.md';

const handleBannerClick = (e: React.SyntheticEvent) => {
  alert(`onClick triggered`);
};

storiesOf('Banner/Alert', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Alerts')}
        actionText={text('actionText', 'View All')}
        theme={Banner.Theme.Alert}
        variant={select(
          'variant',
          {
            Full: Banner.Variant.Full,
            Sticky: Banner.Variant.Sticky,
          },
          Banner.Variant.Full
        )}
      />
    </div>
  ))
  .add('Sticky', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Alerts')}
        actionText={text('actionText', 'View All')}
        theme={Banner.Theme.Alert}
        variant={select(
          'variant',
          {
            Full: Banner.Variant.Full,
            Sticky: Banner.Variant.Sticky,
          },
          Banner.Variant.Sticky
        )}
      />
    </div>
  ));

storiesOf('Banner/Error', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Errors')}
        actionText={text('actionText', 'View All')}
        theme={Banner.Theme.Error}
        variant={select(
          'variant',
          {
            Full: Banner.Variant.Full,
            Sticky: Banner.Variant.Sticky,
          },
          Banner.Variant.Full
        )}
      />
    </div>
  ))
  .add('Sticky', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Errors')}
        actionText={text('actionText', 'View All')}
        theme={Banner.Theme.Error}
        variant={select(
          'variant',
          {
            Full: Banner.Variant.Full,
            Sticky: Banner.Variant.Sticky,
          },
          Banner.Variant.Sticky
        )}
      />
    </div>
  ));
