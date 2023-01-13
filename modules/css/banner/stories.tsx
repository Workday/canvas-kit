import React from 'react';
import {storiesOf} from '@storybook/react';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Banner/Alert ', module)
  .addParameters({ReadmePath: 'css/banner'})
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

storiesOf('CSS/Banner/Error ', module)
  .addParameters({ReadmePath: 'css/banner'})
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
