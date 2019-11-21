/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';

const containerStyle = css({
  paddingTop: '12px',
});

storiesOf('Components|Indicators/Loading Animation/CSS', module)
  .addDecorator(withReadme(README))
  .add('Loading Dots', () => (
    <div className="story">
      <div css={containerStyle}>
        <div className="wdc-loading-dots">
          <span />
        </div>
      </div>
    </div>
  ));
