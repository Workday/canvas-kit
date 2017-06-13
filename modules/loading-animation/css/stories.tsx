import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Loading Animations', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div className="wdc-loading-spinner">
        <span />
      </div>
    </div>
  ));
