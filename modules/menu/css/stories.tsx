import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Menu', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section className="menu-demo-section">
        <h2>Menus</h2>
        <div className="wdc-type menu-demo">
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
      </section>
    </div>
  ));
