import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Banner/Alert ', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="story">
      <a className="wdc-banner" href="#">
        <span className="wdc-banner-text">3 Alerts</span>
        <span className="wdc-banner-link">View All</span>
      </a>
    </div>
  ))
  .add('Sticky  ', () => (
    <div className="story">
      <a className="wdc-banner wdc-banner-sticky" href="#">
        <span className="wdc-banner-text">3 Alerts</span>
      </a>
    </div>
  ));

storiesOf('CSS/Banner/Error ', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="story">
      <a className="wdc-banner wdc-banner-error" href="#">
        <span className="wdc-banner-text">3 Errors</span>
        <span className="wdc-banner-link">View All</span>
      </a>
    </div>
  ))
  .add('Sticky', () => (
    <div className="story">
      <a className="wdc-banner wdc-banner-error wdc-banner-sticky" href="#">
        <span className="wdc-banner-text">3 Errors</span>
      </a>
    </div>
  ));
