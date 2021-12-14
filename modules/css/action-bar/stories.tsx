import React from 'react';
import {storiesOf} from '@storybook/react';
import './index.scss';
import './stories.scss';

storiesOf('Components/Buttons/Action Bar/CSS', module)
  .addParameters({ReadmePath: 'css/action-bar'})
  .add('Default', () => (
    <div className="story">
      <div className="wdc-action-bar demo-action-bar-custom" role="region" aria-label="Action Bar">
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
      <div className="wdc-action-bar demo-action-bar-custom" role="region" aria-label="Action Bar">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Next</button>
          <button className="wdc-btn">Back</button>
        </div>
      </div>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <div className="wdc-action-bar wdc-action-bar-fixed" role="region" aria-label="Action Bar">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Next</button>
          <button className="wdc-btn">Back</button>
        </div>
      </div>
    </div>
  ));
