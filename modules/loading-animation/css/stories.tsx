import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';

const containerStyle = css({
  paddingTop: '12px',
});

storiesOf('CSS/Loading Animations', module)
  .addDecorator(withReadme(README))
  .add('Loading Dots', () => (
    <div className="story">
      <div className={containerStyle}>
        <div className="wdc-loading-dots">
          <span />
        </div>
      </div>
    </div>
  ));
