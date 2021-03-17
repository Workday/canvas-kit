import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('Components/Indicators/Banner/CSS/Alert ', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="banner-story">
      <a className="wdc-banner" href="#">
        <span className="wdc-banner-text">3 Alerts</span>
        <span className="wdc-banner-link">View All</span>
      </a>
    </div>
  ))
  .add('Sticky  ', () => (
    <div className="banner-story">
      <a className="wdc-banner wdc-banner-sticky" href="#">
        <span className="wdc-banner-text">3 Alerts</span>
      </a>
    </div>
  ));

storiesOf('Components/Indicators/Banner/CSS/Error ', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="banner-story">
      <a className="wdc-banner wdc-banner-error" href="#">
        <span className="wdc-banner-text">3 Errors</span>
        <span className="wdc-banner-link">View All</span>
      </a>
    </div>
  ))
  .add('Sticky', () => (
    <div className="banner-story">
      <a className="wdc-banner wdc-banner-error wdc-banner-sticky" href="#">
        <span className="wdc-banner-text">3 Errors</span>
      </a>
    </div>
  ));
