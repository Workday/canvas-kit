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

storiesOf('CSS/Menu', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className={containerStyle + ' wdc-type'}>
        <div className="wdc-menu">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="wdc-menu wdc-menu-right">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="wdc-menu wdc-menu-left">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="wdc-menu wdc-menu-top">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="wdc-menu wdc-menu-bottom">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>Item 2</li>
          </ul>
        </div>
      </div>
    </div>
  ));
