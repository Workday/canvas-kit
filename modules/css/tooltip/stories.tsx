/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {xIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';
import './../button/index.scss';

const containerStyle = css({
  h3: {
    marginBottom: '18px;',
  },
});

storiesOf('Components/Popups/Tooltip/CSS', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div css={containerStyle}>
        <h3>Hover over the icon.</h3>
        <div className="wdc-tooltip-container">
          <button className="wdc-btn-icon-circle" aria-describedby="tooltip">
            <SystemIcon icon={xIcon} />
          </button>
          <div className="wdc-tooltip wdc-tooltip-top" id="tooltip">
            Close
          </div>
        </div>
      </div>
    </div>
  ));
