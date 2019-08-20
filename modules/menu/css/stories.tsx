import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {extLinkIcon, setupIcon, uploadCloudIcon, userIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import {css} from 'emotion';
import './index.scss';

storiesOf('CSS/Menu', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-type">
        <div className="wdc-menu wdc-menu-grow">
          <ul>
            <li className="wdc-menu-item-focused">
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
  ))
  .add('With Icons', () => (
    <div className="story">
      <div className="wdc-type">
        <div className="wdc-menu" style={{width: '250px'}}>
          <ul>
            <li className="wdc-menu-item-focused">
              <span className="wdc-menu-item-icon">
                <SystemIcon icon={uploadCloudIcon} />
              </span>
              <span className="wdc-menu-item-label">First Item</span>
            </li>
            <li>
              <span className="wdc-menu-item-icon">
                <SystemIcon icon={setupIcon} />
              </span>
              <span className="wdc-menu-item-label">
                Second Item with really really really long label
              </span>
            </li>
            <li className="wdc-menu-item-disabled">
              <span className="wdc-menu-item-icon">
                <SystemIcon icon={uploadCloudIcon} />
              </span>
              <span className="wdc-menu-item-label">Third Item (disabled)</span>
              <span className="wdc-menu-item-icon wdc-menu-item-icon-secondary">
                <SystemIcon icon={extLinkIcon} />
              </span>
            </li>
            <li>
              <span className="wdc-menu-item-icon">
                <SystemIcon icon={userIcon} />
              </span>
            </li>
            <hr />
            <li>
              <span className="wdc-menu-item-icon">
                <SystemIcon icon={userIcon} />
              </span>
              <span className="wdc-menu-item-label">Fifth Item (with divider)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));
