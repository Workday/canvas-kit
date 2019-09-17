import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {xIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';
import './../../button/css/index.scss';

const containerStyle = css({
  h3: {
    marginBottom: '18px;',
  },
});

storiesOf('CSS/Tooltip', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className={containerStyle}>
        <h3>Hover over the icon.</h3>
        <div className="wdc-tooltip-container">
          <button className="wdc-btn-icon-circle" aria-label="Activity Stream">
            <SystemIcon icon={xIcon} />
          </button>
          <div className="wdc-tooltip wdc-tooltip-top">Close</div>
        </div>
      </div>
    </div>
  ));
