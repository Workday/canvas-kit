/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';

import Banner from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {BannerVariant, BannerTheme} from './lib/types';

const handleBannerClick = (e: React.SyntheticEvent) => {
  alert(`onClick triggered`);
};

storiesOf('Canvas Kit/Banner/Alert', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">Banner Alert Full</h1>
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
      <h1 className="section-label">Banner Alert Sticky</h1>
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

storiesOf('Canvas Kit/Banner/Error', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">Banner Error Full</h1>
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
      <h1 className="section-label">Banner Error Sticky</h1>
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
