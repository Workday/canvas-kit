import React from 'react';
import {storiesOf} from '@storybook/react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import './index.scss';

storiesOf('Components/Navigation/Page Header/CSS', module)
  .addParameters({ReadmePath: 'css/page-header'})
  .add('Default', () => (
    <div className="story">
      <header className="wdc-page-header">
        <div className="wdc-page-header-container">
          <h2 className="wdc-page-header-title">Product Context</h2>
          <div className="wdc-icon-list">
            <button className="wdc-btn-icon-inverse" aria-label="Export">
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse" aria-label="Fullscreen">
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
            <button className="wdc-btn-icon-inverse" aria-label="Export">
              <SystemIcon icon={exportIcon} />
            </button>
            <button className="wdc-btn-icon-inverse" aria-label="Fullscreen">
              <SystemIcon icon={fullscreenIcon} />
            </button>
          </div>
        </div>
      </header>
    </div>
  ));
