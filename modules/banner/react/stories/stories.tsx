/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';

import Banner, {BannerVariant, BannerTheme} from '../index';
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
        theme={BannerTheme.Alert}
        variant={select(
          'variant',
          {
            Full: BannerVariant.Full,
            Sticky: BannerVariant.Sticky,
          },
          BannerVariant.Full
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
        theme={BannerTheme.Alert}
        variant={select(
          'variant',
          {
            Full: BannerVariant.Full,
            Sticky: BannerVariant.Sticky,
          },
          BannerVariant.Sticky
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
        theme={BannerTheme.Error}
        variant={select(
          'variant',
          {
            Full: BannerVariant.Full,
            Sticky: BannerVariant.Sticky,
          },
          BannerVariant.Full
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
        theme={BannerTheme.Error}
        variant={select(
          'variant',
          {
            Full: BannerVariant.Full,
            Sticky: BannerVariant.Sticky,
          },
          BannerVariant.Sticky
        )}
      />
    </div>
  ));
