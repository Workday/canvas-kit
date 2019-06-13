import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Action Bar', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="demo-action-bar-container">
        <div className="wdc-action-bar demo-action-bar-custom">
          <div className="wdc-action-bar-container">
            <button className="wdc-btn wdc-btn-primary">Button</button>
            <button className="wdc-btn">Button</button>
            <button className="wdc-btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With Three Buttons', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Three Buttons</h1>

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
      <h1 className="section-label">Floating Action Toolbar With Two Buttons Fixed</h1>

      <div className="wdc-action-bar demo-action-bar-custom">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Done</button>
        </div>
      </div>
    </div>
  ))
  .add('With Three Buttons Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Three Buttons Fixed</h1>

      <div className="wdc-action-bar demo-action-bar-custom">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Done</button>
          <button className="wdc-btn wdc-btn-icon-rounded wdc-action-bar-container-item-natural">
            <SystemIcon icon={relatedActionsIcon} />
          </button>
        </div>
      </div>
    </div>
  ))
  .add('With Four Buttons Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Three Buttons Fixed</h1>

      <div className="wdc-action-bar demo-action-bar-custom">
        <div className="wdc-action-bar-container">
          <button className="wdc-btn wdc-btn-primary">Button</button>
          <button className="wdc-btn">Button</button>
          <button className="wdc-btn">Button</button>
          <button className="wdc-btn wdc-btn-icon-rounded wdc-action-bar-container-item-natural">
            <SystemIcon icon={relatedActionsIcon} />
          </button>
        </div>
      </div>
    </div>
  ));
