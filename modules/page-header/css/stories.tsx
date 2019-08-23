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
          <h2 className="wdc-page-header-title">Page Title</h2>
          <div className="wdc-icon-list wdc-icon-list-white">
            <div
              className="wdc-btn wdc-btn-size-m wdc-btn-icon-circle wdc-btn-icon-inverse"
              role="button"
              tabIndex={0}
            >
              <SystemIcon icon={exportIcon} />
            </div>
            <div
              className="wdc-btn wdc-btn-size-m wdc-btn-icon-circle wdc-btn-icon-inverse"
              role="button"
              tabIndex={0}
            >
              <SystemIcon icon={fullscreenIcon} />
            </div>
          </div>
        </div>
      </header>
    </div>
  ));
