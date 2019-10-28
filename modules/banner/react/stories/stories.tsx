/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import Banner from '../index';
import README from '../README.md';

const handleBannerClick = (e: React.SyntheticEvent) => {
  alert(`onClick triggered`);
};

storiesOf('Banner/Alert', module)
  .addParameters({component: Banner})
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Alerts')}
        actionText={text('actionText', 'View All')}
        error={Banner.ErrorType.Alert}
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
        error={Banner.ErrorType.Alert}
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
  .addParameters({component: Banner})
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Full', () => (
    <div className="story">
      <Banner
        onClick={handleBannerClick}
        label={text('label', '3 Errors')}
        actionText={text('actionText', 'View All')}
        error={Banner.ErrorType.Error}
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
        error={Banner.ErrorType.Error}
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
