import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';

const containerStyle = css({
  paddingTop: '20px',
  '> *': {
    margin: '20px !important',

    '&:first-child': {
      marginLeft: 0,
    },
  },
});

storiesOf('CSS/Tooltip', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className={containerStyle + ' wdc-type'}>
        <div className="wdc-tooltip-container">
          Right tooltip
          <div className="wdc-tooltip wdc-tooltip-right">Tooltip text</div>
        </div>

        <div className="wdc-tooltip-container">
          Left tooltip
          <div className="wdc-tooltip wdc-tooltip-left">Tooltip text</div>
        </div>

        <div className="wdc-tooltip-container">
          Top tooltip
          <div className="wdc-tooltip wdc-tooltip-top">Tooltip text</div>
        </div>

        <div className="wdc-tooltip-container">
          Bottom tooltip
          <div className="wdc-tooltip wdc-tooltip-bottom">Tooltip text</div>
        </div>
      </div>
    </div>
  ));
