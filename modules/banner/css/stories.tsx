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
      <h1 className="section-label">Banner Alert Full</h1>
      <div>
        <section>
          <a className="wdc-alert-bar" href="#">
            <span className="wdc-alert-bar-text">10 Alerts</span>
            <span className="wdc-alert-bar-link">View All</span>
          </a>
        </section>
      </div>
    </div>
  ))
  .add('Mini  ', () => (
    <div className="story">
      <h1 className="section-label">Banner Alert Mini</h1>
      <div>
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">10 Alerts</span>
          </a>
        </section>
      </div>
    </div>
  ));

storiesOf('CSS/Banner/Error ', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">Banner Error Full</h1>
      <div>
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error" href="#">
            <span className="wdc-alert-bar-text">24 Errors and 12 Alerts</span>
            <span className="wdc-alert-bar-link">View All</span>
          </a>
        </section>
      </div>
    </div>
  ))
  .add('Mini', () => (
    <div className="story">
      <h1 className="section-label">Banner Error Mini</h1>
      <div>
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">24 Errors and 12 Alerts</span>
          </a>
        </section>
      </div>
    </div>
  ));
