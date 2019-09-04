import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Page Header', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <header className="wdc-page-header">
        <div className="wdc-page-header-container">
          <h2 className="wdc-page-header-title">Product Context</h2>
          <div className="wdc-icon-list">
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={fullscreenIcon} />
            </button>
          </div>
        </div>
      </header>
    </div>
  ))
  .add('Cap Width', () => (
    <div className="story">
      <header className="wdc-page-header">
        <div className="wdc-page-header-container wdc-page-header-cap-width">
          <h2 className="wdc-page-header-title">Product Context</h2>
          <div className="wdc-icon-list">
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={fullscreenIcon} />
            </button>
          </div>
        </div>
      </header>
    </div>
  ))
  .add('Custom Breakpoint', () => (
    <div className="story">
      <header className="wdc-page-header">
        <div className="wdc-page-header-container custom-break-point">
          <h2 className="wdc-page-header-title">Product Context</h2>
          <div className="wdc-icon-list">
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse">
              <SystemIcon icon={fullscreenIcon} />
            </button>
          </div>
        </div>
      </header>
    </div>
  ));
