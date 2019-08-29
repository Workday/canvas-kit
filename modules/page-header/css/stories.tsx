import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Page Header', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <header className="wdc-page-header">
        <div className="wdc-page-header-container">
          <h2 className="wdc-page-header-title">Product Context</h2>
          <div className="wdc-icon-list">
            <button className="wdc-btn-icon-inverse" role="button" tabIndex={0}>
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse" role="button" tabIndex={0}>
              <SystemIcon icon={fullscreenIcon} />
            </button>
          </div>
        </div>
      </header>
      x`
    </div>
  ));
