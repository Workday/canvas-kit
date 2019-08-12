import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Action Bar', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-action-bar demo-action-bar-custom">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Button</button>
          <button className="wdc-btn">Button</button>
          <button className="wdc-btn">Button</button>
        </div>
      </div>
    </div>
  ))
  .add('With Two Buttons', () => (
    <div className="story">
      <div className="wdc-action-bar demo-action-bar-custom">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Next</button>
          <button className="wdc-btn">Back</button>
        </div>
      </div>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <div className="wdc-action-bar wdc-action-bar-fixed">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Next</button>
          <button className="wdc-btn">Back</button>
        </div>
      </div>
    </div>
  ));
