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
  .add('All', () => (
    <div className="story">
      <div className="demo-action-bar-container">
        <div className="wdc-action-bar demo-action-bar-custom">
          <div className="wdc-action-bar-container">
            <button className="wdc-btn wdc-btn-primary">Button</button>
            <button className="wdc-btn">Button</button>
            <button className="wdc-btn">Button</button>
          </div>
        </div>

        <div className="wdc-action-bar demo-action-bar-custom">
          <div className="wdc-action-bar-container">
            <button className="wdc-btn wdc-btn-primary">Next</button>
            <button className="wdc-btn">Back</button>
          </div>
        </div>

        <div className="wdc-action-bar demo-action-bar-custom">
          <div className="wdc-action-bar-container">
            <button className="wdc-btn wdc-btn-primary">Done</button>
          </div>
        </div>

        <div className="wdc-action-bar demo-action-bar-custom">
          <div className="wdc-action-bar-container">
            <button className="wdc-btn wdc-btn-primary">Done</button>
            <button className="wdc-btn wdc-btn-icon-rounded wdc-action-bar-container-item-natural">
              <SystemIcon icon={relatedActionsIcon} />
            </button>
          </div>
        </div>

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
    </div>
  ));
