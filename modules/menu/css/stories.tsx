import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';

storiesOf('CSS/Menu', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-type">
        <div className="wdc-menu">
          <ul>
            <li>
              <a href="#">First Item</a>
            </li>
            <li>Second Item with really really really long label</li>
            <li className="wdc-menu-item-disabled">Third Item (disabled)</li>
            <li>
              <em>
                Fourth Item (<b>with markup</b>)
              </em>
            </li>
            <hr />
            <li>Fifth Item (with divider)</li>
          </ul>
        </div>
      </div>
    </div>
  ));
