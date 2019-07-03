import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';

const containerStyle = css({
  '> *': {
    margin: '20px !important',

    '&:first-child': {
      marginLeft: 0,
    },
  },
});

storiesOf('CSS/Popup', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div className={containerStyle + ' wdc-type'}>
        <div className="wdc-popup wdc-popup-right">
          <div className="wdc-popup-title">Total Salary & Allowances</div>
          <p>Start Date: 01/01/2000</p>
          <p>Total Salary & Allowances: $78,798.88</p>
        </div>

        <div className="wdc-popup wdc-popup-left">
          <div className="wdc-popup-title">Total Salary & Allowances</div>
          <p>Start Date: 01/01/2000</p>
          <p>Total Salary & Allowances: $78,798.88</p>
        </div>

        <div className="wdc-popup wdc-popup-top">
          <div className="wdc-popup-title">Total Salary & Allowances</div>
          <p>Start Date: 01/01/2000</p>
          <p>Total Salary & Allowances: $78,798.88</p>
        </div>

        <div className="wdc-popup wdc-popup-bottom">
          <div className="wdc-popup-title">Total Salary & Allowances</div>
          <p>Start Date: 01/01/2000</p>
          <p>Total Salary & Allowances: $78,798.88</p>
        </div>
      </div>
    </div>
  ));
